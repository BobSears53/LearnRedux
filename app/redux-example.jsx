var redux = require('redux');

console.log('Starting redux example');



//reducer takes state and updates
//The reducer has a default state
//The reducer returns a state even if there is no action or if the action is not recognized.

//Name Reducer and Action Generators
// -----------------------------------------------------
var nameReducer = (state = 'Anonymous',action) => {
    switch (action.type){
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    };
};

var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};

//Hobby Reducer and Action Generators
// -----------------------------------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id)
        default:
            return state;
    }
};

var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    };
};

var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    };
};

//Movie Reducer and Action Generators
// -----------------------------------------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return  [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title,
                    genre: action.genre
                }
        ];
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id)
        default:
            return state;
    }
};

var addMovie = (movie, genre) => {
    return {
        type: 'ADD_MOVIE',
        movie,
        genre
    };
};


var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    };
};

// Reducers

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
    // window.devToolsExtension ? window.devToolsExtension() : (f) => {
    //     return f;
    //}
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('name is', state.name);
    document.getElementById('app').innerHTML = state.name;

    console.log('New State', store.getState());
});

var currentState = store.getState();
console.log('currentState', currentState);
//unsubscribe();


store.dispatch(changeName('Bob'));

store.dispatch(addHobby('Drumming'));

store.dispatch(addHobby('Singing'));

store.dispatch(removeHobby(2));

store.dispatch(changeName('Charlene'));

store.dispatch(addMovie('Star Wars', 'Sci-Fi'));

store.dispatch(addMovie('Buckaroo Bonzai', 'Sci-Fi'));

store.dispatch(removeMovie(1));




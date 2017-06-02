var redux = require('redux');

console.log('Starting redux example');


var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};
var nextHobbyId = 1;
var nextMovieID = 1;
//reducer takes state and updates
//The reducer has a default state
//The reducer returns a state even if there is no action or if the action is not recognized.
var oldreducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};

    console.log('New action', action);
    switch (action.type) {
        case 'CHANGE_NAME':
            return { // return a new state based on action
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return{
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            };
        case  'ADD_MOVIE':
            return {
                ...state,
                movies:[
                    ...state.movies,
                    {
                        id: nextMovieID++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            };
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.id)
            };
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
            }
        default:
            return state;
    }
};

var nameReducer = (state = 'Anonymous',action) => {
    switch (action.type){
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    };
};

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

var moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return  [
                ...state,
                {
                    id: nextMovieID++,
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

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Bob'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Drumming'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Singing'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Charlene'
});

store.dispatch({
    type:'ADD_MOVIE',
    title: 'Star Wars',
    genre: 'Sci-Fi'
});

store.dispatch({
    type:'ADD_MOVIE',
    title: 'Buckaroo Bonzai',
    genre: 'Sci-Fi'
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});



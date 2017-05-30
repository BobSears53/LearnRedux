var redux = require('redux');

console.log('Starting ToDo redux example');

//reducer takes state and updates
//The reducer has a default state
//The reducer returns a state even if there is no action or if the action is not recognized.
var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};
var reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};
    switch (action.type) {
        case 'CHANGE_SEARCH_STATE':
            return { // return a new state based on action
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('searchText', state.searchText);
    document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_SEARCH_STATE',
    searchText: 'Sam'
});

store.dispatch({
    type: 'CHANGE_SEARCH_STATE',
    searchText: 'Pete'
});

store.dispatch({
    type: 'CHANGE_SEARCH_STATE',
    searchText: 'Raplh'
});



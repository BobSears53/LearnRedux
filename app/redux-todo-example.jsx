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
    return state;
};
var store = redux.createStore(reducer);

console.log('currentState', store.getState());

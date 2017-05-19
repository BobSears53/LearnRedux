var redux = require('redux');

console.log('Starting redux example');

//reducer takes state and updates
//The reducer has a default state
//The reducer returns a state even if there is no action or if the action is not recognized.
var reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'};
    return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);

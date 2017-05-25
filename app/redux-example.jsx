var redux = require('redux');

console.log('Starting redux example');

//reducer takes state and updates
//The reducer has a default state
//The reducer returns a state even if there is no action or if the action is not recognized.
var reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'};

    console.log('New action', action);
    switch (action.type) {
        case 'CHANGE_NAME':
            return { // return a new state based on action
                ...state,
                name: action.name
            };
        default:
            return state;
    }
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Bob'
});

console.log('Name should be Bob', store.getState());


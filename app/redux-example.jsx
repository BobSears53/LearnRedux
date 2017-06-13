var redux = require('redux');


console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('New State', store.getState());

    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url)
    {
        document.getElementById('app').innerHTML = '<a href="' + state.map.url +'" target="_blank">View Your Location</a>';
    }
});

var currentState = store.getState();
console.log('currentState', currentState);
//unsubscribe();

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Bob'));

store.dispatch(actions.addHobby('Drumming'));

store.dispatch(actions.addHobby('Singing'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Charlene'));

store.dispatch(actions.addMovie('Star Wars', 'Sci-Fi'));

store.dispatch(actions.addMovie('Buckaroo Bonzai', 'Sci-Fi'));

store.dispatch(actions.removeMovie(1));




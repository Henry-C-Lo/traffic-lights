const intersection = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        case 'GO':
            console.log(Object.assign({}, state, action.payload));
            return Object.assign({}, state, action.payload);
        case 'STOP':
            console.log(Object.assign({}, state, action.payload));
            return Object.assign({}, state, action.payload);
        default:
            return state
    }

}

const defaultState = {
    north: 'red',
    east: 'red',
    south: 'red',
    west: 'red'
}

export default intersection
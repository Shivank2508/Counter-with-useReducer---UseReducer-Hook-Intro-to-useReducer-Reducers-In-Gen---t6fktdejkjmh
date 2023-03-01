const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            //code
            return {
                ...state, value: state.value + 1
            }

        case 'decrement':
            //code
            return {
                ...state, value: state.value - 1
            }

        default:
            return state;
    }
}

export { counterReducer }
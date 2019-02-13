export function towns(state = [], action) {
    switch (action) {
        case ADD_TOWN:
            return state.concat(town);
        default:
            return state;
    }
}
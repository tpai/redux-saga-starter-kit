export const CHANGE = 'step/CHANGE';

const reducer = (state = 1, action) => {
    switch (action.type) {
    case CHANGE:
        return parseInt(action.data, 10);
    default:
        return state;
    }
}

export default reducer;

export function stepChange(value) {
    return {
        type: CHANGE,
        data: value
    };
}

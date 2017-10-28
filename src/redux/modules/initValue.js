export const VALUE_INIT = 'value/INIT';

const reducer = (state = 0, action) => {
    switch (action.type) {
    case VALUE_INIT:
        return parseInt(action.data, 10);
    default:
        return state;
    }
}

export default reducer;

export function initValueChange(value) {
    return {
        type: VALUE_INIT,
        data: value
    };
}

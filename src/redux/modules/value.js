import { RESET } from 'redux/modules/reset';

export const VALUE_SYNC = 'value/SYNC';

const reducer = (state = 0, action) => {
    switch (action.type) {
    case VALUE_SYNC: // eslint-disable-line
        const { T, step } = action.data;
        return parseInt(state, 10) + parseInt((T - 1 === 0 ? step : step * 2), 10);
    case RESET:
        return action.data;
    default:
        return state;
    }
}

export default reducer;

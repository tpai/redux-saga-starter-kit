import { RESET } from 'redux/modules/reset';

export const T_INCREASE = 'T/INCREASE';

const reducer = (state = 0, action) => {
    switch (action.type) {
    case T_INCREASE:
        return state + 1;
    case RESET:
        return 0;
    default:
        return state;
    }
}

export default reducer;

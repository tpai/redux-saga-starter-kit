export const ACTIVE = 'mode/ACTIVE';
export const INACTIVE = 'mode/INACTIVE';

const reducer = (state = 'inactive', action) => {
    switch (action.type) {
    case ACTIVE:
        return 'active';
    case INACTIVE:
        return 'inactive';
    default:
        return state;
    }
}

export default reducer;

export const TIMER_ACTIVE_ACTION = 'timer/ACTIVE_ACTION';
export const TIMER_INACTIVE_ACTION = 'timer/INACTIVE_ACTION';
export const TIMER_ACTIVE = 'timer/ACTIVE';
export const TIMER_INACTIVE = 'timer/INACTIVE';

const reducer = (state = 'Inactive', action) => {
    switch (action.type) {
    case TIMER_ACTIVE:
        return 'Active';
    case TIMER_INACTIVE:
        return 'Inactive';
    default:
        return state;
    }
}

export default reducer;

export function setActive() {
    return { type: TIMER_ACTIVE_ACTION };
}

export function setInactive() {
    return { type: TIMER_INACTIVE_ACTION };
}

export const RESET = 'reset';

export function reset(value) {
    return { type: RESET, data: value };
}

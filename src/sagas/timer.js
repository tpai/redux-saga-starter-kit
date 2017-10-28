import { put, call, take, fork, cancel, select } from 'redux-saga/effects';

import {
    TIMER_ACTIVE_ACTION,
    TIMER_INACTIVE_ACTION,
    TIMER_ACTIVE,
    TIMER_INACTIVE
} from 'redux/modules/timer';
import { T_INCREASE } from 'redux/modules/T';
import { VALUE_SYNC } from 'redux/modules/value';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* tick() {
    while(true) {
        yield call(delay, 1000);
        yield put({ type: T_INCREASE });
        const { T, step } = yield select();
        yield put({ type: VALUE_SYNC, data: { T, step } });
    }
}

export function* watchTimer() {
    while(yield take(TIMER_ACTIVE_ACTION)) {
        yield put({ type: TIMER_ACTIVE });

        const sync = yield fork(tick)

        yield take(TIMER_INACTIVE_ACTION)
        yield put({ type: TIMER_INACTIVE });
        yield cancel(sync)
    }
}

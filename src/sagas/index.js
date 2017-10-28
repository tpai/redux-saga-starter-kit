import { watchTimer } from 'sagas/timer';

export default function* rootSaga() {
    yield [
        watchTimer()
    ]
}

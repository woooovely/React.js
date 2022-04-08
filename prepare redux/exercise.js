import { createStore } from 'redux';

// createStore은 스토어를 만들어주는 함수
// 리액트 프로젝트에서는 단 하나의 스토어를 만듬


/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
    counter: 0,
    text: '',
    list: []
};

/* 액션 타입 정하기 */
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/* 액션 생성 함수 정의 */
function increase() {
    return {
        type: INCREASE
    };
}

const decrease = () => ({
    type: DECREASE
});

const onChangeText = text => ({
    type: CHANGE_TEXT,
    text // 액션 안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있음
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

/* 리듀서 만들기 */
// 리듀서에서는 불변성을 꼭 유지해야 함
function reducer(state = initialState, action) {
    // state의 초기값을 initialState로 지정
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
}

/* 스토어 만들기 */
const store = createStore(reducer);

console.log(store.getState()); // 현재 store 안에 들어있는 상태 조회

// 스토어 안에 들어있는 상태가 바뀔 때마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState();
    console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독을 해제할 때는 unsubscribe() 를 호출

// 액션 디스패치
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(onChangeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));




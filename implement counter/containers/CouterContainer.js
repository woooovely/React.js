import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
    // useSelector는 리덕스 상태를 조회하는 Hook
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));


    const dispatch = useDispatch();  // 리덕스 스토어의 dispatch를 함수에서 사용하게 할 수 있는 Hook
    
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter
           number={number}
           diff={diff}
           // 액선을 디스패치하는 함수들을 props로 넣어줌
           onIncrease={onIncrease}
           onDecrease={onDecrease}
           onSetDiff={onSetDiff}
           />
    );



}

export default CounterContainer;
import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil';
import { countState } from './count';


function ReadWriteCount() {
    const [count, setCount] = useRecoilState(countState);
    const setCountUseSetRecoilState = useSetRecoilState(countState);
    const resetCount = useResetRecoilState(countState);

    return (
        <div>
            <h2>읽기 쓰기 카운트 컴포넌트</h2>
            <p>카운트: {count}</p>
            <button onClick={() => setCount(count + 1)}>숫자 증가</button>
            <button onClick={() => setCount(count - 1)}>숫자 감소</button>
            <button onClick={() => setCountUseSetRecoilState(count + 1)}>
                숫자 증가 (useSetRecoilState 사용)
            </button>
            <button onClick={() => setCountUseSetRecoilState(count -1)}>
                숫자 감소 (useSetRecoilState 사용)
            </button>
            <button onClick={resetCount}>카운트 리셋</button>
        </div>
    )

};

export default ReadWriteCount;
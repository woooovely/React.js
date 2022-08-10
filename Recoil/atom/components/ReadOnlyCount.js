import { useRecoilValue } from 'recoil';
import { countState } from './count';

function ReadOnlyCount() {
    const count = useRecoilValue(countState);

    return (
        <div>
            <h2>읽기 전용 카운트 컴포넌트</h2>
            <p>카운트: {count}</p>
        </div>
    )
};

export default ReadOnlyCount;
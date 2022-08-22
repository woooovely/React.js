import { useRecoilValue } from 'recoil';
import { recoilStarCountState } from './count';

function RecoilStarCount() {
    const recoilStarCount = useRecoilValue(recoilStarCountState);

    return (
        <>
          <p>recoil github subscribers 갯수</p>
          <p>{recoilStarCount}개</p>
        </>
    )
};

export default RecoilStarCount;
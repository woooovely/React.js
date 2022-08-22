import { selector } from 'recoil';

export const recoilStarCountState = selector({
    key: 'asyncState',
    get: async () => {
        const res = await fetch(`https://api.github.com/repos/facebookexperimental/Recoil`)
        const recoilProjectInfo = await res.json();

        return recoilProjectInfo['subscribers_count'];
    }
})
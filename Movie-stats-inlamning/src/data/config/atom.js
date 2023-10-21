import {atom, selector,} from 'recoil';

const currentChartSize = atom({
    key: 'chartSize',
    default:"small",
})

export {currentChartSize} 
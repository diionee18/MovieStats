import {atom, selector,} from 'recoil';

const chartSize = atom({
    key: 'chartSize',
    default:"small",
})

export {chartSize} 
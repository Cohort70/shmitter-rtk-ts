import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface StatsPayload {
    statsType: 'followers' | 'following',
    sum: number
}

const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        followers: 0,
        following: 0
    },
    reducers: {
        changeStats:{
            reducer: (state, action: PayloadAction<StatsPayload>) => {
                const res = state[action.payload.statsType] + action.payload.sum;
                state[action.payload.statsType] = res >= 0 ? res : 0
            },
            prepare: (statsType, sum) => ({payload: {statsType, sum}})
        }
    }
})

export const {changeStats} = statsSlice.actions
export default statsSlice.reducer
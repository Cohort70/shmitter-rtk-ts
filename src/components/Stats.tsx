import Avatar from "./Avatar.tsx";
import {FOLLOWERS, FOLLOWING} from "../utils/constants.ts";
import {changeStats} from "../features/stats/statsSlice.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";

const Stats = () => {
    const {followers, following} = useAppSelector(state => state.stats);
    const name = useAppSelector(state => state.user.name);
    const dispatch = useAppDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => dispatch(changeStats(FOLLOWERS, 1))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats(FOLLOWERS, -1))
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => dispatch(changeStats(FOLLOWING, 1))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats(FOLLOWING, -1))
                    }}
                >Following: {following}</div>
            </div>
        </div>
    );
};

export default Stats;
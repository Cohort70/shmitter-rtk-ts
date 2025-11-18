import {changeAvatar, changeName} from "../features/user/userSlice.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";

interface AvatarProps {
    size?: 'small'
}

const Avatar = ({size}: AvatarProps) => {
    const {name, avatar} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch();

    return (
        <img
            onClick={() => {
                const url = prompt('Enter a new avatar URL');
                dispatch(changeAvatar(url));
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter a new username');
                dispatch(changeName(name));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar} alt={name}
        />
    );
};

export default Avatar;
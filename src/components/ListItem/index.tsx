import React from 'react';
import { FiRotateCcw } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { UserType } from '../../@types/user';
import { userActionTypes } from '../../store/reducer/userReducer';
import { Item, ItemInfo, ItemTitle, LinkRestore } from './styles';

interface UserProps {
  user: UserType;
}

const ListItem: React.FC<UserProps> = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleRestoreUser(userRestore: UserType): void {
    const actionUser = { type: userActionTypes.ADD_USER, data: userRestore };
    dispatch(actionUser);
    history.push('/');
  }
  return (
    <Item>
      <img src={user.avatar_url} alt="avatar" height="64" />
      <ItemInfo>
        <ItemTitle>{user.name}</ItemTitle>
        <p>{user.email}</p>
      </ItemInfo>
      <LinkRestore onClick={() => handleRestoreUser(user)}>
        <FiRotateCcw />
      </LinkRestore>
    </Item>
  );
};

export default ListItem;

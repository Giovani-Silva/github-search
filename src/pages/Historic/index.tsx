import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { UserType } from '../../@types/user';
import ListItem from '../../components/ListItem';

const Historic: React.FC = () => {
  const history = useSelector((state: RootStateOrAny) => state.historic);
  return (
    <>
      {!history.length && <p>Não há histórico de pesquisa</p>}
      {history.map((user: UserType) => (
        <ListItem key={user.name} user={user} />
      ))}
    </>
  );
};

export default Historic;

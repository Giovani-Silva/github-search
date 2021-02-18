import React from 'react';
import { FiRotateCcw } from 'react-icons/fi';
import { Item, ItemInfo, ItemTitle, Link } from './styles';

const ListItem: React.FC = () => (
  <Item>
    <img
      src="https://avatars.githubusercontent.com/u/583231?v=4"
      alt="avatar"
      height="64"
    />
    <ItemInfo>
      <ItemTitle>Name</ItemTitle>
      <p>email</p>
    </ItemInfo>
    <Link href="/">
      <FiRotateCcw />
    </Link>
  </Item>
);

export default ListItem;

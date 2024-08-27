import React from 'react';
import clsx from 'clsx';

interface ListItemProps {
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return (
    <li className={clsx('text-gray-800', 'dark:text-gray-200', 'mb-1')}>
      {children}
    </li>
  );
};

export default ListItem;

import React from 'react';
import clsx from 'clsx';

interface ListProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return <ul className={clsx('list-disc', 'text-left', 'pl-6')}>{children}</ul>;
};

export default List;

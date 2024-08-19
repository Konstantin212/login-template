import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';

export type ContextType = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
];

const Auth = () => {
  const [email, setEmail] = useState('');

  return (
    <div
      className={clsx(
        'grid',
        'min-h-screen',
        'grid-cols-2',
        'gap-6',
        'text-white'
      )}
    >
      <div
        className={clsx(
          'grid',
          'items-center',
          'content-center',
          'justify-center',
          'bg-gradient-to-r',
          'from-cyan-500',
          'to-blue-500'
        )}
      >
        <div className={clsx('max-h-300px', 'max-w-screen-sm')}>
          <h1 className={clsx('mb-9')}>Create Account</h1>
          <p className={clsx('text-lg', 'mb-9')}>
            To keep connected with us please login with your personal info
          </p>
          <Link
            to="/registration"
            className={clsx(
              'my-5',
              'flex',
              'justify-center',
              'rounded-xl',
              'p-3',
              'border-2',
              'border-solid',
              'border-white',
              'text-white',
              'hover:bg-white',
              'hover:border-blue-400',
              'hover:text-blue-600',
              'max-w-80',
              'mx-auto'
            )}
          >
            Registration
          </Link>
        </div>
      </div>
      <Outlet context={[email, setEmail]} />
    </div>
  );
};

export default Auth;

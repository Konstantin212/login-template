import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import Button from '../../components/Button';

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
          <Button to="/registration" variant="secondary">
            Registration
          </Button>
        </div>
      </div>
      <Outlet context={[email, setEmail]} />
    </div>
  );
};

export default Auth;

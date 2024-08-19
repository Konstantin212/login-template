import { useOutletContext } from 'react-router-dom';
import clsx from 'clsx';
import { ContextType } from '@pages/Auth';
import Social from '@pages/Auth/components/Social';
import Input from '@components/Form/Input';

const Login = () => {
  const [email, setEmail] = useOutletContext<ContextType>();

  return (
    <div
      className={clsx(
        'flex',
        'content-center',
        'items-center',
        'justify-center',
        'text-black',
        'w-100'
      )}
    >
      <div className={clsx('grid', 'max-w-screen-sm', 'w-full')}>
        <h2 className={clsx('mb-4', 'text-5xl')}>Welcome Back!</h2>

        <Social />

        <form className={clsx('mt-5', 'justify-center', 'items-center')}>
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="email"
            placeholder="john.doe@company.com"
            required
          />

          <div className={clsx('mb-6')}>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className={clsx(
              'grid',
              'max-w-80',
              'w-full',
              'mx-auto',
              'text-white',
              'bg-blue-600',
              'p-3',
              'from-cyan-500 to-blue-500 hover:bg-gradient-to-bl'
            )}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

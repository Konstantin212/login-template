import { Link, useOutletContext } from 'react-router-dom';
import { ContextType } from '../../index.tsx';
import clsx from 'clsx';
import Input from '@components/Form/Input';
import User from '@assets/icons/User/index.tsx';
import Mail from '@assets/icons/Mail/index.tsx';
import Lock from '@assets/icons/Lock/index.tsx';
import Button from '@components/Button/index.tsx';

const Registration = () => {
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
        <h2 className={clsx('mb-4', 'text-black', 'text-5xl')}>
          Create Account
        </h2>

        <form className={clsx('mt-5', 'justify-center', 'items-center')}>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            required
            startIcon={<User />}
          />
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="email"
            startIcon={<Mail />}
            placeholder="Email"
            required
          />

          <Input
            type="password"
            id="password"
            placeholder="Password"
            startIcon={<Lock />}
            required
          />
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            startIcon={<Lock />}
            required
          />
          <div className="mb-6 flex items-start">
            <Input
              containerClassName={clsx('flex', 'h-5', 'items-center')}
              id="remember"
              type="checkbox"
              value=""
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              required
            />
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{' '}
              <Link
                to="#"
                className={clsx(
                  'text-blue-600',
                  'hover:underline',
                  'dark:text-blue-500'
                )}
              >
                terms and conditions
              </Link>
              .
            </label>
          </div>
          <Button type="submit" variant="primary" size="lg">
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Registration;

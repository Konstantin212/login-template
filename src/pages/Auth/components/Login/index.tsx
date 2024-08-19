import { useOutletContext } from 'react-router-dom';
import clsx from 'clsx';
import Facebook from '@assets/icons/Facebook';
import Google from '@assets/icons/Google';
import Linkedin from '@assets/icons/Linkedin';
import { ContextType } from '@pages/Auth';

const Login = () => {
  const [email, setEmail] = useOutletContext<ContextType>();

  return (
    <div
      className={clsx(
        'content-center',
        'items-center',
        'justify-center',
        'text-black',
        'w-100'
      )}
    >
      <div className={clsx('grid', 'max-w-screen-sm')}>
        <h2 className={clsx('mb-4', 'text-5xl')}>Create Account</h2>

        <div
          className={clsx(
            'flex',
            'row',
            'content-center',
            'justify-center',
            'elements-center',
            'h-full'
          )}
        >
          <Facebook width="24px" height="24px" />
          <Google width="24px" height="24px" />
          <Linkedin width="24px" height="24px" />
        </div>

        <form>
          <div className={clsx('mb-6')}>
            <label
              htmlFor="email"
              className={clsx(
                'mb-2',
                'text-sm',
                'font-medium',
                'text-gray-900',
                'dark:text-white'
              )}
            >
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

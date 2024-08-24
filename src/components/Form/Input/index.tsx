import clsx from 'clsx';
import { forwardRef } from 'react';

interface TInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  containerClassName?: string;
  startIcon?: React.ReactNode;
  error?: string;
}

const Input = forwardRef(
  (
    {
      startIcon,
      containerClassName,
      className,
      id,
      error = '',
      ...props
    }: TInputProps,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    return (
      <div className={clsx('relative', 'mb-7', containerClassName)}>
        {startIcon ? (
          <label htmlFor={id} className={clsx('absolute', 'top-1/4', 'left-2')}>
            {startIcon}
          </label>
        ) : null}
        <input
          ref={ref}
          id={id}
          type="text"
          className={clsx(
            'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
            { 'pl-9': startIcon },
            className
          )}
          {...props}
        />
        {error && (
          <p className={clsx('text-red-500', 'absolute', '-bottom-2/3')}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default Input;

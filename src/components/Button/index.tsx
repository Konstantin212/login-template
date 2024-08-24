import clsx from 'clsx';
import { forwardRef, useMemo } from 'react';
import { Link } from 'react-router-dom';

const Sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  full: 'full',
} as const;

type TButtonSizes = keyof typeof Sizes;
type TButtonVariants = 'primary' | 'secondary';

type TButtonProps = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    className?: string;
    variant?: TButtonVariants;
    to?: string; // Optional 'to' prop of type string
    size?: TButtonSizes;
    onClick?: () => void; // Optional onClick event handler
    // Other props based on your use case (e.g., type, disabled, etc.)
  };

const primaryClasses = clsx(
  'text-white',
  'bg-blue-600',
  'from-cyan-500',
  'to-blue-500',
  'hover:bg-gradient-to-bl',
  'transition'
);

const secondaryClasses = clsx(
  'border-2',
  'border-solid',
  'border-white',
  'text-white',
  'hover:bg-white',
  'hover:border-blue-400',
  'hover:text-blue-600'
);

const smButtonSize = clsx('max-w-20');
const mdButtonSize = clsx('max-w-40');
const lgButtonSize = clsx('max-w-80');
const fullButtonSize = clsx('max-w-none');

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, TButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = Sizes.full,
      to,
      ...props
    },
    ref
  ) => {
    const buttonSizes = useMemo(() => {
      switch (size) {
        case Sizes.sm:
          return smButtonSize;
        case Sizes.md:
          return mdButtonSize;
        case Sizes.lg:
          return lgButtonSize;
        default:
          return fullButtonSize;
      }
    }, [size]);

    // Define common classes for both Link and button
    const commonClasses = clsx(
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
      'mx-auto',
      'w-full',
      'transition',
      variant === 'primary' ? primaryClasses : secondaryClasses,
      buttonSizes,
      className // Add any extra classNames passed via props
    );

    // Conditionally render Link if 'to' prop is provided
    if (to) {
      return (
        <Link
          to={to}
          ref={ref as React.Ref<HTMLAnchorElement>} // Correctly forward ref when using Link
          className={commonClasses}
          {...props}
        >
          {children}
        </Link>
      );
    }

    // Render a regular button if 'to' prop is not provided
    return (
      <button
        type="button"
        ref={ref as React.Ref<HTMLButtonElement>} // Correctly forward ref when using button
        className={commonClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;

import clsx from 'clsx';
import { forwardRef, useMemo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const Sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  full: 'full',
} as const;

type TButtonSizes = keyof typeof Sizes;
type TButtonVariants = 'primary' | 'secondary';

// Define two separate prop types
type TAnchorButtonProps = {
  to: string; // 'to' prop signifies that it's a link
  className?: string;
  size?: TButtonSizes;
  variant?: TButtonVariants;
} & LinkProps; // Include LinkProps for react-router Link

type TRegularButtonProps = {
  to?: never; // Explicitly state that 'to' is not provided
  className?: string;
  size?: TButtonSizes;
  variant?: TButtonVariants;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>; // Include button props

type TButtonProps = TAnchorButtonProps | TRegularButtonProps;

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
    { children, className, type, variant = 'primary', size, to, ...props },
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
      const linkProps = {
        ...(props as TAnchorButtonProps),
        to,
        className: commonClasses, // Correctly forward ref when using Link
      };
      return (
        <Link ref={ref as React.Ref<HTMLAnchorElement>} {...linkProps}>
          {children}
        </Link>
      );
    }

    const buttonProps = {
      ...(props as TRegularButtonProps), // Cast to TRegularButtonProps
      className: commonClasses,
      type: type as React.ButtonHTMLAttributes<HTMLButtonElement>['type'], // Explicitly cast type if needed
    };

    // Render a regular button if 'to' prop is not provided
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>} // Correctly forward ref when using button
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);

export default Button;

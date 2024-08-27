import Input from '@components/Form/Input';
import { useState } from 'react';
import Lock from '@assets/icons/Lock/index.tsx';
import Button from '@components/Button';
import clsx from 'clsx';
import EyeClosed from '@assets/icons/EyeClosed';
import EyeOpened from '@assets/icons/EyeOpened';
import { TLoginFieldName } from '@services/schemaValidators/auth/loginForm.ts';
import { GlobalError, UseFormRegisterReturn } from 'react-hook-form';

type TPasswordInputProps = {
  register: (name: TLoginFieldName) => UseFormRegisterReturn<TLoginFieldName>;
  errors?: Record<string, GlobalError> & GlobalError;
};

const PasswordInput = ({ register, errors }: TPasswordInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={clsx('password-input-container', 'relative')}>
      <Input
        {...register('password')}
        type={passwordVisible ? 'text' : 'password'}
        id="password"
        startIcon={<Lock />}
        placeholder="Password"
        className={clsx('password-input')}
        error={errors?.password?.message}
      />
      <Button
        type="button"
        size="sm"
        onClick={togglePasswordVisibility}
        variant="transparent"
        className={clsx(
          'absolute',
          'right-0',
          'top-0',
          'bg-transparent',
          'border-0',
          'p-0',
          'hover:bg-transparent',
          'focus:outline-none'
        )}
      >
        {passwordVisible ? (
          <EyeClosed width="35" height="20" />
        ) : (
          <EyeOpened width="17" height="20" />
        )}
      </Button>
    </div>
  );
};

export default PasswordInput;

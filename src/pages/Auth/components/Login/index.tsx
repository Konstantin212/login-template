import { useOutletContext } from 'react-router-dom';
import clsx from 'clsx';
import { ContextType } from '@pages/Auth';
import Social from '@pages/Auth/components/Social';
import Input from '@components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  loginSchema,
  TLoginFormData,
} from '@services/schemaValidators/auth/loginForm.ts';
import Button from '@components/Button';
import Mail from '@assets/icons/Mail';
import PasswordInput from '@components/PasswordInput';
import List from '@components/List';
import ListItem from '@components/ListItem';

const Login = () => {
  const [email, setEmail] = useOutletContext<ContextType>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<TLoginFormData> = (data) => {
    console.log('data', data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

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
        <form
          className={clsx('mt-5', 'justify-center', 'items-center')}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={clsx('relative', 'pb-1')}>
            <Input
              {...register('email')}
              value={email}
              onChange={handleChange}
              type="email"
              id="email"
              startIcon={<Mail />}
              placeholder="john.doe@company.com"
              error={errors.email?.message}
            />
          </div>
          <div className={clsx('relative', 'pb-1')}>
            <PasswordInput register={register} errors={errors} />
          </div>

          <List>
            <ListItem>At least 1 uppercase</ListItem>
            <ListItem>At least 1 lowercase</ListItem>
            <ListItem>At least 1 symbol</ListItem>
            <ListItem>At least 1 number</ListItem>
          </List>

          <Button type="submit" variant="primary" size="lg">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;

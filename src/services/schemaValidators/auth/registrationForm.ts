import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const {
  formState: { errors },
} = useForm<TRegistrationFormData>({
  resolver: zodResolver(loginSchema),
});

export const registrationSchema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email({
    message: 'Please enter a valid email',
  }),
  password: z
    .string()
    .min(8)
    .max(12)
    .regex(
      /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
      {
        message:
          'Invalid password please use 1 uppercase letter 1 lowercase letter 1 number 1 symbol',
      }
    ),
  confirmPassword: z
    .string()
    .min(8)
    .max(12)
    .regex(
      /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
      {
        message:
          'Invalid password please use 1 uppercase letter 1 lowercase letter 1 number 1 symbol',
      }
    ),
  confirmAgriement: z.boolean(),
});

export type TLoginFormData = z.infer<typeof registrationSchema>;

import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email',
  }),
  password: z
    .string()
    .min(8)
    .max(12)
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$&*]).{8,}$/, {
      message:
        'Invalid password please use 1 uppercase letter 1 lowercase letter 1 number 1 symbol',
    }),
});

export type TLoginFieldName = 'email' | 'password';

export type TLoginFormData = z.infer<typeof loginSchema>;

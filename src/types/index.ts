import { z } from 'zod';

export type userDocArgs = {
  displayName: string;
}

export type TCategory = {
  id: number;
  title: string;
  imageUrl: string;
};

export const SignInFormSchema = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(1),
    confirmPassword: z.string().min(1),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // set the path of the error to the confirmPassword field
  });

export type TSignUpForm = z.infer<typeof SignInFormSchema>;

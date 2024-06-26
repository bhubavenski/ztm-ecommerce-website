import { z } from 'zod';

export type userDocArgs = {
  displayName: string;
};

export type TCategory = {
  id: number;
  title: string;
  imageUrl: string;
};

const BasicSignUpFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(1),
  confirmPassword: z.string().min(1),
});

// Пълна схема с refine
export const SignUpFormSchema = BasicSignUpFormSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  }
);
export type TSignUpForm = z.infer<typeof SignUpFormSchema>;

export const SignInFormSchema = BasicSignUpFormSchema.pick({email: true, password: true});
export type TSignInForm = z.infer<typeof SignInFormSchema>;


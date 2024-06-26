import { useForm } from 'react-hook-form';
import { SignInFormSchema, TSignUpForm } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from '@/utils/firebase/firebase.utils';
import './sign-up-form.styles.scss';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const SignUpForm = () => {
  const form = useForm<TSignUpForm>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(SignInFormSchema),
  });

  const onSubmit = async (formData: TSignUpForm) => {
    try {
      const response = await createAuthUserWithEmailAndPassword(
        formData.email,
        formData.password
      );

      if (response && response.user) {
        const { user } = response;
        await createUserDocFromAuth(user, { displayName: formData.name });
        form.reset();
      } else {
        console.error('Failed to create user');
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('This email is already in use!');
      } else {
        console.log('Can not create user', error);
      }
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display name</FormLabel>
              <FormControl>
                <Input placeholder="name..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email..." {...field} />
              </FormControl>
              <FormDescription>Write your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password..." {...field} />
              </FormControl>
              <FormDescription>Write your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input placeholder="password..." {...field} />
              </FormControl>
              <FormDescription>Confirm your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default SignUpForm;

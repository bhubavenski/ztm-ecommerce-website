import { useForm } from 'react-hook-form';
import { SignUpFormSchema, TSignUpForm } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from '@/utils/firebase/firebase.utils';
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
    resolver: zodResolver(SignUpFormSchema),
  });

  const onSubmit = async (formData: TSignUpForm) => {
    const response = await createAuthUserWithEmailAndPassword(
      formData.email,
      formData.password
    );

    if (response) {
      const { user } = response;
      await createUserDocFromAuth(user, { displayName: formData.name });
      form.reset();
    } else {
      console.error('Failed to create user');
    }
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
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
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Sign up
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignUpForm;

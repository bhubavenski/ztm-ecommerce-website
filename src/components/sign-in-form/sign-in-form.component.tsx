import { useForm } from 'react-hook-form';
import { SignInFormSchema, TSignInForm } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
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
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useUserDataContext } from '@/contexts/user.context';

const SignInForm = () => {
  const userData = useUserDataContext();
  const form = useForm<TSignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(SignInFormSchema),
  });

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  const onSubmit = async (formData: TSignInForm) => {
    const response = await signInAuthUserWithEmailAndPassword(
      formData.email,
      formData.password
    );
    if (response) {
      const { user } = response;
      userData.setCurrentUser(user);
      form.reset();
    } else {
      console.error('Failed to sign in');
    }
  };

  return (
    <div className="">
      <h1 className=" text-xl font-bold">Already have an account?</h1>
      <p>Sign in with your Email and Password</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[500px]"
        >
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
          <div className="flex justify-between">
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Sign in
            </Button>
            <Button
              type="button"
              disabled={form.formState.isSubmitting}
              onClick={signInWithGoogle}
            >
              Google sign in
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;

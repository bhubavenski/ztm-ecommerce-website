import SignInForm from '@/components/sign-in-form/sign-in-form.component';
import SignUpForm from '@/components/sign-up-form/sign-up-form.component';

const Auth = () => {
  return (
    <div className='flex items-center justify-center'>
      {/* <button >Sign in with Google Popup</button> */}
      <div className='flex gap-6'>
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Auth;

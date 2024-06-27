import SignInForm from '@/components/sign-in-form/sign-in-form.component';
import SignUpForm from '@/components/sign-up-form/sign-up-form.component';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Auth = () => {
  return (
    <div className="flex items-center justify-center">
      {/* <button >Sign in with Google Popup</button> */}
      {/* <div className='flex gap-6'>
        <SignInForm />
        <SignUpForm />
      </div> */}

      <Tabs defaultValue="signIn" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signIn">Sign in</TabsTrigger>
          <TabsTrigger value="signUp">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="signIn">
          <Card>
            <CardHeader>
              <CardTitle>Already have an account?</CardTitle>
              <CardDescription>
                Sign in to it!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SignInForm />
            </CardContent>
            <CardFooter>
              <p>Your credentials are safe</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signUp">
          <Card>
            <CardHeader>
              <CardTitle>Don't have an account?</CardTitle>
              <CardDescription>
                You can create one by filling out the form
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SignUpForm />
            </CardContent>
            <CardFooter>
              <p>Your credentials are in safe!</p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;

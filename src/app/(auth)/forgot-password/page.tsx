'use client'
import { requestPasswordReset } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";

interface SignInResetPasswordEmail {
    email:string
}
const ForgotPasswordPage = () => {
  const handleForgotPassword = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries())as unknown as SignInResetPasswordEmail;

    console.log('submit forgot data', userData);

    const resData = await requestPasswordReset({
        email: userData.email,
        redirectTo: '/reset-password'
    });
   toast.success('An Email is sent to your email address. Please check!')
   console.log('after sending reset email', resData);
  };
  return (
   <div className="min-h-screen flex items-center justify-center px-4 py-8">
  <div className="w-full max-w-md rounded-2xl border border-gray-200 p-6 shadow-lg sm:p-8">

    {/* Header */}
    <div className="mb-8 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
        <Check className="size-6 text-blue-600" />
      </div>

      <h2 className="text-2xl font-bold text-gray-200 sm:text-3xl">
        Forgot Password?
      </h2>

      <p className="mt-2 text-sm leading-6 text-gray-300">
        Enter your email address and we ll send you a link
        to reset your password.
      </p>
    </div>

    {/* Form */}
    <Form
      className="flex w-full flex-col gap-5"
      onSubmit={handleForgotPassword}
    >
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
              value
            )
          ) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label className="font-medium">
          Email Address
        </Label>

        <Input
          placeholder="john@example.com"
          className="w-full"
        />

        <FieldError />
      </TextField>

      {/* Buttons */}
      <div className="flex w-full gap-3 pt-2">
        <Button
          type="submit"
          className="flex-1"
        >
          <Check className="size-4" />
          Send Reset Link
        </Button>

        <Button
          type="reset"
          variant="secondary"
          className="flex-1"
        >
          Reset
        </Button>
      </div>
    </Form>

    {/* Back to Sign In */}
    <div className="mt-6 text-center">
      <a
        href="/sign-in"
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        ← Back to Sign In
      </a>
    </div>

  </div>
</div>
  );
};

export default ForgotPasswordPage;

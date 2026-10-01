"use client";
import GoogleSignIn from "@/app/components/GoogleSignIn";
import { signUp } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

interface SignUpFromData {
  name: string;
  email: string;
  password: string;
}
const SignUpPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(
      formData.entries(),
    ) as unknown as SignUpFromData;

    console.log("the from to form is", data);

    const { data: restData, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    console.log('after sign up...',restData, error);
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-200">Sign Up</h2>

          <p className="mt-2 text-sm text-gray-300">
            Create your account to get started
          </p>
        </div>

        {/* Sign Up Form */}
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          {/* Name */}
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
          >
            <Label>Your Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Your Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <Input placeholder="Enter your password" />

            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <Button type="submit" className="flex-1">
              Submit
            </Button>

            <Button type="reset" variant="secondary" className="flex-1">
              Reset
            </Button>
          </div>
        </Form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-xs text-gray-400">OR</span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Google Sign In */}
        <div className="w-full">
          <GoogleSignIn />
        </div>

        {/* Login link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/signin"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;

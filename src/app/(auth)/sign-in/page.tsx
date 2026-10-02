"use client";
import { signIn } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

interface SignInFromData {
  name: string;
  email: string;
  password: string;
}

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(
      formData.entries(),
    ) as unknown as SignInFromData;

    console.log("object entries data", data);

    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log("The Sign in submit data is", resData, error);
  };

  // social google sign in:
  const handleGoogleSignIn = async () => {
    const resData = await signIn.social({
      provider: "google",
    });
    // console.log("after google sign in", resData);
  };

  // socila github sign in:
  const handleGithubSignIn = async () => {
    const resData = await signIn.social({
      provider: "github",
    });
    console.log("after github sign in", resData);
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center justify-center px-4">
      {/* Sign In Form */}
      <div className="w-full max-w-md">
        <Form
          className="flex w-full flex-col gap-4"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
          <h2 className="text-center text-2xl font-bold">Sign In Page</h2>

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
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            name="password"
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

            <InputGroup className="w-full">
              <InputGroup.Input
                className="w-full"
                type={isVisible ? "text" : "password"}
              />

              <InputGroup.Suffix className="pe-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>

            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* Submit & Reset */}
          <div className="flex gap-3 pt-2">
            <Button type="submit">Submit</Button>

            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
          <p className="underline">
            Forgot Password ? <Link href="/forgot-password"><span className="text-blue-600">Click here</span></Link>
          </p>
        </Form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-xs text-gray-400">OR</span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Google Sign In */}
        <div className="">
          <Button className="w-full" onClick={handleGoogleSignIn}>
            Sign In With Google
          </Button>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-xs text-gray-400">OR</span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>
        {/* github Sign In */}
        <div className="">
          <Button className="w-full" onClick={handleGithubSignIn}>
            Sign In With Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

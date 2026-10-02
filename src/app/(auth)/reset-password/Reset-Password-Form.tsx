"use client";
import { useSearchParams } from "next/navigation";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import { resetPassword } from "@/lib/auth-client";

interface ResetPassword {
    password:string,
 
}
const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  console.log("the token is", token);

  const handleResetPassword = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check token:
    if(!token){
        toast("Reset password token is missing!", {
            variant: "danger"
        });
        return;
    }
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries()) as unknown as ResetPassword;

    console.log('after submit reset password', userData);

    const resData = await resetPassword({
        newPassword:userData.password,
        token,
    })
    console.log('after reset password');
    toast.success('Your reset password is successfully!')
    
  };

  return (
    <div>
      <h2 className="text-xl">Give me a new password</h2>
      <Form className="flex w-96 flex-col gap-4" onSubmit={handleResetPassword}>
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
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;

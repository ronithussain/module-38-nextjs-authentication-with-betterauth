"use client";

import { updateUser } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

interface UpdateUserProfile {
  name: string;
}
export default function ProfilePage() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = (await Object.fromEntries(
      formData.entries(),
    )) as unknown as UpdateUserProfile;

    console.log("after submit user profile", userData);

    const resData = await updateUser({
      name: userData.name,
    });
    console.log("resData", resData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <Form
        className="w-full max-w-md rounded-2xl border border-gray-200  p-6 shadow-md sm:p-8"
        onSubmit={onSubmit}
      >
        <Fieldset className="w-full">
          <Fieldset.Legend className="text-2xl font-bold text-gray-200">
            Profile Settings
          </Fieldset.Legend>

          <Description className="mt-1 text-sm text-gray-300">
            Update your profile information.
          </Description>

          <FieldGroup className="mt-6">
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
              <Label>Name</Label>

              <Input placeholder="John Doe" className="w-full" />

              <FieldError />
            </TextField>
          </FieldGroup>

          <Fieldset.Actions className="mt-6 flex gap-3">
            <Button type="submit" className="flex-1">
              <FloppyDisk />
              Save changes
            </Button>

            <Button type="reset" variant="secondary" className="flex-1">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
}

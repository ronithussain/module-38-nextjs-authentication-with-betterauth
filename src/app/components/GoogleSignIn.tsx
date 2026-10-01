import { signIn } from "@/lib/auth-client";
import { Button } from "@heroui/react";

const GoogleSignIn = () => {
    
  // social google sign in:
  const handleGoogleSignIn = async () => {
    const resData = await signIn.social({
      provider: "google",
    });
    console.log("after google sign in", resData);
  };

  return (
    <div>
      {/* Google Sign In */}
      <div>
        <Button onClick={handleGoogleSignIn} className="w-full">Sign In With Google</Button>
      </div>
    </div>
  );
};

export default GoogleSignIn;

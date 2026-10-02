import { Suspense } from "react";
import ResetPasswordForm from "./Reset-Password-Form";

const ResetPasswordPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="rounded-2xl border border-gray-200 p-6 shadow-lg sm:p-8">
          {/* Header */}
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
              <span className="text-xl">🔐</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-200 sm:text-3xl">
              Reset Password
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-300">
              Create a new password for your account. Make sure it s strong and
              secure.
            </p>
          </div>

          {/* Reset Password Form */}
          <Suspense
            fallback={
              <div className="flex min-h-32 items-center justify-center">
                <p className="text-sm text-gray-500">Loading...</p>
              </div>
            }
          >
            <ResetPasswordForm />
          </Suspense>

          {/* Footer */}
          <div className="mt-6 text-center">
            <a
              href="/sign-in"
              className="text-sm font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
            >
              ← Back to Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;


import { SignupForm } from "@/components/Signupform";

export default function SignupPage() {
  return (
    <div className="flex w-full min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className=" max-w-sm w-full ">
        <SignupForm />
      </div>
    </div>
  );
}

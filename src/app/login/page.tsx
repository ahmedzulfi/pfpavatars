import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex w-full min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className=" max-w-sm w-full ">
        <LoginForm />
      </div>
    </div>
  )
}

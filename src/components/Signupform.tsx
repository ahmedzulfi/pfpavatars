"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getFirebaseAuth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "@/context/Authcontext";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { refreshBackendUser } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.username.trim()) {
      newErrors.username = "Username is required.";
    } else if (form.username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!form.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const auth = getFirebaseAuth();
      const userCred = await createUserWithEmailAndPassword(
        auth,
        form.email.trim(),
        form.password.trim()
      );

      const idToken = await userCred.user.getIdToken();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            username: form.username.trim(),
            auth_provider: "firebase",
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Registration failed");

      localStorage.setItem("token", idToken);
      await refreshBackendUser();
      router.push("/dashboard");
    } catch (err: any) {
      const msg = err.message || "";
      if (err.code === "auth/email-already-in-use") {
        setErrors((prev) => ({ ...prev, email: "Email is already in use." }));
      } else if (err.code === "auth/invalid-email") {
        setErrors((prev) => ({ ...prev, email: "Invalid email address." }));
      } else if (err.code === "auth/weak-password") {
        setErrors((prev) => ({ ...prev, password: "Password too weak." }));
      } else if (msg.includes("Username")) {
        setErrors((prev) => ({ ...prev, username: msg }));
      } else {
        alert("Signup failed. See console.");
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-neutral-950/60 border border-neutral-900/60 backdrop-blur-3xl shadow-sm rounded-xl">
        <CardContent className="p-6 pb-8">
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-1">Create Account</h1>
              <p className="text-sm text-zinc-400">Sign up to continue</p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username" className="text-zinc-300">Username</Label>
                <Input
                  id="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="yourusername"
                  className={errors.username ? "border-red-500 text-white" : "border-neutral-900 text-white"}
                />
                {errors.username && (
                  <p className="text-sm text-red-500">{errors.username}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email" className="text-zinc-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={errors.email ? "border-red-500 text-white" : "border-neutral-900 text-white"}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password" className="text-zinc-300">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={errors.password ? "border-red-500 text-white" : "border-neutral-900 text-white"}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="bg-[#fcdba3] text-black hover:bg-[#f5c57f]"
            >
              {loading ? "Signing Up..." : "Create Account"}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>

      <p className="text-center text-xs text-muted-foreground">
        By signing up, you agree to our{" "}
        <a href="/terms" className="underline">Terms</a> and{" "}
        <a href="/privacy" className="underline">Privacy Policy</a>.
      </p>
    </div>
  );
}

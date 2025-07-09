"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAuth } from "@/context/Authcontext";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    twitter: "",
    profile_picture: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const totalSteps = 3;
  const { refreshBackendUser } = useAuth();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
    // Clear the error for the current field as the user types
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!form.name.trim()) {
        newErrors.name = "Full Name is required.";
      } else if (form.name.trim().length < 3) {
        newErrors.name = "Full Name must be at least 3 characters.";
      }
      if (!form.username.trim()) {
        newErrors.username = "Username is required.";
      } else if (form.username.trim().length < 3) {
        newErrors.username = "Username must be at least 3 characters.";
      }
    } else if (step === 2) {
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
    }
    // Step 3 has optional fields, no specific validation required for proceeding

    return newErrors;
  };

  const handleNext = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const finalErrors = {
      ...validateStep(1),
      ...validateStep(2),
      ...validateStep(3),
    };

    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      if (finalErrors.name || finalErrors.username) setCurrentStep(1);
      else if (finalErrors.email || finalErrors.password) setCurrentStep(2);
      return;
    }

    setLoading(true);

    try {
      // 1. Create user in Firebase
      const userCred = await createUserWithEmailAndPassword(
        auth,
        form.email.trim(),
        form.password.trim()
      );

      const idToken = await userCred.user.getIdToken();

      // 2. Register user in backend
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          display_name: form.name.trim(),
          username: form.username.trim(),
          profile_picture: form.profile_picture || null,
          twitter: form.twitter || null,
          auth_provider: "firebase",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const msg = data?.error || "Failed to register user";
        throw new Error(msg);
      }

      // 3. Optionally store token
      localStorage.setItem("token", idToken);
      await refreshBackendUser();
      // 4. Redirect to dashboard
      router.push("/dashboard");
    } catch (err: any) {
      console.error("Signup error:", err);

      const msg = err.message || "";

      // Firebase errors
      if (err.code === "auth/email-already-in-use") {
        setErrors((prev) => ({ ...prev, email: "Email is already in use." }));
        setCurrentStep(2);
      } else if (err.code === "auth/invalid-email") {
        setErrors((prev) => ({ ...prev, email: "Invalid email address." }));
        setCurrentStep(2);
      } else if (err.code === "auth/weak-password") {
        setErrors((prev) => ({ ...prev, password: "Password is too weak." }));
        setCurrentStep(2);
      }
      // Backend errors
      else if (msg.includes("Username")) {
        setErrors((prev) => ({ ...prev, username: msg }));
        setCurrentStep(1);
      } else {
        alert("Signup failed. See console for more details.");
      }
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold text-[#fff]/90">
                Let's get started
              </h1>
              <p className="text-muted-foreground">Tell us who you are</p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name" className="text-zinc-300 font-normal">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={
                    errors.name
                      ? "border-red-500"
                      : "text-zinc-300 border  border-neutral-900/60 focus:border-neutral-800"
                  }
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="grid gap-3">
                <Label htmlFor="username" className="text-zinc-300 font-normal">
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Choose a unique username"
                  className={
                    errors.username
                      ? "border-red-500"
                      : "text-zinc-300 border  border-neutral-900/60 focus:border-neutral-800"
                  }
                />
                {errors.username && (
                  <p className="text-sm text-red-500">{errors.username}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold text-[#fff]/90">
                Account credentials
              </h1>
              <p className="text-muted-foreground">Set up your login details</p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-zinc-300 font-normal">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={
                    errors.email
                      ? "border-red-500"
                      : "text-zinc-300 border  border-neutral-900/60 focus:border-neutral-800"
                  }
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="grid gap-3">
                <Label htmlFor="password" className="text-zinc-300 font-normal">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className={
                    errors.password
                      ? "border-red-500"
                      : "text-zinc-300 border  border-neutral-900/60 focus:border-neutral-800"
                  }
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold text-[#fff]/90">
                Finishing touches
              </h1>
              <p className="text-muted-foreground">Add some optional details</p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="twitter" className="text-zinc-300 font-normal">
                  Twitter Handle{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="twitter"
                  type="text"
                  value={form.twitter}
                  onChange={handleChange}
                  className={
                    "text-zinc-300 border  border-neutral-900/60 focus:border-neutral-800"
                  }
                  placeholder="@yourusername"
                />
              </div>

              <div className="grid gap-3">
                <Label
                  htmlFor="profile_picture"
                  className="text-zinc-300 font-normal"
                >
                  Profile Picture URL{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="profile_picture"
                  type="url"
                  value={form.profile_picture}
                  onChange={handleChange}
                  className={
                    "text-zinc-300 border  border-neutral-900/60 focus:border-neutral-800"
                  }
                  placeholder="https://example.com/your-photo.jpg"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 bg-neutral-950/60 border border-neutral-900/60  backdrop-blur-3xl shadow-sm rounded-xl">
        <CardContent className="grid p-0 md:grid-cols-1">
          <form className="p-6 pb-8" onSubmit={handleSubmit}>
            {renderStep()}

            <div className="flex justify-between items-center mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center bg-white gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-[#fcdba3] text-black hover:bg-[#f5c57f] flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-[#fcdba3] text-black hover:bg-[#f5c57f]"
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>
              )}
            </div>

            <div className="text-center text-sm mt-6 text-muted opacity-75">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="text-muted-foreground text-center text-xs">
        By signing up, you agree to our{" "}
        <a href="#" className="underline">
          Terms
        </a>{" "}
        and{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}

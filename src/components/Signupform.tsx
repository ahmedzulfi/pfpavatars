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

    if (currentStep === 3) {
      const finalErrors = validateStep(totalSteps); // Validate all fields one last time
      // Also, include validation for previous steps if the user skipped
      const allErrors = {
        ...validateStep(1),
        ...validateStep(2),
        ...finalErrors,
      };

      if (Object.keys(allErrors).length > 0) {
        setErrors(allErrors);
        // Set currentStep back to the first step with errors if needed
        if (allErrors.name || allErrors.username) setCurrentStep(1);
        else if (allErrors.email || allErrors.password) setCurrentStep(2);
        return;
      }

      setLoading(true);
      try {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );

        const idToken = await userCred.user.getIdToken();

        await fetch("http://localhost:5000/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            display_name: form.name,
            username: form.username,
            profile_picture: form.profile_picture || null,
            twitter: form.twitter,
            auth_provider: "firebase",
          }),
        });

        router.push("/dashboard");
      } catch (err: any) {
        console.error("Signup error:", err);
        if (err.code === "auth/email-already-in-use") {
          setErrors((prev) => ({
            ...prev,
            email: "Email is already in use.",
          }));
          setCurrentStep(2); // Go back to step 2 to show email error
        } else if (err.code === "auth/invalid-email") {
          setErrors((prev) => ({
            ...prev,
            email: "Invalid email address.",
          }));
          setCurrentStep(2); // Go back to step 2 to show email error
        } else if (err.code === "auth/weak-password") {
          setErrors((prev) => ({
            ...prev,
            password: "Password is too weak.",
          }));
          setCurrentStep(2); // Go back to step 2 to show password error
        } else {
          alert("Signup failed. Please check the console for more info.");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Let's get started</h1>
              <p className="text-muted-foreground">Tell us who you are</p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Choose a unique username"
                  className={errors.username ? "border-red-500" : ""}
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
              <h1 className="text-2xl font-bold">Account credentials</h1>
              <p className="text-muted-foreground">Set up your login details</p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className={errors.password ? "border-red-500" : ""}
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
              <h1 className="text-2xl font-bold">Finishing touches</h1>
              <p className="text-muted-foreground">Add some optional details</p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="twitter">
                  Twitter Handle{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="twitter"
                  type="text"
                  value={form.twitter}
                  onChange={handleChange}
                  placeholder="@yourusername"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="profile_picture">
                  Profile Picture URL{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="profile_picture"
                  type="url"
                  value={form.profile_picture}
                  onChange={handleChange}
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
      <Card className="overflow-hidden p-0">
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

            <div className="text-center text-sm mt-6">
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

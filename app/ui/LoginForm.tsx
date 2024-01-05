"use client";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "../lib/actions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    return (
      <form className="flex flex-col w-full items-center mt-2" action={dispatch}>
        <div className="flex-1 flex flex-col w-1/3 items-center rounded-lg px-6">
          <div className="w-full">
            <div>
              <Label
                htmlFor="email"
                className="text-white"
              >
                Email
              </Label>
              <div className="relative">
                <Input
                  className="bg-gray-900 text-white"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <Label
                htmlFor="password"
                className="text-white"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  className="bg-gray-900 text-white"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
              </div>
            </div>
          </div>
          <LoginButton />
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
        </div>
      </form>
    );
  }
  
  function LoginButton() {
    const { pending } = useFormStatus();
    return (
      <Button variant="navbar" className="mt-6 w-full" aria-disabled={pending}>
        Sign In
      </Button>
    );
  }
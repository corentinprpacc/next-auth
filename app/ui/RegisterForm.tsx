"use client";

import { useFormState, useFormStatus } from "react-dom";
import { register } from "../lib/actions";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterForm() {
    const initialState = { message: "", errors: {} };
    const [state, dispatch] = useFormState(register, initialState);
    return (
      <form className="flex flex-col items-center w-full" action={dispatch}>
        <div className="flex-1 flex flex-col items-center w-1/3 rounded-lg px-6">
          <div className="w-full">
            <div>
                <Label
                    className="text-white"
                    htmlFor="username"
                >
                    Username
                </Label>
                <div className="relative">
                  <Input
                    className="peer bg-gray-900 text-white"
                    id="username"
                    type="username"
                    name="username"
                    placeholder="Enter your username"
                    required
                    />
                </div>
                <div id="username-error" aria-live="polite" aria-atomic="true">
                {state && state.errors?.username &&
                  state.errors.username.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
                </div>
            <div className="mt-4">
              <Label
                className="text-white"
                htmlFor="firstName"
              >
                First name
              </Label>
              <div className="relative">
                <Input
                  className="peer bg-gray-900 text-white"
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter your firstname"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <Label
                className="text-white"
                htmlFor="firstName"
              >
                Last name
              </Label>
              <div className="relative">
                <Input
                  className="peer bg-gray-900 text-white"
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <Label
                className="text-white"
                htmlFor="email"
              >
                Email
              </Label>
              <div className="relative">
                <Input
                  className="peer bg-gray-900 text-white"
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
                className="text-white"
                htmlFor="password"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  className="peer bg-gray-900 text-white"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
              </div>
              <div id="password-error" aria-live="polite" aria-atomic="true">
                {state.errors?.password &&
                  state.errors.password.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="mt-4">
              <Label
                className="text-white"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  className="peer bg-gray-900 text-white"
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter confirm password"
                  required
                  minLength={6}
                />
              </div>
              <div id="confirmPassword-error" aria-live="polite" aria-atomic="true">
                {state.errors?.confirmPassword &&
                  state.errors.confirmPassword.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <LoginButton />
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {state.message && (
              <>
                <p className="text-sm text-red-500">{state.message}</p>
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
        Sign Up
      </Button>
    );
  }
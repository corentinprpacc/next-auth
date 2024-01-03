"use client";

import { useFormState, useFormStatus } from "react-dom";
import { register } from "../lib/actions";

export default function RegisterForm() {
    const [errorMessage, dispatch] = useFormState(register, undefined);
    return (
      <form className="flex flex-col w-full" action={dispatch}>
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`mb-3 text-2xl`}>
            Register
          </h1>
          <div className="w-full">
            <div>
                <label
                    className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                    htmlFor="username"
                >
                    Username
                </label>
                <div className="relative">
                    <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="username"
                    type="username"
                    name="username"
                    placeholder="Enter your username"
                    required
                    />
                </div>
                </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
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
      <button className="mt-4 w-full border rounded-md bg-sky-300 py-2" aria-disabled={pending}>
        Register
      </button>
    );
  }
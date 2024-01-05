import LoginForm from "@/app/ui/LoginForm";
import RegisterForm from "@/app/ui/RegisterForm";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Register() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center w-full bg-gray-900">
        <h1 className={`text-center mb-3 text-4xl font-semibold text-white`}>
          Sign Up
        </h1>
        <form className="flex flex-col items-center" action={async () => {
            'use server';
            await signIn("github", undefined, { testUser: "user test !!" });
          }}>
          <Button variant="navbar">
            Sign In with GitHub
          </Button>
          <span className="text-xl text-white font-semibold mt-2">OR</span>
        </form>
        <RegisterForm />
        <Link href="/login" className="text-white underline mt-2">Already have an account ? Login here</Link>
      </div>
    );
  }
  
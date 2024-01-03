import LoginForm from "@/app/ui/LoginForm";

export default function Login() {
    return (
      <div className="h-screen flex flex-col justify-center items-center w-full">
        <LoginForm />
        <form action={async () => {
            'use server';
            // await signIn("github", { callbackUrl: "/" });
          }}>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-black text-white p-3 text-sm font-medium hover:bg-white hover:text-black md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="">
              Sign In With GitHub
            </div>
          </button>
        </form>
      </div>
    );
  }
  
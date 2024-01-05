import { auth } from "@/auth"
import ButtonToast from "../ui/ButtonToast";

export default async function Home() {
  const session = await auth()
  return (
    <main className="flex flex-col justify-center items-center mt-2">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-center">Home Page</h1>
        { session?.user && (
          <div className="flex flex-col items-center gap-2">
            <p>Welcome <span className="font-semibold">{session.user.username}</span></p>
            <ButtonToast />
          </div>
        )}
      </div>
    </main>
  )
}

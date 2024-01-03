import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-center">Home Page</h1>
        <div className="mt-2 text-lg flex flex-col items-center text-sky-600 underline">
          <Link href="/login">Go to Login</Link>
          <Link href="/register">Go to Register</Link>  
        </div>
      </div>
    </main>
  )
}

import { auth } from "@/auth"
import Navbar from "../ui/Navbar"
import Provider from "../context/client-provider"

export default async function ApplicationLayout ({
    children,
  }: {
    children: React.ReactNode
  }) {
    const session = await auth()
    return (
        <Provider session={session}>
            <Navbar />
            {children}
        </Provider>
    )
}
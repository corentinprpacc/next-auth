"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react"
import Link from "next/link";
import { signOutAction } from "../lib/actions";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";

export default function Navbar() {
    const { data: session } = useSession()
    return (
        <nav className="bg-gray-900 text-base text-gray-50 w-full h-14 flex items-center justify-around">
            <div>
                <p className="font-semibold">MY NEXT AUTH APPLICATION</p>
            </div>
            <ul className="flex items-center gap-10">
                <li>
                    <Link href="/" className="border-b-2 border-white pb-1 border-transparent hover:border-white transition duration-300 ease-in-out">Home</Link>
                </li>
                <li>
                    <Link href="/" className="border-b-2 border-white pb-1 border-transparent hover:border-white transition duration-300 ease-in-out">Account</Link>
                </li>
                <li>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                        <NavigationMenuTrigger className="font-semibold">{session?.user.username}</NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute w-[200%] rounded-md gap-4 bg-gray-900 mt-2 flex flex-col items-start justify-center -ml-2 pl-2 py-4 z-10">
                            <NavigationMenuLink asChild className="cursor-pointer hover:bg-gray-800 w-full"><Link href="/">Profile</Link></NavigationMenuLink>
                            <NavigationMenuLink asChild className="cursor-pointer hover:bg-gray-800 w-full"><Link href="/">Informations</Link></NavigationMenuLink>
                            <NavigationMenuLink asChild className="cursor-pointer hover:bg-gray-800 w-full h-full"><Link href="/">Invoices</Link></NavigationMenuLink>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                </li>
                <li>
                <form action={signOutAction}>
                    <Button variant="navbar">Sign Out</Button>
                </form>
                </li>
            </ul>
        </nav>
    )
}
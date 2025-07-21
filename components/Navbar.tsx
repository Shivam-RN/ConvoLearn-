import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
<div className="hidden sm:flex items-center gap-3 cursor-pointer">
  <Image
    src="/images/logo.svg"
    alt="logo"
    width={120}
    height={140}
  />
</div>

            </Link>
            <div className="flex items-center gap-10">
                <NavItems />
                <SignedOut>
                    <SignInButton>
                        <button className="btn-signin text-white bg-primary font-semibold border-none">Sign In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar
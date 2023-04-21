import Link from "next/link";

export default function Footer(){
    return(
        <div className="bg-theme-brown text-theme-tan w-screen min-h-[5em]  h-fit mt-auto">
            <div className="flex flex-col sm:flex-row px-3 py-4 justify-between items-center wrap">
                <Link href="/"><h2 className="text-3xl font-bold">mulch</h2></Link>
                <ul className="flex flex-col sm:flex-row text-center sm:text-left gap-2 wrap pt-2">
                    <li className="hover:opacity-75 hover:scale-110">
                        <Link href="/marketplace">Browse</Link>
                    </li>
                    <li className="hover:opacity-75 hover:scale-110">
                        <Link href="/login">Sign In</Link>
                    </li>
                    <li className="hover:opacity-75 hover:scale-110">
                        <Link href="/register">Join</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
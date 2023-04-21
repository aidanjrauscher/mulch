
import {FaShoppingCart} from "react-icons/fa"
import {AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import Link from "next/link"
import { useState } from "react"

export default function Navbar(){

    const [dropdown, setDropdown] = useState(false)

    return(
        <div className="bg-theme-yellow text-theme-brown w-screen min-h-fit h-24 shadow-lg">
            <div className="flex flex-row px-3 py-4 h-full justify-between items-center">
                <Link href="/"><h1 className="text-4xl font-bold">mulch.</h1></Link>
                <div className="flex flex-row font-semibold text-l gap-4 items-center">
                    {/* Display navigation links on navbar for screens at least md */}
                    <ul className="hidden md:flex flex-row gap-4">
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
                    <FaShoppingCart size={30} className="hover:opacity-75 hover:cursor-pointer hover:scale-110"/>
                    {/* Display navigation dropdown for small screens */}
                    <div className="md:hidden transition inline-block">
                        <button
                            className="rounded-md bg-theme-brown text-white px-1 py-1 inline-flex"
                            onClick={()=>{setDropdown((prev)=>!prev)}}
                        >
                            {dropdown ? <AiOutlineMinus size={30}/> : <AiOutlinePlus size={30}/>}
                        </button>
                        <ul className={`z-10 right-0 mt-1 mr-3 rounded-md absolute bg-theme-tan px-3 py-2 text-end ${dropdown ? `block` : `hidden`}`}>
                            <li className="hover:opacity-75 mb-2">
                                <Link href="/register">Join</Link>
                            </li>
                            <li className="hover:opacity-75 mb-2">
                                <Link href="/login">Sign In</Link>
                            </li>
                            <li className="hover:opacity-75 mb-2">
                                <Link href="/marketplace">Browse</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
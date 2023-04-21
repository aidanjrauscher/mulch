import Footer from "./Footer";
import Navbar from "./Navbar";
import React, {PropsWithChildren} from "react"


export default function Layout({children}: PropsWithChildren){
    return(
        <main className='h-screen w-screen bg-white flex flex-col'>
            <Navbar/>
            {children}
            <Footer/>
        </main>
    )
}
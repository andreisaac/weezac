"use client"
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import bars from "@images/bars.svg";

import logo from "@images/logo.svg"
const navbar = () => {
  const [toggle, setToggle] = useState(false);

    return (
        <header className="flex flex-wrap select-none gap-0 content-center self-stretch text-white z-50 relative">
        <Link href="/" className="flex-wrap font-bold flex-1 justify-center px-12 text-5xl max-lg:hidden text-neutral-300"><Image src={logo} width={90} height={90} loading="lazy" alt="weezac" className="max-lg:w-[50px] inline-block pb-4 mr-[-8px]"></Image>eezac</Link>
        <nav className="flex flex-none gap-5 items-center px-12 py-5 text-lg leading-5 max-lg:hidden">
          <Link href="/" className="self-stretch my-auto hover:text-blue-400">Home</Link>
          <Link href="/contactus" className="self-stretch my-auto hover:text-blue-400">Contact Us</Link>
          <Link href="/contactus" className="text-2xl max-lg:text-lg px-5 max-lg:px2 py-2.5 max-lg:py font-bold rounded-xl shadow-contact active:shadow-contact-active bg-slate-300 hover:bg-green-100 text-slate-900  transition ease-out hover:ease-in">Contact Us</Link>
        </nav>

        <nav className="text-lg py-4 px-8 lg:hidden relative w-full">
          <div className={!toggle ? "hidden max-h-0" : "flex flex-col z-50 absolute top-0 left-0 w-full bg-indigo-950" }>
          <Link href="#" className="px-8 py-4 hover:text-blue-400 bg-dark-gradient" onClick={()=>setToggle(!toggle)}><Image src={bars} width={50} height={50} alt="bars" loading="lazy" className="float-right border border-slate-300 rounded hover:bg-slate-500 transition ease-out hover:ease-in hover:cursor-pointer"></Image></Link>
          <Link href="/" className={toggle ? "max-h-60 py-4 px-14 border-t border-slate-300 hover:bg-dark-gradient transition duration-300 ease-out hover:ease-in" : "max-h-0 invisible"} onClick={()=>setToggle(!toggle)}>Home</Link>
          <Link href="contactus" className={toggle ? "max-h-60 py-4 px-14 border-y border-slate-300 hover:bg-dark-gradient transition duration-300 ease-out hover:ease-in" : "max-h-0 invisible"} onClick={()=>setToggle(!toggle)}>Contact Us</Link>
          </div>

          <div className={toggle ? "hidden" : "float-right" } onClick={()=>setToggle(!toggle)}><Image src={bars} width={50} height={50} alt="bars" loading="lazy" className="border border-slate-300 rounded hover:bg-slate-500 transition ease-out hover:ease-in hover:cursor-pointer"></Image></div>
          
          <Link href="/contactus" className="text-lg px-5 py-2.5 font-bold rounded-xl shadow-contact active:shadow-contact-active bg-slate-300 hover:bg-green-100 text-slate-900 float-left transition ease-out hover:ease-in">Contact Us</Link>
        </nav>

      </header>
    )
}

export default navbar;
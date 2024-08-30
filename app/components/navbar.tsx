"use client"
import Image from "next/image";
import Link from "next/link";
import bars from "@images/bars.svg";
import {useRef} from "react";
import logo from "@images/logo.svg";

const navbar = () => {

  const drawerRef = useRef<HTMLLabelElement>(null);
  const clickSm = () =>{
    if (drawerRef.current) {
      drawerRef.current.click()
    }
  }
    return (
      <div className="drawer z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full max-lg:bg-n900">

          <div className="flex-1 max-lg:hidden">
            <Link href="/" className="font-bold justify-center px-12 text-5xl max-lg:hidden text-neutral-300"><Image src={logo} width={90} height={90} loading="lazy" alt="weezac" className="max-lg:w-[50px] inline-block pb-4 mr-[-8px]"></Image>eezac</Link>
          </div>

          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal text-2xl text-n300">
              {/* Navbar menu content here */}
              <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
              <li ><Link href="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
            </ul>
          </div>

          <div className="mx-2 max-lg:flex-1 px-2">
          <Link href="/contactus" className="text-lg px-5 py-1 xl:py-2.5 font-bold rounded-xl shadow-contact active:shadow-contact-active bg-slate-300 hover:bg-green-100 text-slate-900 float-left transition ease-out hover:ease-in">Contact Us</Link>
          </div>
          <div className="flex-none lg:hidden">
            <label ref={drawerRef} htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>


      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-n800 min-h-full w-80 p-4 text-xl text-n300 gap-4">
          {/* Sidebar content here */}
          <li><Link href="/" onClick={clickSm}>Home</Link></li>
          <li><Link href="/portfolio" onClick={clickSm}>Portfolio</Link></li>
          <li><Link href="contactus" onClick={clickSm}>Contact Us</Link></li>
        </ul>
      </div>
    </div>
    )
}

export default navbar;




/*

<header className="flex flex-wrap select-none gap-0 content-center self-stretch text-white z-50 relative">
        <nav className="flex flex-none gap-5 items-center px-12 py-5 text-2xl leading-5 max-lg:hidden">
          <Link href="/" className="self-stretch my-auto hover:text-blue-400">Home</Link>
          <Link href="/portfolio" className="self-stretch my-auto hover:text-blue-400">Portfolio</Link>
          <Link href="/contactus" className="self-stretch my-auto hover:text-blue-400">Contact Us</Link>
          <Link href="/contactus" className="text-2xl max-lg:text-lg px-5 max-lg:px2 py-2.5 max-lg:py font-bold rounded-xl shadow-contact active:shadow-contact-active bg-slate-300 hover:bg-green-100 text-slate-900  transition ease-out hover:ease-in">Contact Us</Link>
        </nav>

        <nav className="text-lg py-4 px-8 lg:hidden relative w-full">
          <div className={!toggle ? "hidden max-h-0" : "flex flex-col z-50 absolute top-0 left-0 w-full bg-indigo-950" }>
          <Link href="#" className="px-8 py-4 hover:text-blue-400 bg-dark-gradient" onClick={()=>setToggle(!toggle)}><Image src={bars} width={50} height={50} alt="bars" loading="lazy" className="float-right border border-slate-300 rounded hover:bg-slate-500 transition ease-out hover:ease-in hover:cursor-pointer"></Image></Link>
          <Link href="/" className={toggle ? "max-h-60 py-4 px-14 border-t border-slate-300 hover:bg-dark-gradient transition duration-300 ease-out hover:ease-in" : "max-h-0 invisible"} onClick={()=>setToggle(!toggle)}>Home</Link>
          <Link href="/portfolio" className={toggle ? "max-h-60 py-4 px-14 border-t border-slate-300 hover:bg-dark-gradient transition duration-300 ease-out hover:ease-in" : "max-h-0 invisible"} onClick={()=>setToggle(!toggle)}>Portfolio</Link>
          <Link href="contactus" className={toggle ? "max-h-60 py-4 px-14 border-y border-slate-300 hover:bg-dark-gradient transition duration-300 ease-out hover:ease-in" : "max-h-0 invisible"} onClick={()=>setToggle(!toggle)}>Contact Us</Link>
          </div>

          <div className={toggle ? "hidden" : "float-right" } onClick={()=>setToggle(!toggle)}><Image src={bars} width={50} height={50} alt="bars" loading="lazy" className="border border-slate-300 rounded hover:bg-slate-500 transition ease-out hover:ease-in hover:cursor-pointer"></Image></div>
          
          <Link href="/contactus" className="text-lg px-5 py-2.5 font-bold rounded-xl shadow-contact active:shadow-contact-active bg-slate-300 hover:bg-green-100 text-slate-900 float-left transition ease-out hover:ease-in">Contact Us</Link>
        </nav>

      </header>

*/
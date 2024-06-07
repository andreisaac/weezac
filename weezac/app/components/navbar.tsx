import Link from "next/link";

const navbar = () => {
    return (
        <header className="flex flex-wrap select-none gap-0 content-center self-stretch text-white">
        <Link href="/" className="flex-wrap font-bold flex-1 justify-center px-12 text-5xl leading-[86.88px] max-md:px-5 max-md:text-4xl">[ weezac ]</Link>
        <nav className="flex flex-none gap-5 items-center px-12 py-5 text-lg leading-5 max-md:flex-wrap max-md:px-5">
          <Link href="#" className="self-stretch my-auto hover:text-blue-400">Blog</Link>
          <Link href="#" className="self-stretch my-auto hover:text-blue-400">Services</Link>
          <Link href="#" className="self-stretch my-auto hover:text-blue-400">About us</Link>
          <Link href="/contactus" className="text-2xl px-5 py-2.5 font-bold rounded-xl shadow-contact active:shadow-contact-active bg-slate-300 hover:bg-stone-300 text-slate-900">Contact Us</Link>
        </nav>
      </header>
    )
}

export default navbar;
"use client"
import * as React from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import flordojamor from "@images/flordojamor.png";
import weelytical from "@images/weelytical.png";
import arrowUp from "@images/arrowUp.svg";


const MyComponent: React.FC = () => {

    const handleClick = () => {
        window.scroll(0, 0)
    };

  return (
    <motion.main initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: .5, ease:"easeIn"}} className="min-h-[100vh]">
      
      <section className="grid grid-flow-row xl:grid-flow-col gap-8 mt-20 px-4 lg:px-20 xl:px-0">

        <Link href="https://weelytical.com" target="_blank" className="card bg-white shadow-xl rounded-t-xl xl:col-span-7">
          <figure>
            <Image src={weelytical} width={684} className="w-full h-auto" alt="flor do jamor"/>
          </figure>

          <div className="card-body bg-n700 rounded-b-xl px-4 lg:px10">
            <h2 className="text-n400 text-2xl lg:text-4xl">Weelytical <span className="text-purple900">Analytics</span></h2>
            <p className="text-n300 lg:text-lg">Cookie less analytics SaaS web app.</p>
            <p className="text-n300 lg:text-lg">This tool do not track any users identity metric, eliminating the need for a cookie consent banner.</p>
            <p className="text-n300 lg:text-lg">Npm package to easily install and track the website traffic. </p>
          </div>
        </Link>

        <Link href="https://flordojamor.pt" target="_blank" className="card bg-white shadow-xl rounded-t-xl xl:col-span-5">
          <figure>
            <Image src={flordojamor} width={500} className="w-full h-auto" alt="flor do jamor"/>
          </figure>

          <div className="card-body bg-n700 rounded-b-xl px-4 lg:px10">
            <h2 className="text-n400 text-2xl lg:text-4xl">Flor do Jamor  <span className="text-cyan900">Restaurant</span></h2>
            <p className="text-n300 lg:text-xl leading-8">Website goal is to display the daily menu to customers, preventing calls only to ask the menu, freeing up labor.</p>
            <p className="text-n300 lg:text-xl leading-8">Backoffice with a login wall, SEO optimization and 90+ web core vitals score.</p>
          </div>
        </Link>

      </section>

      <section className="max-md:mx-2 my-24 p-8 bg-light-gradient rounded-2xl relative">
        <h1 className="max-md:text-4xl my-14 text-6xl font-black tracking-widest text-center leading-[64px] h">
            <label className="text-sky-400">More Project</label>
            <br />
            <span className="text-slate-300">On going</span>
        </h1>

        <motion.h1 animate={{scale:[1,1.05,1]}} transition={{duration: 2, ease:"easeIn", repeat: Infinity}} 
          className="max-md:text-6xl my-20 text-8xl font-black tracking-widest text-center leading-[64px] h">Stay tuned!</motion.h1>

        <a onClick={handleClick} className="inline-block select-none cursor-pointer rounded-full bg-slate-300 p-4 absolute bottom-[-40px] left-[50%] ml-[-34px] z-20 hover:scale-110 shadow ease-in-out transition">
                <p className="text-slate-900 text-2xl">Top</p>
                <Image loading="lazy" src={arrowUp} alt="return" className="w-8 ml-1"/>
        </a>

        <section className="px-14 pb-8 container bg-cyanOpac rounded-b-full text-center absolute bottom-[-60px] left-[50%] ml-[-75px] h-[60px] max-w-[150px]">
            
        </section>
    </section>
    </motion.main>
  );
};

export default MyComponent;
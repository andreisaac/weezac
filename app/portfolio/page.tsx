"use client"
import * as React from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import menus from "@images/flodojamorMenus.jpg";
import website from "@images/flordojamor.png";
import profile from "@images/flordojamorMaps.jpg";
import magnifier from "@images/magnifier.svg";
import arrowUp from "@images/arrowUp.svg";

interface CardProps {
  imgSrc: StaticImageData;
  altText: string;
  title: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, altText, title, className }) => {
  return (
    <article className={`max-md:w-[50%] max-md:mx-auto max-md:m-4 max-md:p-0.5 md:pt-0.5 rounded-2xl shadow-xl bg-stone-300 bg-opacity-70 z-50 ${className}`}>
      <div className="md:m-6 rounded-2xl select-none">
        <Image loading="lazy" src={imgSrc} alt={altText} className="w-full rounded-2xl" />
      </div>
      <div className="max-md:hidden py-4 text-2xl font-bold text-center text-slate-200 bg-indigo-950 rounded-b-2xl bg-opacity-70">
        {title}
      </div>
    </article>
  );
};


interface InfoCardProps {
  imgSrc: StaticImageData;
  altText: string;
  title: string;
  link: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ imgSrc, altText, title, link }) => {


  return (
    <article className="max-md:w-[50%] max-md:mx-auto max-md:m-4 md:p-0.5 rounded-2xl shadow-xl bg-blue-400 bg-opacity-70 z-50 md:scale-125">
        <Link href={link} target="new">
        <Image loading="lazy" src={imgSrc} alt={altText} className="md:hidden rounded-2xl" />
        <div className="max-md:hidden mockup-browser bg-base-300 md:m-4 shadow-xl select-none">
            <div className="mockup-browser-toolbar">
                <div className="border border-slate-400 text-slate-400 w-full rounded pl-2 mx-2">
                    <Image loading="lazy" src={magnifier} alt={altText} className="max-lg:hidden w-auto inline mr-2 " />
                    {link}
                </div>
            </div>
            <div className="flex justify-center bg-base-200">
                <Image loading="lazy" src={imgSrc} alt={altText} className="min-w-full min-h-full" />
            </div>
        </div>
        </Link>
        <div className="max-md:hidden py-4 text-2xl font-bold tracking-wide text-center text-slate-200 bg-indigo-950 rounded-b-2xl bg-opacity-70">
        {title}
        </div>
    </article>
  );
};

const MyComponent: React.FC = () => {

    const handleClick = () => {
        window.scroll(0, 0)
    };

  return (
    <motion.main initial={{ opacity: 0, y: -1500 }} animate={{ opacity: 1, y: 0 }} transition={{duration: .8, ease:"easeIn"}}>

    <section className="p-4 flex flex-col relative max-md:mt-4 max-md:bg-light-gradient max-md:rounded-xl max-md:mx-2 ">
      <h1 className="max-md:my-4 md:mb-6 md:text-6xl text-4xl font-black tracking-widest text-center md:leading-[64px] text-slate-300 hover:text-emerald h">
        <Link href="https://flordojamor.pt" target="new">
        <span className="text-sky-400">Restaurante </span>
        <span>Flor do Jamor</span>
        </Link>
      </h1>
      <div className="w-[500px] h-[500px] rounded-full left-[30%] top-[20%] blur-[200px] absolute bg-cyan z-0"></div>
      <div className="md:mt-14 z-20">
        <div className="flex max-md:flex-col">
          <div className="max-md:flex max-md:flex-col max-md::mt-8 w-[30%] max-md:w-full">
            <Card imgSrc={menus} altText="Branding image" title="Branding" className="mt-44 max-md:mt-4 grow" />
            <div className="max-md:px-2">
              <h3 className="mt-0 text-center text-3xl text-slate-300 font-bold lg:hidden">Branding</h3>
              <p className="max-md:mt-2 mt-4 max-md:text-left text-2xl md:tracking-wider leading-9 text-center text-slate-300">
                New menu designs with vibrant visuals, while the imagery captures the inviting ambiance.
              </p>  
            </div>
          </div>
          <div className="max-md:flex max-md:flex-col max-md:mt-8 md:ml-5 w-2/5 max-md:w-full">
            <InfoCard imgSrc={website} altText="Website image" title="Website" link="https://flordojamor.pt" />
            <div className="max-md:px-2">
              <h3 className="mt-0 text-center text-3xl text-slate-300 font-bold lg:hidden">Website</h3>
              <p className="max-md:mt-2 mt-4 md:mt-20 max-md:text-left text-2xl md:tracking-wider leading-9 text-center text-slate-300">
                Display the daily menu that can be updated through the Backoffice with a login wall, and contacts.
              </p>  
            </div>
          </div>
          <div className="max-md:mb-8 max-md:flex max-md:flex-col max-md:mt-8 w-[30%] max-md:w-full">
            <Card imgSrc={profile} altText="Google Business Profile image" title="Google Business Profile" className="mt-44 max-md:mt-10 grow" />
            <div className="max-md:px-2 max-md:container">
              <h3 className="mt-0 text-center text-3xl text-slate-300 font-bold lg:hidden">Google Business Profile</h3>
              <p className="max-md:mt-2 mt-4 max-md:text-left text-2xl md:tracking-wide leading-9 text-center text-slate-300">
                Enhancing online visibility, attract local customers, and provide valuable insights.
              </p>  
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="max-md:mx-2 my-24 p-8 bg-light-gradient rounded-2xl relative">
        <h1 className="max-md:text-4xl my-14 text-6xl font-black tracking-widest text-center leading-[64px] h">
            <label className="text-sky-400">Project</label>
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
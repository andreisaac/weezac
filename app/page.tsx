"use client"
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import Faq from "@components/faq"
import TypingAnimations from "@components/typingAnimation"
import Website from "@components/svg/website"
import Webdesign from "@components/svg/webdesign"
import Rocket from "@components/svg/rocket"
import webapp from "./images/webapp.svg"
import CMS from "./images/CMS.svg"
import ecomm from "./images/ecomm.svg"
import int from "./images/int.svg"

type SectionProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

type StepProps = {
  title: string;
  number: string;
  description: string;
};

type PerformanceMetricProps = {
  value: number;
  label: string;
};

const Section: React.FC<SectionProps> = ({ title, description, imageUrl, imageAlt }) => (
  <section className="grid grid-flow-row auto-rows-max place-items-center">
    <div className="text-center mb-4 max-lg:mt-3.5 max-lg:max-w-full">
        <Image loading="lazy" src={imageUrl} alt={imageAlt} width={130} height={130} className="aspect-square max-lg:w-20 drop-shadow-lg" />
    </div>
    <p className="text-center font-bold text-neutral-300 max-lg:text-xl mb-4 text-xl text-shadow-xl">
      {title}
    </p>
    <div className="text-center text-shadow-m mt-2 text-lg text-white max-lg:text-md">{description}</div>
  </section>
);

const Step: React.FC<StepProps> = ({ title, number, description }) => (
  <li className="step step-primary lg:text-center text-slate-300" data-content="">
    <p className="font-bold xl:text-xl lg:my-4 max-lg:ml-4"><label className="lg:hidden mr-2">{number}. </label> {title}</p>
    <p className="xl:text-lg">{description}</p>
  </li>
);

const PerformanceMetric: React.FC<PerformanceMetricProps> = ({ value, label }) => (
  <motion.div whileHover={{scale:1.2}} className="flex flex-col max-sm:mt-8 max-sm:w-6/12 w-3/12 max-lg:ml-0">
    <div className="radial-progress mx-auto text-green-500 text-xl" style={{"--value":value}} role="progressbar">{value}</div>
    <div className="mt-3 text-center max-md:text-lg text-2xl text-slate-300 font-medium">{label}</div>
  </motion.div>
);


const HomePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{duration: .5, ease:"easeIn"}} className="flex flex-col items-center pb-20 z-10">
      
      <main className="snap-start snap-always lg:grid lg:grid-cols-5 gap-4 w-full max-lg:mt-10 max-lg:max-w-full max-2xl:mt-24 lg:mt-[-10px] xl:mt-[-220px] relative" >
        <div className="lg:col-span-3 xl:col-span-3 lg:pt-10 xl:mt-14 relative lg:top-[-50px] xl:top-[140px] 2xl:top-[140px]" >
          <TypingAnimations text="We build your Website!" color="text-emerald"></TypingAnimations>
          <p className="max-lg:text-lg text-2xl max-lg:mt-4 max-lg:px-4 lg:px-8 px-28 tracking-wider text-white">
            From responsive design to seamless functionality, we ensure your website stands out in today's competitive digital landscape.Partner with us to unlock the full potential of your online platform and drive meaningful results for your business.
          </p>
        </div>
        <div className="lg:col-span-2 max-lg:hidden relative lg:top-[40px] xl:top-[200px] xl:p-14">
          <Website></Website>
        </div>
      </main>

      <main className="grid max-lg:grid-cols-2 grid-cols-4 2xl:pt-14 max-xl:gap-1 gap-14 bg-light-gradient max-lg:mx-2 max-lg:p-2 p-8 rounded-lg max-lg:mt-10 xl:mt-24 bg-gradient-light shadow-2xl">
            <Section title="Institutional Website" description="A well-crafted website is an effective marketing and communication tool that fosters trust and generates leads." imageUrl={int} imageAlt="Institutional Website Image" />
            <Section title="Ecommerce" description="Businesses can operate 24/7, 7 days a week, and reach customers in any time zone with eCommerce solutions." imageUrl={ecomm} imageAlt="Ecommerce Image" />
            <Section title="Web Applications" description="Web applications can reach a global audience. They are interactive and attractive, and therefore can easily catch the attention of users." imageUrl={webapp} imageAlt="Web Applications Image" />
            <Section title="Content Management System" description="By optimizing internal workflows, a dedicated CMS can save you time and money by meeting the specific needs of your business." imageUrl={CMS} imageAlt="CMS Image" />
      </main>

      <motion.main className="snap-start snap-always lg:grid lg:grid-cols-5 lg:mt-14"
        initial="hidden"
        whileInView="reveal"
        viewport={{ once: true }}
      >
        <motion.div className="lg:col-span-2 max-lg:hidden">
          <Webdesign></Webdesign>
        </motion.div>
        <motion.div className="lg:col-span-3">
          <TypingAnimations text="Reinventing your business Image!" color="text-cyan"></TypingAnimations>
          <p className="lg:text-lg xl:text-2xl max-lg:px-4 lg:px-8 px-28 tracking-widest text-white">
            Your digital storefront speaks volumes about your brand. A fresh website image isn't just about aesthetics it's about making a lasting impression. Stand out from the competition, attract more visitors, and convert them into loyal customers. Let's craft a compelling online identity that reflects the true essence of your business and propels you towards greater success.
          </p>
        </motion.div>
      </motion.main>

      <main className="max-lg:grid max-lg:grid-cols-6 px-5 mt-14 lg:mt-8 xl:mt-4">
        <ul className="grid grid-cols-4 mb-6 max-lg:hidden">
          <li className="text-center text-7xl max-lg:text-xl">1</li>
          <li className="text-center text-7xl max-lg:text-xl">2</li>
          <li className="text-center text-7xl max-lg:text-xl">3</li>
          <li className="text-center text-7xl max-lg:text-xl">4</li>
        </ul>
        <ul className="steps max-lg:steps-vertical h-full lg:grid lg:grid-cols-4 lg:grid-flow-row">
          <li className="step step-primary" data-content=""></li>
          <li className="step step-primary" data-content=""></li>
          <li className="step step-primary" data-content=""></li>
          <li className="step step-primary" data-content=""></li>
        </ul>
        <ul className="grid lg:grid-cols-4 max-lg:col-span-5 gap-8 grid-flow-row">
          <Step title="Tell us about your idea" number="1" description="In the idea and planning phase, we define your goals, target audience, and desired website functionalities. Through research and collaboration, we outline clear project scope and timelines." />
          <Step title="Design Prototyping" number="2" description="In the design phase, we bring your vision to life with carefully crafted visuals. Through wireframes and mockups, we create a user-friendly interface that represents your brand identity. Your input guides us as we refine the design to ensure it meets your expectations." />
          <Step title="Design approval" number="3" description="In the design approval stage, we present our visual concepts tailored to your brand identity. Your feedback guides us to refine the design until it perfectly reflects your vision and meets your expectations." />
          <Step title="Develop and deploy" number="4" description="In the development and deployment phase, we bring your website to life with expert coding and implementation. Rigorous testing ensures functionality, performance, and security." />
        </ul>
      </main>

      <motion.main className="snap-start snap-always lg:grid lg:grid-cols-5 mt-14"
        initial="hidden"
        whileInView="reveal"
        viewport={{ once: true }}
      >
        <motion.div className="lg:col-span-2 max-lg:hidden">
          <Rocket></Rocket>
        </motion.div>
        <motion.div className="lg:col-span-3">
          <TypingAnimations text="SEO Optimization!" color="text-purple"></TypingAnimations>
          <p className="lg:text-xl xl:text-2xl max-lg:px-4 lg:px-8 px-28 tracking-widest text-white">
          Boost your online visibility and drive more traffic to your website with our expert SEO services! 
          Stand out in search engine results, increase your site's ranking, and attract more potential customers. 
          Let us optimize your online presence and watch your business soar to new heights. Contact us today to supercharge your SEO strategy!          </p>
        </motion.div>
      </motion.main>

      <main className="max-lg:mx-2 bg-light-gradient rounded-xl mt-14 z-50 shadow-2xl">
          <h2 className="mt-8 text-center text-green-500 text-shadow-m max-lg:text-4xl text-5xl font-bold">Performance is vital</h2>
          <div className="px-5 mt-7 w-full">
            <div className="flex max-lg:flex-wrap gap-4 max-lg:gap-0 w-full">
              <PerformanceMetric value={100} label="Performance" />
              <PerformanceMetric value={93} label="Accessibility" />
              <PerformanceMetric value={95} label="Best Practices" />
              <PerformanceMetric value={100} label="SEO" /> 
            </div>
          </div>
          <p className="text-slate-100 text-justify max-md:text-base text-2xl p-8 max-lg:px-4 px-24 mb-4">
          Unlock the power of smooth, high-performing websites with us. <br/>
          Our platforms are meticulously crafted to exceed Core Web Vitals benchmarks, ensuring rapid loading times and seamless user experiences.
          <br/>Good scores can contribute to lower bounce rates, better engagement, and even higher conversions. Not to mention better search rankings.
          <br/>
          You check how a website perform with  
          <Link className="text-blue-500 underline ml-2" href="https://pagespeed.web.dev/">Page Speed Insights.</Link>
          </p>
      </main>

      <Faq/>

    </motion.div>
  );
}

export default HomePage;
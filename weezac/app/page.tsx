import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Faq from "@components/faq"
import NavBar from "@components/navbar"
import website from "./images/website.svg"
import webdesign from "./images/webdesign.svg"
import seo from "./images/seo.svg"
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
  description: string;
};

type PerformanceMetricProps = {
  value: number;
  label: string;
};

const Section: React.FC<SectionProps> = ({ title, description, imageUrl, imageAlt }) => (
  <section className="grid grid-flow-row auto-rows-max place-items-center">
    <div className="text-center mb-4 max-md:mt-3.5 max-md:max-w-full">
        <Image loading="lazy" src={imageUrl} alt={imageAlt} width={130} height={130} className="aspect-square max-md:max-w-full drop-shadow-lg" />
    </div>
    <h3 className="text-center font-bold text-neutral-300 text-xl text-shadow-xl">
      {title}
    </h3>
    <div className="text-center text-shadow-m mt-2 text-l text-white max-md:max-w-full">{description}</div>
  </section>
);

const Step: React.FC<StepProps> = ({ title, description }) => (
  <li className="step step-primary text-center text-slate-300" data-content="">
    <h3 className="text-l font-bold text-xl my-4">{title}</h3>
    <p>{description}</p>
  </li>
);

const PerformanceMetric: React.FC<PerformanceMetricProps> = ({ value, label }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="radial-progress mx-auto text-green-500 text-xl" style={{"--value":value}} role="progressbar">{value}</div>
    <div className="mt-3 text-center text-2xl text-slate-300 font-medium">{label}</div>
  </div>
);


const MyComponent = () => {
  return (
    <div className="flex flex-col items-center pb-20 snap-mandatory">
      <NavBar/>
      <main className="snap-start snap-always grid grid-cols-3 gap-4 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full mt-24">
        <div className="col-span-2">
          <h1 className="text-5xl font-black text-shadow-xl text-teal-500 leading-[64px] py-8 px-28 mt-16">
            We build your Website!
          </h1>
          <p className="text-2xl px-28 tracking-wider text-white max-md:max-w-full">
            From responsive design to seamless functionality, we ensure your website stands out in today's competitive digital landscape.Partner with us to unlock the full potential of your online platform and drive meaningful results for your business.
          </p>
        </div>
        <div className="col-auto">
          <Image src={website} loading="lazy" className="w-full pt-8 pr-24" alt="We build your website"/>
        </div>
      </main>

      <main className="grid grid-cols-4 gap-14 bg-dark-gradient mx-14 p-8 rounded-lg max-w-[1440px] max-md:mt-10 max-md:max-w-full mt-24 bg-gradient-light">
            <Section title="Institutional Website" description="A well-crafted website is an effective marketing and communication tool that fosters trust and generates leads." imageUrl={int} imageAlt="Institutional Website Image" />
            <Section title="Ecommerce" description="Businesses can operate 24/7, 7 days a week, and reach customers in any time zone with eCommerce solutions." imageUrl={ecomm} imageAlt="Ecommerce Image" />
            <Section title="Web Applications" description="Web applications can reach a global audience. They are interactive and attractive, and therefore can easily catch the attention of users." imageUrl={webapp} imageAlt="Web Applications Image" />
            <Section title="Content Management System" description="By optimizing internal workflows, a dedicated CMS can save you time and money by meeting the specific needs of your business." imageUrl={CMS} imageAlt="CMS Image" />
      </main>

      <main className="snap-start snap-always grid grid-cols-3 gap-4 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full mt-14">
        <div className="col-auto">
          <Image src={webdesign} loading="lazy" className="w-full mt-12 ml-14" alt="We build your website"/>
        </div>
        <div className="col-span-2">
          <h1 className="text-5xl font-black text-shadow-xl text-cyan leading-[64px] py-8 px-28 mt-16">
            Reinventing your business Image
          </h1>
          <p className="text-2xl px-28 tracking-wider text-white max-md:max-w-full">
            Your digital storefront speaks volumes about your brand. A fresh website image isn't just about aesthetics it's about making a lasting impression. Stand out from the competition, attract more visitors, and convert them into loyal customers. Let's craft a compelling online identity that reflects the true essence of your business and propels you towards greater success.
          </p>
        </div>
      </main>

      <main className="px-5 mt-28 w-full max-w-[1362px] max-md:mt-10 max-md:max-w-full">
        <ul className="grid grid-cols-4  mb-6">
          <li className="text-center text-7xl">1</li>
          <li className="text-center text-7xl">2</li>
          <li className="text-center text-7xl">3</li>
          <li className="text-center text-7xl">4</li>
        </ul>
        <ul className="steps grid grid-cols-4 grid-flow-row">
          <li className="step step-primary" data-content=""></li>
          <li className="step step-primary" data-content=""></li>
          <li className="step step-primary" data-content=""></li>
          <li className="step step-primary" data-content=""></li>
        </ul>
        <ul className="grid grid-cols-4 gap-8 grid-flow-row">
          <Step title="Tell us about your idea" description="In the idea and planning phase, we define your goals, target audience, and desired website functionalities. Through research and collaboration, we outline clear project scope and timelines." />
          <Step title="Design Prototyping" description="In the design phase, we bring your vision to life with carefully crafted visuals. Through wireframes and mockups, we create a user-friendly interface that represents your brand identity. Your input guides us as we refine the design to ensure it meets your expectations." />
          <Step title="Design approval" description="In the design approval stage, we present our visual concepts tailored to your brand identity. Your feedback guides us to refine the design until it perfectly reflects your vision and meets your expectations." />
          <Step title="Develop and deploy" description="In the development and deployment phase, we bring your website to life with expert coding and implementation. Rigorous testing ensures functionality, performance, and security." />
        </ul>
      </main>

      <main className="snap-start snap-always grid grid-cols-3 gap-4 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full mt-14">
        <div className="col-auto">
          <Image src={seo} loading="lazy" className="w-full mt-12 ml-14" alt="We build your website"/>
        </div>
        <div className="col-span-2 pt-10">
          <h1 className="text-5xl font-black text-shadow-xl text-purple leading-[64px] py-8 px-28 mt-16">
          SEO Optimization
          </h1>
          <p className="text-2xl px-28 tracking-wider text-white max-md:max-w-full">
          Boost your online visibility and drive more traffic to your website with our expert SEO services! 
          Stand out in search engine results, increase your site's ranking, and attract more potential customers. 
          Let us optimize your online presence and watch your business soar to new heights. Contact us today to supercharge your SEO strategy!          </p>
        </div>
      </main>

      <main className="mt-28 mx-14 bg-dark-gradient rounded-xl max-md:mt-10 max-md:max-w-full">
          <h2 className="mt-12 text-6xl font-bold text-center text-green-500 text-shadow-m leading-[64px] max-md:max-w-full max-md:text-4xl">Performance Guaranteed</h2>
          <div className="flex-wrap content-start px-5 mt-7 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <PerformanceMetric value={100} label="Performance" />
              <PerformanceMetric value={93} label="Accessibility" />
              <PerformanceMetric value={95} label="Best Practices" />
              <PerformanceMetric value={100} label="SEO" /> 
            </div>
          </div>
          <p className="text-slate-100 text-justify text-2xl p-8 px-24 mb-4">
          Unlock the power of smooth, high-performing websites with us. <br/>
          Our platforms are meticulously crafted to exceed Core Web Vitals benchmarks, ensuring rapid loading times and seamless user experiences.
          <br/>Good scores can contribute to lower bounce rates, better engagement, and even higher conversions. Not to mention better search rankings.
          <br/>
          You check how a website perform with  
          <Link className="text-blue-500 underline ml-2" href="https://pagespeed.web.dev/">Page Speed Insights.</Link>
          </p>
      </main>

      <Faq/>

    </div>
  );
}

export default MyComponent;
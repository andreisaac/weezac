"use client"
import * as React from "react";
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import handshake from "@images/handshake.svg";
import PrivacyPolicy from "@components/privacyPolicy";
import TextInput from "@components/input/textInput";
import EmailInput from "@components/input/emailInput";
import PhoneInput from "@components/input/phoneInput";
import TextAreaInput from "@components/input/textAreaInput";
import WebsiteInput from "@components/input/websiteInput";
import FeaturesInput from "@components/input/featuresInput";
import DesignPreferencesInput from "@components/input/designPreferencesInput";

const Contact = () => { 
    const [load, setLoad] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const [submitErrorMessage, setSubmitErrorMessage] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState({email:false,["CurrentWebsite:"]: false});
    const [organization, setOrganization] = useState("");
    const [website, setWebsite] = useState("");
    const [features, setFeatures] = useState({
        contactForm: false,
        ecommerce: false,
        blog: false,
        gallery: false,
        login: false,
        seo: false,
        custom: false
    });
    const [target, setTarget] = useState("");
    const [designPreferences, setDesignPreferences] = useState({
        minimalist: false,
        modern: false,
        professional: false,
        fun: false,
        colorful: false,
        description: ""
    });
    const [comments, setComments] = useState("");
    const [privacy, setPrivacy] = useState(false);

    const oChange = (e:any) => {
        setPrivacy(!privacy)
    };

    const disabled = () => {
        return (
            !name ||
            !email ||
            !phone ||
            !organization ||
            !website ||
            !features ||
            !designPreferences ||
            !privacy
        ) || (
            error.email ||
            error["CurrentWebsite:"]
        )
    };

    const submit = async (e:any) => {
        e.preventDefault();
        const obj = {
            name: name,
            email: email,
            phone: phone,
            organization: organization,
            website: website,
            features: features,
            target: target,
            designPreferences: designPreferences,
            comments: comments,
            date: new Date()
        };

        setLoad(true);
        try {
            const response = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ data: obj }),
            });
            const resp = await response.json()
            if (resp.success == true) {
                setSubmited(true);
                setLoad(false)
                setSubmitError(false)
                setSubmitErrorMessage([])
              console.log(await response.json());
            } else {
                setSubmitError(true);
                setSubmitErrorMessage(resp.error);
                setLoad(false)
                console.error('Failed to post data:', resp);
            }
          } catch (error:any) {
            setLoad(false);
            setSubmitError(error)
            console.error('Error posting data:', error);
          }
    };
    
    return (
        <div className="snap-mandatory h-full min-h-screen">
        {true ? (
        <section className="bg-dark-gradient rounded-lg drop-shadow-md border-t-8 border-b-8 border-emerald max-lg:mx-4 max-xl:mx-14 mx-28 my-8">
                <h1 className="text-5xl text-slate-300 text-center font-bold mt-14">Get a quote to your project.</h1>
                <div className="lg:flex lg:flex-row max-lg:m-4 lg:m-14 lg:gap-8">
                    <div className="flex flex-col lg:w-5/12">
                        <TextInput label="Name:" placeholder="First and Last Name..." data={name} setData={setName}/>
                        <EmailInput label="Email:" placeholder="yourmail@provider.com..." data={email} setData={setEmail} error={error} setError={setError}/>
                        <PhoneInput label="Phone Number:" data={phone} setData={setPhone}/>
                        <TextInput label="Business / Organization Name:" placeholder="My business name..." data={organization} setData={setOrganization}/>                 
                        <WebsiteInput label="Current Website:" placeholder="https://mywebsite.com..." data={website} setData={setWebsite} error={error} setError={setError}/>
                        <FeaturesInput data={features} setData={setFeatures}/>
                    </div>
                    <div className="flex flex-col flex-1">
                        <TextAreaInput label="Target Audience:" placeholder="Describe your target audience..." data={target} setData={setTarget}/>
                        <DesignPreferencesInput data={designPreferences} setData={setDesignPreferences}/>
                        <TextAreaInput label="Aditional comments:" placeholder="Tell us more about your business needs..." data={comments} setData={setComments}/>
                    </div>
                </div>
                <div className="form-control max-lg:mx-8 lg:w-8/12 mx-auto mt-14">
                    <label className="label">
                        <input type="checkbox" className="checkbox checkbox-accent" value="privacy" onChange={oChange}/>
                        <span className="label-text flex-1 ml-4"><b>Privacy Policy Agreement:</b> Confirm that they have read and agree to the website's <PrivacyPolicy/></span>   
                    </label>
                </div>
                <div className="my-14 text-center">
                {load ? (<span className="loading loading-spinner loading-lg"></span>):
                    (<button className="text-xl px-5 py-2.5 font-bold rounded-xl shadow-contact disabled:cursor-not-allowed disabled:opacity-50 active:shadow-contact-active bg-slate-300 hover:bg-green-100 text-slate-900 transition ease-out hover:ease-in" onClick={submit} disabled={disabled()}>Submit</button>)
                }
                {submitError && submitErrorMessage ? (
                    submitErrorMessage.map((text:string, index)=>
                        <div key={index} role="alert" className="alert alert-error mt-4 mx-14 w-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Error! {text}</span>
                        </div>
                )    
                ) : ""}
                </div>
            </section>
        ) : (
            <section className="bg-dark-gradient rounded-lg drop-shadow-md border-t-8 border-b-8 border-emerald mx-28 my-8 mt-[20%]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <article className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full bg-slate-300">
                    <Image src={handshake} alt="handshake for quote" width={400} height={300} className=""/>
                </article>
                <article className="flex flex-col text-slate-300 px-6 w-[70%] max-md:ml-0 max-md:w-full">
                    <h3 className="text-5xl font-black my-4 mt-10">Thank you!</h3>
                    <p className="text-xl my-4 px-4">Our team is currently reviewing your request and will be in touch shortly to discuss your requirements in more detail. In the meantime, if you have any additional questions or need further information, please do not hesitate to contact us at <Link href="mailto:info@weezac.pt" className="text-blue-600 underline hover:text-slate-300 ">info@weezac.pt</Link>.</p>
                    <p className="text-xl my-4 px-4">We look forward to the possibility of collaborating with you and contributing to the success of {organization}.</p>
                </article>
                </div>
            </section>
        )
        }
        </div>
    )
}

export default Contact;
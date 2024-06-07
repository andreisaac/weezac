import * as React from "react";

const Faq = () => {
    return (
    <main className="mt-28 w-full max-w-[1365px] text-slate-200 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-5xl font-bold text-blue-400 ml-8 leading-[64px] max-md:max-w-full max-md:text-4xl">FAQs</h2>

        <div className="collapse collapse-arrow border-t border-t-slate-300 border-transparente my-2 rounded-none">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium mt-2">
            Why Choose Weezac over Wix or WordPress?
            </div>
            <div className="collapse-content"> 
            <div className="py-8 px-8 bg-dark-gradient rounded-md">
                <p className="mb-4">
                Choosing Weezac for your website means benefiting from a platform designed with your specific needs in mind, providing robust functionality, superior security, and dedicated support to ensure your online presence is both impactful and manageable.              
                </p>
                <p className="ml-8 mt-4">1. <b>Eye catching design :</b><br/> We create modern and appealing designs conveying an image of professionalism giving confidence to customers</p>
                <p className="ml-8 mt-4">2. <b>Custom Functionalities:</b><br/> To implement some functionalities you want you may need to buy a plugin or hire a developer to implement it. However, in Weezac you do not pay for a plugin.</p>
                <p className="ml-8 mt-4">3. <b>Cost-Effective Solutions:</b><br/> Weezac’s pricing plans are designed to be cost-effective for institutions, often including many necessary features as standard without the need for additional expensive plugins or custom development.</p>
                <p className="ml-8 mt-4">4. <b>SEO Optimization:</b><br/> Weezac ensures superior SEO optimization, enhancing your website's visibility and search engine rankings to attract more visitors and drive engagement.</p>
                <p className="ml-8 mt-4">5. <b>Performance:</b><br/> We develop with performance in mind, ensuring fast load times and a seamless user experience for your visitors, reducing bounce rates.</p>
                
            </div>
            </div>
        </div>

        <div className="collapse collapse-arrow border-t border-t-slate-300 border-transparente my-2 rounded-none">
            <input type="radio" name="my-accordion-2"/> 
            <div className="collapse-title text-xl font-medium mt-2">
            What is your web development process like?
            </div>
            <div className="collapse-content"> 
            <div className="bg-dark-gradient py-8 px-8 rounded-md">
                
                <p>
                Our web development process is designed to ensure a seamless, collaborative experience that delivers a high-quality, tailored website to meet your specific needs. Here's a step-by-step breakdown of our process:
                </p>

                <h3 className="font-bold ml-8 mt-1">1. Discovery and Consultation:</h3>
                <p className="ml-12 p-2">
                We start with an in-depth consultation to understand your business goals, target audience, and specific requirements. This helps us align our strategy with your vision and objectives.
                </p>

                <h3 className="font-bold ml-8 mt-1">2. Planning and Strategy:</h3>
                <p className="ml-12 p-2">
                Based on our initial discussions, we create a detailed project plan. This includes defining the site structure, selecting the right technologies, and setting clear milestones and timelines. We also provide a transparent quote and timeline for the project.
                </p>

                <h3 className="font-bold ml-8 mt-1">3. Design:</h3>
                <p className="ml-12 p-2">
                Our design phase focuses on creating an intuitive, visually appealing, and user-friendly interface. We develop wireframes and design mockups for your review and feedback. Our goal is to ensure the design reflects your brand identity and provides an excellent user experience.
                </p>

                <h3 className="font-bold ml-8 mt-1">4. Development:</h3>
                <p className="ml-12 p-2">
                Once the design is approved, our skilled developers bring it to life using the latest web technologies. We ensure the website is responsive, fast, and optimized for search engines. During this phase, we regularly update you on progress and incorporate any feedback.
                </p>

                <h3 className="font-bold ml-8 mt-1">5. Testing:</h3>
                <p className="ml-12 p-2">
                Before launch, we rigorously test the website across different devices and browsers to ensure everything works perfectly. This includes functionality testing, performance testing, and security assessments to ensure a smooth user experience.
                </p>

                <h3 className="font-bold ml-8 mt-1">6. Launch:</h3>
                <p className="ml-12 p-2">
                After thorough testing and your final approval, we launch the website. We handle all the technical aspects of the deployment process to ensure a smooth transition. We also provide training if needed, so you can manage your new site effectively.
                </p>

                <h3 className="font-bold ml-8 mt-1">7. Post-Launch Support and Maintenance:</h3>
                <p className="ml-12 p-2">
                Our commitment doesn't end at launch. We offer ongoing support and maintenance services to keep your website running smoothly. This includes regular updates, performance monitoring, and any additional changes you may need.
                </p>
                <p>
                Throughout the entire process, we prioritize communication and collaboration, ensuring you are involved and informed at every stage. Our goal is to build a website that not only looks great but also drives results for your business.
                </p>
            </div>
            </div>
        </div>

        <div className="collapse collapse-arrow border-t border-t-slate-300 border-transparente my-2 rounded-none">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium mt-2">
            How long does it typically take to complete a web development project?
            </div>
            <div className="collapse-content"> 
            <div className="py-8 px-8 bg-dark-gradient rounded-md">
                <p>The timeline for completing a web development project can vary significantly depending on the type and complexity of the site. Here’s an overview of what you can expect for different types of projects:</p>
                
                <h3 className="font-bold ml-8 mt-1">Institutional Website:</h3>
                <p className="ml-12 p-2">
                An institutional website is typically a static site with a few pages and a contact form. This type of website is straightforward and can be completed quickly.
                </p>
                <p className="ml-12 p-2">Typical Duration: 1-2 weeks</p>

                <h3 className="font-bold ml-8 mt-1">E-commerce Website:</h3>
                <p className="ml-12 p-2">
                An e-commerce website requires more functionality, such as product listings, a shopping cart, and payment integration.            
                </p>
                <p className="ml-12 p-2">Typical Duration: 4-8 weeks</p>

                <h3 className="font-bold ml-8 mt-1">Web Application:</h3>
                <p className="ml-12 p-2">
                A web application involves custom functionality and interactive features, making the development process more complex.
                </p>
                <p className="ml-12 p-2">Typical Duration: 8-16 weeks</p>

                <h3 className="font-bold ml-8 mt-1">Content Management System: (CMS)</h3>
                <p className="ml-12 p-2">
                A CMS allows you to manage and update your website content easily. The development time depends on the complexity and customizations needed.            </p>
                <p className="ml-12 p-2">Typical Duration: 8-12 weeks</p>
            </div>
            </div>
        </div>

        <div className="collapse collapse-arrow border-t border-t-slate-300 border-transparente my-2 rounded-none">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium mt-2">
            Do you provide ongoing maintenance and support for websites after launch?
            </div>
            <div className="collapse-content"> 
            <div className="py-8 px-8 bg-dark-gradient rounded-md">
                <p className="mb-4">
                Yes, we offer comprehensive maintenance and support services to ensure your website remains secure, up-to-date, and performing optimally. Our services include:
                </p>
                <p className="ml-8 mt-1">1. <b>Regular Updates:</b> Keeping your site updated with the latest software and security patches.</p>
                <p className="ml-8 mt-1">2. <b>Performance Monitoring:</b> Ensuring fast load times and efficient server performance.</p>
                <p className="ml-8 mt-1">3. <b>Security Enhancements:</b> Implementing measures to protect against malware and other threats.</p>
                <p className="ml-8 mt-1">4. <b>Content Updates:</b> Managing and updating your website content as needed.</p>
                <p className="ml-8 mt-1">5. <b>Technical Support:</b> Providing assistance with any technical issues or questions.</p>
                <p className="ml-8 mt-1">6. <b>Backup Services:</b> Regularly backing up your website to safeguard your data.</p>
                <p className="ml-8 mt-1">7. <b>Feature Enhancements:</b> Adding new features and functionalities as your business grows.</p>
                
                <p className="p-2 mt-2">We offer flexible maintenance plans tailored to your needs, allowing you to focus on your business while we take care of your website.</p>
            </div>
            </div>
        </div>

        <div className="collapse collapse-arrow border-t border-t-slate-300 border-transparente my-2 rounded-none">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium mt-2">
            Can you help with website hosting and domain registration?
            </div>
            <div className="collapse-content"> 
            <div className="py-8 px-8 bg-dark-gradient rounded-md">
                <p className="mb-4">
                Yes, we offer assistance with both website hosting and domain registration. Our services include:
                </p>
                <p className="ml-8 mt-1">1. <b>Domain Registration:</b> We can help you choose and register the perfect domain name for your website.</p>
                <p className="ml-8 mt-1">2. <b>Website Hosting:</b> We provide reliable hosting solutions to ensure your website is fast, secure, and always available.</p>
                <p className="ml-8 mt-1">3. <b>Setup and Configuration:</b> We handle all the technical setup and configuration, so you don’t have to worry about the details.</p>
                <p className="ml-8 mt-1">4. <b>Ongoing Support:</b> We offer ongoing support and management for your hosting and domain needs.</p>
            
                <p className="p-2 mt-2">By handling both hosting and domain registration, we provide a seamless and hassle-free experience, allowing you to focus on your business.</p>
            </div>
            </div>
        </div>

        <div className=" collapse collapse-arrow border-y border-y-slate-300 border-transparente my-2 rounded-none">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium mt-2">
            Can you create a visual identity?
            </div>
            <div className="collapse-content"> 
            <div className="py-8 px-8 bg-dark-gradient rounded-md">
                <p>
                Yes, we can create a visual identity that encompasses all visual elements of your brand, including logos, color palettes, typography, and imagery. Our goal is to develop a cohesive and memorable visual representation that aligns with your brand's values and resonates with your target audience.
                </p>
            </div>
            </div>
        </div>

    </main>
    )
}

export default Faq;
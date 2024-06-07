import {useRef} from "react"

interface dial extends HTMLDialogElement {
    showModal(): void;
    close(returnValue?: string): void;
  }

const PrivacyPolicy = () => {

    const dialogRef = useRef<dial>(null);

    const openDialog = () => {
        if (dialogRef.current) {
          dialogRef.current.showModal();
        }
      };
    

    return (
        <>
        <a className="text-blue-500 underline
        hover:text-slate-300 cursor-pointer"  onClick={openDialog}>privacy policy</a>
        <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-grayBlue">
            
            <h3 className="font-bold">Privacy Policy</h3>
            <p className="py-2">Effective Date: 01 June 2024</p>
            <p className="py-2">
                <h3 className="font-bold">1. Introduction</h3>
                we Weezac is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.weezac.pt and use our services. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
            </p>
            <p className="py-2">
                <h3 className="font-bold">2. Information We Collect</h3>
                We may collect information about you in a variety of ways. The information we may collect on the site includes:
            </p>
            <p className="py-2">
                <h3 className="font-bold">2.1. Personal Data</h3>
                While using our services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                <br/>
                Name<br/>
                Email address<br/>
                Phone number<br/>
                Company name<br/>
            </p>
            <p className="py-2">
                <h3 className="font-bold">2.2. Usage Data</h3>
                We may also collect information that your browser sends whenever you visit our site or when you access the site by or through a mobile device ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our site that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
            </p>
            <p className="py-2">
                <h3 className="font-bold">2.3. Tracking & Cookies Data</h3>
                We use cookies and similar tracking technologies to track the activity on our site and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our site.
            </p>
            <p className="py-2">
                <h3 className="font-bold">3. Use of Your Information</h3>
                We use the information we collect in various ways, including to:Name<br/>

                - Provide, operate, and maintain our siteName<br/>
                - Improve, personalize, and expand our siteName<br/>
                - Understand and analyze how you use our site
                - Develop new products, services, featuresName<br/>
            </p>

            
            <div className="modal-action">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn boder border-slate-300">Close</button>
            </form>
            </div>
        </div>
        </dialog>
        </>
    )
    
};

export default PrivacyPolicy;


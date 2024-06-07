import * as React from "react";

type inputProps = {
    data: any;
    setData: Function;
  };

const FeaturesInput: React.FC<inputProps> = ({data, setData}) => {

    const oChange = (e:any) => {
        const label = e.target.value
        setData(Object.assign(data, {[label]: !data[label]}));
    };
   
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">Key Features</span>
            </div>
            <label className="label cursor-pointer px-24">
                <span className="label-text">Contact form</span> 
                <input type="checkbox" className="checkbox checkbox-accent" value="contactForm" onChange={oChange}/>
            </label>
            <label className="label cursor-pointer px-24">
                <span className="label-text">E-commerce Functionality</span> 
                <input type="checkbox" className="checkbox checkbox-accent" value="ecommerce" onChange={oChange}/>
            </label>
            <label className="label cursor-pointer px-24">
                <span className="label-text">Blog</span> 
                <input type="checkbox" className="checkbox checkbox-accent" value="blog" onChange={oChange}/>
            </label>
            <label className="label cursor-pointer px-24">
                <span className="label-text">Gallery</span> 
                <input type="checkbox" className="checkbox checkbox-accent" value="gallery" onChange={oChange}/>
            </label>
            <label className="label cursor-pointer px-24">
                <span className="label-text">User Login</span> 
                <input type="checkbox" className="checkbox checkbox-accent" value="login" onChange={oChange}/>
            </label>
            <label className="label cursor-pointer px-24">
                <span className="label-text">SEO Optimization</span> 
                <input type="checkbox" className="checkbox checkbox-accent" value="seo" onChange={oChange}/>
            </label>
            <label className="label cursor-pointer px-24">
                <span className="label-text">Custom Features</span> 
                <input type="checkbox" className="checkbox checkbox-accent" value="custom" onChange={oChange}/>
            </label>
        </label>
    );   
}

export default FeaturesInput;
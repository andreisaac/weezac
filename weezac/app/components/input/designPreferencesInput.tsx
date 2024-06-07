import * as React from "react";
import {useState} from "react";

type inputProps = {
    data: any;
    setData: Function;
  };

const DesignPreferencesInput: React.FC<inputProps> = ({data, setData}) => {
    const [description, setDescription] = useState("");

    const dChange = (e:any) => {
        const val = e.target.value
        setDescription(val);
        setData(Object.assign(data, {description: val}));
    };

    const oChange = (e:any) => {
        const label = e.target.value
        setData(Object.assign(data, {[label]: !data[label]}));          
    };
   
    return (
        <label className="flex flex-row my-16">
            <div className="flex flex-col w-4/12 form-control">
                <div className="label">
                    <span className="label-text">Design Preferences:</span>
                </div>
                <label className="label cursor-pointer px-4">
                    <span className="label-text">Minimalist</span> 
                    <input type="checkbox" className="checkbox checkbox-accent" value="minimalist" onChange={oChange}/>
                </label>
                <label className="label cursor-pointer px-4">
                    <span className="label-text">Modern</span> 
                    <input type="checkbox" className="checkbox checkbox-accent" value="modern" onChange={oChange}/>
                </label>
                <label className="label cursor-pointer px-4">
                    <span className="label-text">Professional</span> 
                    <input type="checkbox" className="checkbox checkbox-accent" value="professional" onChange={oChange}/>
                </label>
                <label className="label cursor-pointer px-4">
                    <span className="label-text">Fun</span> 
                    <input type="checkbox" className="checkbox checkbox-accent" value="fun" onChange={oChange}/>
                </label>
                <label className="label cursor-pointer px-4">
                    <span className="label-text">Colorful</span> 
                    <input type="checkbox" className="checkbox checkbox-accent" value="colorful" onChange={oChange}/>
                </label>
            </div>
            <div className="flex flex-1">
                <textarea placeholder="Elaborate on your design preferences..." value={description} onChange={dChange} className="input input-bordered w-full h-48 mt-10 mx-2 py-2"></textarea>
            </div>
        </label>
    );   
}

export default DesignPreferencesInput;
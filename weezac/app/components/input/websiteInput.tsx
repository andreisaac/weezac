import * as React from "react";
import {useState} from "react";

type inputProps = {
    label: string;
    data: string;
    setData: Function;
    placeholder: string;
    error: any;
    setError: Function
  };

const WebsiteInput: React.FC<inputProps> = ({label, data, setData, placeholder, error, setError}) => {
    const [er, setEr] = useState(false);

    const oBlur = () => {
        setEr(validateUrl(data));
    };

    const oChange = (e:any) => {
        const val = e.target.value;
        setData(val);
        setError(Object.assign(error, {[placeholder]: validateUrl(val)}));
        setEr(false);
    };

    const validateUrl = (url:string) => {
        const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        return !urlRegex.test(url);
    };

   
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input type="url" placeholder={placeholder} value={data} onChange={oChange} onBlur={oBlur} className="input input-bordered w-full invalid:border invalid:border-purple"/>
            {data && er ? (
                <div role="alert" className="alert alert-error mt-2 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Error! The email format is not correct.</span>
                </div>
            ): ""}
        </label>
    );   
}

export default WebsiteInput;
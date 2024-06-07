import * as React from "react";

type inputProps = {
    label: string;
    data: string;
    setData: Function;
    placeholder: string;
    error: {email?: boolean};
    setError: Function
  };

const TextInput: React.FC<inputProps> = ({label, data, setData, placeholder, error, setError}) => {
    const oChange = (e:any) => {
        const val = e.target.value;
        const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailReg.test(val)){
            setError(Object.assign(error, {[label]: false}))
        }else {
            setError(Object.assign(error, {[label]: true}))
        }
        setData(val);
    };

   
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input type="email" placeholder={placeholder} value={data} onChange={oChange}  className="input input-bordered w-full" autoComplete="email"/>
            {data && (error && error.email) ? (
                <div role="alert" className="alert alert-error mt-2 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Error! The email format is not correct.</span>
                </div>
            ): ""}
        </label>
    );   
}

export default TextInput;
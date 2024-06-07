import * as React from "react";
import { PhoneInput } from 'react-international-phone';

type inputProps = {
    label: string;
    data: string;
    setData: Function;
  };

const PInput: React.FC<inputProps> = ({label, data, setData}) => {

    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <PhoneInput defaultCountry="us" value={data} onChange={(data) => setData(data)}
            inputProps={{
                required: true,
                className: "bg-slate-300 w-full rounded-r-md h-18 text-slate-900 border-none focus:border-transparent"
            }}/>
        </label>
    );   
}

export default PInput;
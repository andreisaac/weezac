import * as React from "react";

type inputProps = {
    label: string;
    data: string;
    setData: Function;
    placeholder: string;
  };

const TextAreaInput: React.FC<inputProps> = ({label, data, setData, placeholder}) => {
    const oChange = (e:any) => {
        const val = e.target.value;
        setData(val);
    };

    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <textarea placeholder={placeholder} value={data} onChange={oChange} className="input input-bordered w-full h-36 py-2"></textarea>
        </label>
    );   
}

export default TextAreaInput;
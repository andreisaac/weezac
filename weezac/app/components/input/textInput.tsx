import * as React from "react";

type inputProps = {
    label: string;
    data: string;
    setData: Function;
    placeholder: string;
  };

const TextInput: React.FC<inputProps> = ({label, data, setData, placeholder}) => {
    const oChange = (e:any) => {
        const val = e.target.value;
        setData(val);
    };

    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input type="text" placeholder={placeholder} value={data} onChange={oChange} className="input input-bordered w-full" autoComplete={label}/>
        </label>
    );   
}

export default TextInput;
import React from 'react';

const Input = ({label,action,value}) => {
    //console.log(props);

    return (

        <div className="mt-5 ">
            <label className="mb-2" >{label}</label>
            <input type="text" className="form-control" value={value} onChange={(e) => action(label, e)}></input>
        </div>

    )
}
export default Input;
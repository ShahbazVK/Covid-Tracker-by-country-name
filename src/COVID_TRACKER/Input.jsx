import React, { useState } from 'react'
import Api from './Api';
const Input = () => {
    const [country, setCountry] = useState('');
    const [run, setrun] = useState(false);
    const runFunc = () => {
        setrun(false);
        // console.log(country);
        setrun(true);

    }
    return (
        <>
            <input onChange={(event) => {
                setrun(false);
                setCountry(event.target.value)
            }} placeholder='Enter country name' type="text" name='country' />
            <button className=' btn btn-dark' onClick={runFunc}>Check</button>
            {run && <Api country={country} />}
        </>
    )
}
export default Input;
import React from 'react';
import "../css/getStartbtn.css"
const GetStartBtn = ({setGts}) => {
    return (
        <button className='button' onClick={()=>setGts(1)}>
            <span className='spn1'>Get Started</span>
                <span className='spn2'>→</span>
        </button >
    );
}


export default GetStartBtn;

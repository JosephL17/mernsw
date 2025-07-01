
import React from "react";
import { useNavigate } from 'react-router-dom'

const Character = (data) => {
    return(
        <a className='Charcter-name' href="" key={data._id}>{data.name}</a>
    )

}

export default Character;

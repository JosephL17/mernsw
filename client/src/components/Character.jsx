
import React from "react";
import { useNavigate } from 'react-router-dom'

const Character = (data) => {
    return(
        <div>{data.name}</div>
    )

}

export default Character;

import React from 'react';
import { Link } from 'react-router-dom';
import './UnderButton.css';

const UnderButton = (props) =>{
    return(
        <div class="flex">
          <button style ={props.style} 
          onClick={props.onClick}
          id="under_Button"
          className="under_button"
        >     <Link to={props.ulinkname} >{props.ubuttonname}</Link>
          </button>
        </div>
    );
}

export default UnderButton;
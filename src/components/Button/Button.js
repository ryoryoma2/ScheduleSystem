import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = (props) => {
    return (
        <div class="flex">
            <button
                onClick={props.onClick}
                id="Button"
                className={props.className}
            ><Link to={props.linkname}>{props.buttonname}</Link>
            </button>
        </div>

    );
}

export default Button;
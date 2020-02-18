import React, { useState } from "react";
import classNames from 'classnames';
import './Button.css'

const Button = () => {
    const [hidden, setHidden] = useState(false);
    const handleClick = () => {
        setHidden(!hidden);
    };

    return (
        <div>
            <p className={classNames({ hidden: hidden })}>
                Xin chào Viblo
      </p>
            <button onClick={handleClick}>
                Click me
      </button>
        </div>
    );
};
export default Button;
import React from 'react';

import {BiAddToQueue} from 'react-icons/bi'
import classes from './Button.module.css'

const Button = props => {
    // const [show, setShow] = useState(true)
    return <button onClick={() => props.onClick(true)} className={classes.button}><BiAddToQueue /></button>;
}

export default Button;
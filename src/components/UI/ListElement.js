import React, {useState} from 'react';

import Card from './Card';

import {FaRegCheckCircle} from 'react-icons/fa'
import {RiDeleteBin5Line} from 'react-icons/ri'
import classes from './ListElement.module.css'

const ListElement = props => {

    const [checked, setChecked] = useState(props.checked);

    const check = () => {
       if ( checked ){
        setChecked(false)      
       }else{
        setChecked(true);
       } 
       props.onCheck(!checked, props.id)
    }

    return (
        <Card className={classes.element}>
            <p className={checked ? classes.checked : ''}>{props.value}</p>
            <div className={classes.marks}>
            <FaRegCheckCircle onClick={check} className={`${classes.checkmark} ${checked ? classes.markChecked : ''}`} />
            <RiDeleteBin5Line onClick={() => props.onDelet(props.id)} className={classes.deletmark} />
            </div>
        </Card>
    )
}

export default ListElement
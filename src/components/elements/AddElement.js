import React, {useState} from 'react';

import Card from '../UI/Card'
import classes from './AddElement.module.css'

const AddElement = props => {
    const [enteredValue, setEnteredValue] = useState('')
    
    const changeHandler = event =>{
        setEnteredValue(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault();
        props.onAdd(enteredValue);
        props.onHide();

    }

    const visibilityHandler = () => {
        props.onHide()
    }

    
    return (
        <div>
            <div onClick={visibilityHandler} className={`${classes.backdrop}  `}/>
            <Card className={`${classes.template} `}>
                <header className={classes.head}>
                    <h2>Add To Do</h2>
                </header>
                <section className={classes.body}>
                    <form onSubmit={submitHandler}>
                        <label htmlFor='toDO'>Your ToDo:</label>
                        <input onChange={changeHandler} value={enteredValue} id='toDo' type='text'/>
                        <button>Add</button>
                    </form>
                </section>
            </Card>
        </div>
    );
}

export default AddElement
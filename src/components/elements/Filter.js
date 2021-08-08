import React from 'react'

import Card from '../UI/Card'
import classes from './Filter.module.css'

const Filter = props => {

    return (
        <Card className={classes.filter}>
            <select value={props.selected} onChange={e => props.filtering(e.target.value)}>
                <option value = 'all'> All</option>
                <option value ='completed'>Completed</option>
                <option value='active'>Active</option>
            </select>
            <div className={classes.counter}>{props.num} Items</div>
        </Card>
    )
}

export default Filter
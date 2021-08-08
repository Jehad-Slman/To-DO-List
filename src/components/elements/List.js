import React, {useState} from 'react'

import Card from '../UI/Card'
import ListElement from '../UI/ListElement'
import Filter from './Filter'
import classes from './List.module.css'

const List = props => {
     
    const [value, setValue] = useState('all')


    const filterdItems = props.elements.filter (e => {
        if (value === 'all'){
            return e;
        }else if ( value === 'completed') {
            return e.checked ? e : null;
        }else if (value === 'active') {
            return !e.checked ? e : null ;
        }
    })


    const viewItems = () => {
       const t = filterdItems.map(element => {
            return (
                <ListElement onCheck={(e,i) =>props.checkHandler(e,i)} onDelet={() => props.deletElement(element.id)} key={element.id} id={element.id} value={element.value}/>
            )
        })
        return t
    }

    const filterHandler = e => {
        setValue(e);
    }

    return (
        <Card className={classes.list}>
            <header>
                <h2>Your List</h2>
            </header>
            <Filter  num ={filterdItems.length}selected ={value} filtering= {filterHandler}/>
            <section className={classes.elements}>
                {filterdItems.length > 0 ? viewItems() : <p>There is nothing to do</p>}
            </section>
        </Card>
    )
}

export default List
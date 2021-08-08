import React, {useState} from 'react';
import Button from './components/UI/Button'
import classes from './App.module.css'
import AddElement from './components/elements/AddElement'
import List from './components/elements/List';

function App() {

  const [show, setShow] = useState();
  const [elements, setElements] = useState([]);

  const showAddElement = state => {
    setShow(state)
  }

  const hideAddElement = () => {
    setShow()
  }

  const addElement = element => {
    setElements(prevState => {
      return ([ ...prevState,
             { id: elements.length,
               value: element,
               checked : false
        }])
    })
  }

  const delet = id => {
    const newList = [...elements];
    newList.forEach((e,i) => {
      if (e.id === id){
        newList.splice(i,1)
      }
    })
    setElements(newList);
  }

  const check = (e,i) => {
    elements[i].checked = e;
  }


  return (
    <div className={classes.cover}>
      <h1 className={classes.title}>manage your day</h1>
      <h2 className={classes.title}>With Our ToDo List</h2>
      <Button onClick={showAddElement} />
      {show && <AddElement onAdd={addElement} onHide={hideAddElement}/>}
      <List  checkHandler={check} deletElement={delet} elements={elements} />
    </div>
  )
}

export default App

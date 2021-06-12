import React, { useState } from 'react';
import Todolist from './Todolist';

const App=()=>{

  const [inputItem, setinputItem]=useState('');
  const [items,setItems] =useState([]);

const eventItems=(event)=>{
 setinputItem(event.target.value);
};

const listofItem=()=>{
setItems((oldItems)=>{
  return [...oldItems,inputItem];
});
setinputItem("");
};
const deleteItem=(id)=>{
  console.log('deleted');

  setItems((oldItems)=>{
    return oldItems.filter((arrElem,index)=>{
      return index !== id;
    });
  });
}

return(
  <>
  <div className="main_div">
  <div className="center_div">
    <br />
    <h1>ToDo List</h1>
    <br />
    <input type="text" placeholder="Enter A Items" value={inputItem} onChange={eventItems} />
    <button onClick={listofItem}>+</button>
    <ol>
      {/* <li>
        {inputItem}
      </li> */}
      {items.map((curItem,index)=>{
        return <Todolist 
           text={curItem}
           key={index}
           id={index}
           onSelect={deleteItem}
         />;
      })}
    </ol>
  </div>
  </div>
  </>
);
};

export default App;
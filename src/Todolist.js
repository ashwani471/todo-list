import React from 'react';

const Todolist=(props)=>{


return (
<>
<div className='todo_style'>
{/* <i class="fa fa-times-circle"></i> */}
<button className="cross" onClick={()=>{
props.onSelect(props.id);}
}>x</button>
<li>{props.text}</li>
 </div>
  </>  
);
};

export default Todolist;
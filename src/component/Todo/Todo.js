import React,{useState} from 'react'
import './Todo.css'

function Todo() {

    const [inputList,setInputList] =useState("Add Task");
    const [items,setItems]=useState([]);

    const listItems =() =>
    {
        setItems((olditems) =>
        {
            return [...olditems,inputList];
        }
        )
    }

    const deleteItems =(id)=>{
        setItems((olditems) =>
        {
            return olditems.filter((arrelem,index) =>
        {
            return index != id;
        })
        })
    }
  return (
    <>
        <div >
             <input className='inputBox' type="text" placeholder="Enter Task here"  onChange={(event)=>{setInputList(event.target.value)}}/>
             <button onClick={listItems} className='btn'>ADD Task..</button>
        </div>

        <ol >
         { items.map((e,index) =>
           { return (
             <div id='itm' >
            <li >  {e}  </li>
            <button  onClick={deleteItems} className='btn'>{index}Delete</button>
            </div>
           )
             }
         ) }
       </ol>
    </>
  )
}

export default Todo
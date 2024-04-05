import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export function ToDoApp(){
    let [list, setList]=useState([{task:"food", id:uuidv4(), isDone:false}]);
    let [listTask, setListTask]=useState("");

    let addList = () =>{
        setList([...list, {task:listTask, id:uuidv4(), isDone:false}]);
        setListTask("");
    }
    let updateList=(event)=>{
        setListTask(event.target.value);
    }
    let deleteList=(id)=>{
        setList((list.filter((list)=>{
            if(list.id!=id){
                return list
            }
        })))
    }

    let upperCaseList = () =>{
        setList((list.map((list)=>{
            return {
                ...list,
                task:list.task.toUpperCase(),
            }
        })))
    }

    let uppercaseOneList = (id) =>{
        setList((list.map((list)=>{
            if(list.id==id){
                return {
                    ...list,
                    task:list.task.toUpperCase()
                }
            }else{
                return list;
            }
        })))
    }

    let markAsDone=(id)=>{
        setList((list.map((list)=>{
            if(list.id==id){
                return {
                    ...list,
                    isDone:true,
                }
            }else{
                return list
            }
        })))
    }

    let markAsDoneAll=()=>{
        setList((list.map((list)=>{
            return {
                ...list,
                isDone:true,
            }
        })))
    }

    return (
        <div>
            <input type="text" placeholder="add list" onChange={updateList} value={listTask}/>
            <br /> <br />
            <button onClick={addList}>Add List</button>
            <h2>ToDo List</h2>
            <hr />
            <ul>
                {list.map((list)=>(
                    <li key={list.id}>
                        <span style={list.isDone ? {textDecoration:"line-through"}: {}}>{list.task}</span>
                        &nbsp;
                        <button onClick={()=> deleteList(list.id)}>Delete</button>
                        &nbsp; &nbsp;
                        <button onClick={()=> uppercaseOneList(list.id)}>UpperCase Task</button>
                        &nbsp; &nbsp;
                        <button onClick={()=> markAsDone(list.id)}>Mark as Done</button>
                    </li>
                ))}
            </ul>
            <hr />
            <button onClick={upperCaseList}>UpperCase All</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={markAsDoneAll}>Mark as Done All</button>
        </div>
    )
}
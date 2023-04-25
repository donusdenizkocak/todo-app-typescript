
interface IListItem{
 item:TodoType; 
 toggleTodo:ToggleFn;
 deleteTodo:DeleteFn;
}

 const TodoListItem :React.FC<IListItem> = ({item,toggleTodo,deleteTodo}) => {
  return (
   <li >
    {item.isDone ? <p className="checked" onClick={()=>toggleTodo(item)}>{item.task}</p>
   :<p>{item.task}</p>}
    <span className="task-icons" onClick={()=>toggleTodo(item)} >✖️</span>
   </li>
  )
}
export default TodoListItem
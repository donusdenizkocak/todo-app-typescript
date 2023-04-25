
interface IListItem{
 item:TodoType; 
 toggleTodo:ToggleFn;
}

 const TodoListItem :React.FC<IListItem> = ({item,toggleTodo}) => {
  return (
   <li onClick={()=>toggleTodo(item)}>
    {item.isDone ? <p className="checked">{item.task}</p>
   :<p>{item.task}</p>}
    <span className="task-icons"  >✖️</span>
   </li>
  )
}
export default TodoListItem
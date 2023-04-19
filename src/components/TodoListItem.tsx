
interface IListItem{
 item:TodoType; 
}

 const TodoListItem :React.FC<IListItem> = ({item}) => {
  return (
   <li>
   {item.isDone ? <p className="checked">{item.task}</p>
   : <p>{item.task}</p>}
    <span >x</span>    {/*BUNA BAK  x resmi*/}
   </li>
  )
}
export default TodoListItem
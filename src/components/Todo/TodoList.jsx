import React, { useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
   //useEffect in functional components is the motsvarighet to componenetDidMount in class components
   useEffect(() => {
      console.log('component TodoList rerendered');
   }, []);

   return (
      <>
         <table id='tableTodo' className='table table-bordered table-hover'>
            <thead>
               <tr className='table-info'>
                  <th>Date</th>
                  <th>Title</th>
                  {/* <th>Description</th> */}
                  <th>Assigned to</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
               {props.todolist.map((todo) => (
                  <TodoItem
                     key={todo.id}
                     todo={todo}
                     itemClick={props.todoClick}
                  />
               ))}
            </tbody>
         </table>
      </>
   );
};

export default TodoList;

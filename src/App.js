import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoListItem from './components/TodoListItem';


const App = () => {
  return ( <TodoTemplate>
    <TodoInsert/>
    <TodoList />
    </TodoTemplate>
  );
};

export default App;

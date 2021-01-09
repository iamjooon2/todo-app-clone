import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {  

  const [todos, setTodos ] = useState([
    {
      idx: 1,
      text: '리액트 기초 알아보기',
      chekced: true,
    },
    {
      idx: 2,
      text: '파이썬으로 자료구조 공부하기',
      chekced: true,
    },
    {
      idx: 3,
      text: '자기 전 커밋하기',
      chekced: false,
    },

  ]);

  //고유값으로 사용될 idx, ref를 이용해 변수 담기

  const nextId = useRef(4);
  
  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo)); //concat 이용 새로 뿌리기
      nextId.current +=  1;
    },
    [todos],
  );

  return ( <TodoTemplate>
    <TodoInsert onInsert = {onInsert} />
    <TodoList todos = {todos} />
    </TodoTemplate>
  )
};

export default App;
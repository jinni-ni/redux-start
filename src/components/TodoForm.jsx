import { useRef } from "react";
// import useReduxDispatch from "../hooks/useReduxDispatch";
import { addTodo } from "../redux/modules/todos";
import { connect } from "react-redux";

export default function TodoForm({ add }) {
  const inputRef = useRef();
  //   const dispatch = useReduxDispatch();
  return (
    <div>
      <input ref={inputRef}></input>
      <button onClick={click}>추가</button>
    </div>
  );
  function click() {
    //dispatch(addTodo(inputRef.current.value));
    add(inputRef.current.value);
  }
}

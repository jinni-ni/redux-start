// import useReduxState from "../hooks/useReduxState";
// import { connect } from "react-redux";

export default function TodoList({ todos }) {
  //   const state = useReduxState();
  return (
    <ul>
      {todos.map((todo) => {
        return <li>{todo.text}</li>;
      })}
    </ul>
  );
}

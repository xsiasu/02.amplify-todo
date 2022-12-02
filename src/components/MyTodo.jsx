import React from "react";
import { listTodos } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
const MyTodo = () => {
  const [todos, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState();

  async function fetchTodos() {
    setIsLoading(true);
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      const todos = todoData.data.listTodos.items;

      setTodo(todos);
      setApiError(null);
    } catch (err) {
      console.log("error fetching todos");
      setApiError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  if (isLoading) {
    return "Loading...";
  }
  return (
    <div>
      {todos.map((myTodo, index) => (
        <div key={index}>
          {index}
          {myTodo.name}
          {myTodo.description}
        </div>
      ))}
    </div>
  );
};

export default MyTodo;

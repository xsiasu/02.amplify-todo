import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Todo from "../components/Todo";
import MyTodo from "../components/MyTodo";
const Home = () => {
  return (
    <div>
      <Header />
      <Todo />
      <MyTodo />
    </div>
  );
};

export default Home;

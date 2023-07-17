import React, { useState } from "react";
import icon from "./icon.png";
import image from "./shop.jpg";
import imageTwo from "./man.jpg";
import { useNavigate } from "react-router-dom";

const ShoppingList = () => {
  const [userInput, setUserInput] = useState("");
  const [groceryList, setGroceryList] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  const navigate = useNavigate();

  const onChangeEvent = (e) => {
    setUserInput(e.target.value);
  };

  const addItem = (input) => {
    if (input === "") {
      alert("Please enter an item");
    } else {
      setGroceryList([...groceryList, input]);
      setUserInput("");
    }
  };

  const deleteItem = () => {
    setGroceryList([]);
    setCompletedTask([]);
  };

  const crossedWord = (index) => {
    const newList = [...groceryList];
    // const completed = [...completedTask];
    newList[index] = <s>{newList[index]}</s>;
    setCompletedTask([...completedTask, newList[index]]);
    newList.splice([index], 1);
    setGroceryList(newList);
    console.log("completedTask", completedTask);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button onClick={() => navigate("/")} className="home">
            Home
          </button>
          <img src={image} alt="foto" width="200px" />
        </div>
      </div>

      <div className="container">
        <h1>Shopping List</h1>
      </div>

      <form onSubmit={onFormSubmit}>
        <div className="container">
          <input
            type="text"
            placeholder="What do you want to buy?"
            onChange={onChangeEvent}
            value={userInput}
          />
        </div>

        <div className="container">
          <button className="btn add" onClick={() => addItem(userInput)}>
            Add
          </button>
        </div>

        <ul>
          {groceryList.map((item, index) => (
            <li onClick={() => crossedWord(index)} key={index}>
              <img src={icon} width="40px" alt="icon" /> {item}
            </li>
          ))}
        </ul>
        <h2>Completed Tasks</h2>
        {completedTask.map((item, index) => (
          <li>
            <img src={icon} width="40px" alt="icon" /> {item}
          </li>
        ))}
        <div className="container">
          <button className="btn delete" onClick={deleteItem}>
            Delete
          </button>
        </div>
      </form>
      <div className="container">
        <img src={imageTwo} alt="foto" width="200px" />
      </div>
    </div>
  );
};

export default ShoppingList;

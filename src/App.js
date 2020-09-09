import React, { Component } from "react";
import Todoinput from "./components/todoinput";
import TodoList from "./components/todoList";
import CompletedList from "./components/completedList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false,
    completedItems: [],
  };
  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    console.log(this.state.item);
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: this.state.id + 1,
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({ completedItems: [] });
  };
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id != id);
    this.setState({
      items: filteredItems,
    });
  };

  handleStatus = (id) => {
    const completedItem = this.state.items.find((item) => item.id === id);
    const filteredItems = this.state.items.filter((item) => item.id != id);
    const updateCompletedItemsList = [
      ...this.state.completedItems,
      completedItem,
    ];
    this.setState({
      items: filteredItems,
      completedItems: updateCompletedItemsList,
      editItem: false,
    });
    console.log(completedItem);
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h2 className="text-capitalize text-center">My ToDo List</h2>
            <Todoinput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleStatus={this.handleStatus}
            />
            <CompletedList
              completedItemsList={this.state.completedItems}
              clearList={this.clearList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

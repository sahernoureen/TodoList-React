import React, { Component } from "react";
import TodoItem from "./todoItem";
export default class TodoList extends Component {
  render() {
    const {
      items,
      clearList,
      handleDelete,
      handleEdit,
      handleStatus,
    } = this.props;
    return (
      <div className="card card-body my-3">
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center"> todo List</h3>

          {items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
                handleStatus={() => handleStatus(item.id)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

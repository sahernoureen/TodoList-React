import React, { Component } from "react";
import CompletedItems from "./completedItems";
export default class CompletedList extends Component {
  render() {
    const { completedItemsList, clearList } = this.props;
    return (
      <div className="card card-body my-3">
        <ul className="list-group my-5">
          <h4 className="text-capitalize text-center"> Completed Todo List </h4>
          {completedItemsList.map((item) => {
            return <CompletedItems itemDone={item.title} />;
          })}
          <button
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5"
            onClick={clearList}
          >
            Clear Completed List
          </button>
        </ul>
      </div>
    );
  }
}

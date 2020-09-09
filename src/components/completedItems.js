import React, { Component } from "react";

export default class CompletedItems extends Component {
  render() {
    const { itemDone, clearList } = this.props;

    return (
      <li className="list-group-item text-capitalize d-inline-flex justify-content-between my-2">
        {itemDone}
      </li>
    );
  }
}

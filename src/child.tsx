import * as React from "react";
import Data from "./product";
export default function ChildComp(props: { itemList: Data[]; }) {
  var rows = props.itemList;

  return rows.map(item => <h1>{item.name}</h1>);
}

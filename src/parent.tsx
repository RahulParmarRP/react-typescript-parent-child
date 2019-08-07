import * as React from "react";
import Data from "./product";
import ChildComp from "./child";
var products: Data[] = [
  {
    id: 1,
    name: "pants"
  },
  {
    id: 2,
    name: "bottle"
  }
];

class MainContent extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    products: products
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            products: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    return (
      <div>
        <h1>Parent - Product List</h1>
        <h2>Child - products</h2>
        <div>
          <ChildComp itemList={this.state.products} />
        </div>
      </div>
    );
  }
}
export default MainContent;

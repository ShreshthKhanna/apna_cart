import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: "",
      productPrice: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const name = this.state.productName.trim();
    const price = Number(this.state.productPrice);

    if (name === "" || price <= 0) {
      alert("Please enter a valid product name and price.");
      return;
    }

    this.props.addItem(name, price);

    this.setState({
      productName: "",
      productPrice: "",
    });
  };

  render() {
    return (
      <form className="row mb-5 align-items-end" onSubmit={this.handleSubmit}>
        <div className="mb-3 col-md-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>

          <input
            type="text"
            className="form-control"
            id="inputName"
            name="productName"
            value={this.state.productName}
            onChange={(e) => {
              this.setState({
                productName: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3 col-md-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>

          <input
            type="number"
            className="form-control"
            id="inputPrice"
            name="productPrice"
            min="1"
            value={this.state.productPrice}
            onChange={(e) => {
              this.setState({
                productPrice: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3 col-md-4">
          <button type="submit" className="btn btn-primary w-100">
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default AddItem;

import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import React, { useState } from "react";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem.js";

function App() {
  const products = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];

  const [productList, setProductList] = useState(products);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    const newProductList = [...productList];

    newProductList[index] = {
      ...newProductList[index],
      quantity: newProductList[index].quantity + 1,
    };

    setProductList(newProductList);
    setTotalAmount(totalAmount + newProductList[index].price);
  };

  const decrementQuantity = (index) => {
    const newProductList = [...productList];

    if (newProductList[index].quantity > 0) {
      newProductList[index] = {
        ...newProductList[index],
        quantity: newProductList[index].quantity - 1,
      };

      setProductList(newProductList);
      setTotalAmount(totalAmount - newProductList[index].price);
    }
  };

  const resetQuantity = () => {
    const newProductList = productList.map((product) => {
      return {
        ...product,
        quantity: 0,
      };
    });

    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    const removedProduct = productList[index];

    const newTotalAmount =
      totalAmount - removedProduct.quantity * removedProduct.price;

    const newProductList = productList.filter(
      (product, productIndex) => productIndex !== index
    );

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    const newProduct = {
      name: name,
      price: Number(price),
      quantity: 0,
    };

    setProductList([...productList, newProduct]);
  };

  return (
    <>
      <Navbar />

      <main className="container mt-5">
        <AddItem addItem={addItem} />

        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>

      <Footer
        totalAmount={totalAmount}
        resetQuantity={resetQuantity}
      />
    </>
  );
}

export default App;
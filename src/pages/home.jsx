import React from "react";
import Cards from "../components/cards";

import { products } from "../constants/data";

const item = products.map((item) => item);

const Home = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <Cards
          key={product.id}
          image={[product.image]}
          title={product.title}
          desc={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Home;

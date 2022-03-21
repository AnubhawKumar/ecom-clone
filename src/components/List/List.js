import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
// import data from '../../localDataBase/localDB';
import "./List.css";

const List = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    fetch("http://demo4500454.mockable.io/product")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.products);
      });
  }, []);


  return (
    <div className="each-item-wrapper">
      {data && data.map((eachItem,index) => (
          <Product item ={eachItem} key={index} />
      ))}
    </div>
  );
};

export default List;

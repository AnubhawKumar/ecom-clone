import React, { useEffect, useState } from "react";
import data from "../../localDataBase/localDB";
import Product from "../Product/Product";
// import data from '../../localDataBase/localDB';
import "./List.css";

const List = () => {

  const[result,setResult] = useState(data);
  // const [data, setData] = useState(null);


  // useEffect(() => {
  //   fetch("http://demo4500454.mockable.io/product")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       setData(result.products);
  //     });
  // }, []);


  return (
    <div className="each-item-wrapper">
      {result && result.products.map((eachItem,index) => (
          <Product item ={eachItem} key={index} />
      ))}
    </div>
  );
};

export default List;

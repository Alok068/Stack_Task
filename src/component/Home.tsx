import React from "react";
import "./Home.css";
import { proDetail,catDetail} from "../Data";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";


const Home = () => {
 
  const dispatch = useDispatch();

  const send = (e:any) => {
    //console.log(e);
    dispatch(ADD(e));
  };

  return (
    <>
        <div className="top_container">
          {catDetail.map((product_cat) => (
            <div key={product_cat.id} className="product_title">
              <img src={product_cat.cat_image} alt="All offer" />
              <h5>{product_cat.cat_title}</h5>
            </div>
          ))}
        </div>

        <div className="container">
          {proDetail.map((product) => (
            <div key={product.id}>
              <div className="main_card">
                <img src={product.pro_image} alt="T-shirt" />
                <div className="description_card">
                  <h5>{product.pro_name}</h5>
                  <a href="" target="_blank" title="Men Regular Fit Printed">
                    {product.pro_description}
                  </a>
                  <p>
                    <strong>Price :</strong> {`${product.pro_price}`}
                  </p>
                  <button onClick={()=> send(product)}>Add to Card </button> 
                </div>
              </div>
            </div>
          ))}
        </div>
      
    
    </>
  );
};

export default Home;

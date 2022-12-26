import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";
import "./Cart.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { HiOutlineMinusCircle } from "react-icons/hi";

const Cart = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state: any) => state.cartreducer.carts);
  // console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e: any) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  // Add Data From Here

  const send = (e: any) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  const dlt = (id: any) => {
    dispatch(DLT(id));
    history("/cart");
  };

  // Remove Data From Here
  const remove = (item: any) => {
    dispatch(REMOVE(item));
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      {getdata.map((e: any) => {
        return (
          <>
            <div key={e.id}>
              <div className="cart_container">
                <div className="cart_image">
                  <img src={e.pro_image} alt="T-shirt" />
                </div>
                <div className="cart_description">
                  <h5>{e.pro_name}</h5>
                  <a href="" target="_blank" title="NB Nicky Boy">
                    {e.pro_description}
                  </a>
                  <p>
                    <strong>Price :</strong> {e.pro_price}
                  </p>
                  <div className="cart_quantity">
                    <HiOutlineMinusCircle
                      style={{ fontSize: "30px", cursor: "pointer" }}
                      onClick={e.qnty <= 1 ? () => dlt(e.id) : () => remove(e)}
                    />
                    <span>{e.qnty}</span>
                    <IoAddCircleOutline
                      style={{ fontSize: "30px", cursor: "pointer" }}
                      onClick={() => send(e)}
                    />
                  </div>
                </div>
                <div className="cart_total">
                  <strong style={{ marginRight: "5px" }}>Total : </strong>
                  <strong>{e.qnty * e.pro_price} Rs</strong>
                </div>
                <div className="cart_buy">
                  <button>Proceed to buy</button>
                  <button>Continue Shopping</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Cart;

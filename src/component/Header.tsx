import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BsTruck, BsFillCartPlusFill } from "react-icons/bs";
import {FaTrashAlt } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import Table from "react-bootstrap/esm/Table";
import { useDispatch, useSelector } from "react-redux";
import { FcSearch } from "react-icons/fc";
import { DLT } from "../redux/actions/action";

function Header() {
  const [price, setPrice] = useState(0);
 // console.log(price);

  const [anchorEl, setAnchorEl] = useState(null);

  const getdata = useSelector((state: any) => state.cartreducer.carts);
  //console.log(getdata);

useEffect(()=>{
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("carts")|| "[]")
  console.log(cartFromLocalStorage);
  
})
useEffect(()=>{
  localStorage.setItem("carts",JSON.stringify(getdata))
})
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const dlt = (id: any) => {
    dispatch(DLT(id));
  };

  
  const total = () => {
    let price = 0;
    getdata.map((e:any, k:any) => {
      price = e.pro_price * e.qnty + price;
    });
    setPrice(price);
  };

  
  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <div className="header_back">
        <div className="logo">
          <Link to="/">
            <BsTruck style={{ fontSize: "4rem", color: "white" }} />
          </Link>
          <h6>Apna Store</h6>
          <div className="search_bar">
            <input type="search" placeholder="Search For Product here..." />
            <FcSearch className="search" />
          </div>
        </div>
        <Badge
          badgeContent={getdata.length}
          color="error"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <BsFillCartPlusFill
            style={{ fontSize: "2.5rem", color: "white", cursor: "pointer" }}
          />
        </Badge>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div className="card_details" style={{ width: "20rem",paddingLeft: 15}}>
              <Table>
                <tbody>
                  {getdata.map((e: any) => {
                   // console.log(e)
                    return (
                      <>
                        <tr>
                          <td>
                            <Link to={`/cart`} onClick={handleClose}>
                              <img
                                src={e.pro_image}
                                style={{ width: "5rem", height: "5rem" }}
                                alt=""
                              />
                            </Link>
                          </td>
                          <td style={{paddingLeft:"15px"}}>
                            <p>{e.pro_name}</p>
                            <p>Price : ₹{e.pro_price}</p>
                            <p>Quantity : {e.qnty}</p>
                          </td>

                          <td
                            className="mt-5"
                            style={{
                              color: "#ad0202",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(e.id)}
                          >
                            <FaTrashAlt style={{paddingLeft:"2rem"}}/>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total :₹ {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "18rem", padding: 10, position: "relative"}}>
                <p style={{ fontSize: 22 , textAlign:"center"}}>Your carts is empty</p>
            </div>
          )}
        </Menu>
      </div>
    </>
  );
}

export default Header;

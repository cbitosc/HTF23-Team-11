import React from "react";
import { FaCalendarAlt, FaCartArrowDown, FaHome } from "react-icons/fa";
import "./CartSection.css";
import { useParams } from "react-router-dom";
// import Added from "../dashboard/FoodCard";

// console.log(Added);
const CartSection = () => {
  // let { data } = props.location.state.data;
  return (
    <div className="cartContainer" style={{flexDirection:"column"}}>
      <div>
      Hello
      {/* {data}
      {console.log({data})} */}
        {/* {Added.map((item) => (
          <FoodCard
            key={item._id}
            name={item.foodName}
            quantity={item.quantity}
            date={item.expiryDate}
            address={item.address}
            tag={item.foodTag}
          />
        ))} */}
      </div>
      <div height="50vh">
        <button class="btn-nav">CheckOut</button>
      </div>
    </div>

  );
};

export default CartSection;

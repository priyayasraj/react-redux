import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = () => {
  const noOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div className="ui container">
      <h3>Number of icecream left :{noOfIceCreams}</h3>
      <button className="ui button" onClick={() => dispatch(buyIceCream())}>
        Buy Icecream
      </button>
    </div>
  );
};

export default IceCreamContainer;
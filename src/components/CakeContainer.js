import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { buyCake } from "../redux";
const CakeContainer = () => {

  const noOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div className = "ui container">
      <h3>Number of cakes left :{noOfCakes}</h3>
      <button className= "ui button" onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
};


export default CakeContainer;

import React from "react";
import "./Card.css";

const Card = (props: { data: any }) => {
  const name = props.data;

  return <button>{name}</button>;
};

export default Card;

import React from "react";

function Transaction({description, date, category, amount}) {

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
} 

export default Transaction;
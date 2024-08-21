import React from "react";

function Transaction({ transaction }) {
  const { date, description, category, amount } = transaction;
  return (
    //This updates the table dynamically
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
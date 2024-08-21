import React, { useState } from "react";

function AddTransactionForm({ AddTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.date ||
      !formData.description ||
      !formData.category ||
      !formData.amount
    ) {
      alert("Please fill out all fields.");
      return;
    }

    const newTransaction = {
      ...formData,
      amount: parseFloat(formData.amount), // Ensure amount is a number
    };

    try {
      await AddTransaction(newTransaction); // Call AddTransaction
      setFormData({
        date: "",
        description: "",
        category: "",
        amount: "",
      });
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
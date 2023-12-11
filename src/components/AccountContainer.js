import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer () {
    const [transactionList, setTransactionsList] = useState([]);

    const fetchTransactionList = async () => {
      try {
        const response = await fetch("http://localhost:8001/transactions");
        const data = await response.json();
     
        setTransactionsList(data);
        } 
        catch (error) 
        {
            console.log("Error fetching transaction list:", error);
        }
    };
  
    useEffect(() => {
       fetchTransactionList();
    }, []);

   
    const searchTransaction = (search) => {
      const filteredTransactions = search
        ? transactionList.filter((transaction) =>
            transaction.description.toLowerCase().includes(search.toLowerCase())
          )
        : transactionList;
      setTransactionsList(filteredTransactions);
    };
    const addTransaction = (transaction) => {
      const updatedTransactionList = [...transactionList, transaction];
      setTransactionsList(updatedTransactionList);
    };

 
    return (
      <div>
        <Search searchTransaction={searchTransaction} />
        <AddTransactionForm addTransaction={addTransaction} />
        <TransactionsList transactions={transactionList}/>
      </div>
    );
};

export default AccountContainer;
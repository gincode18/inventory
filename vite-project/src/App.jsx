import React, { useState, useEffect } from "react";
import axios from "axios";

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);
  const [form, setForm] = useState({
    name: '',
    quantity: '',
    price: '',
    id: ''
  });
 
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const postreq = async () => {
 
    
        
    const response = await fetch('https://inventory-rzhx.onrender.com/api/inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        name:form.name,
        quantity:form.quantity,
        price:form.price

      }),
    });

   

   
       
      
    
  };
  const updreq = async () => {
 
    
        
    const response = await fetch(`https://inventory-rzhx.onrender.com/api/inventory/${form.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        name:form.name,
        quantity:form.quantity,
        price:form.price

      }),
    });

   

   
       
      
    
  };
  const delreq = async () => {
 
    
        
    const response = await fetch(`https://inventory-rzhx.onrender.com/api/inventory/${form.id}`, {
      method: 'DELETE'
      
    });

   

   
       
      
    
  };
  useEffect(() => {
    axios.get("https://inventory-rzhx.onrender.com/api/inventory").then((response) => {
      setInventory(response.data);
    });
    
  });

  return (
    <div style={{padding: "20px"}}>
      <h1>Inventory System</h1>
      <table style={{borderCollapse: "collapse", width: "100%", marginTop: "20px"}}>
        <thead>
          <tr>
            <th style={{padding: "10px"}}>ID</th>
            <th style={{padding: "10px"}}>Name</th>
            <th style={{padding: "10px"}}>Price</th>
            <th style={{padding: "10px"}}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item._id}>
              <td style={{padding: "10px"}}>{item._id}</td>
              <td style={{padding: "10px"}}>{item.name}</td>
              <td style={{padding: "10px"}}>{item.price}</td>
              <td style={{padding: "10px"}}>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{marginTop: "20px"}}>
        <form>
          <label htmlFor='name' className="id">Name:</label>
          <input
            name="name"
            type="text" 
            value={form.name}
            onChange={handleChange}
            required
          />
        </form>
        <form>
          <label htmlFor='quantity' className="id">Quantity:</label>
          <input
            name="quantity"
            type="text" 
            value={form.quantity} 
            onChange={handleChange}
            required
          />
        </form>
        <form>
          <label htmlFor='price' className="id">Price:</label>
          <input
            name="price"
            type="text" 
            value={form.price}
            onChange={handleChange}
            required
          />
        </form>
        <button className="butt" type="button" onClick={postreq}>Add Item</button>
        <form className="id2">
          <label htmlFor='id' className="id">ID:</label>
          <input
            name="id"
            type="text" 
            value={form.id}
            onChange={handleChange}
            required
          />
        </form>
        <button type="button" className="butt" onClick={delreq}>Delete Item</button>
        <button type="button" onClick={updreq}>Update Item</button>
      </div>
    </div>
  );
          }

export default InventoryList;

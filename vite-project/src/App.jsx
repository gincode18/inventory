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
 
    
        
    const response = await fetch('http://localhost:3000/api/inventory', {
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
 
    
        
    const response = await fetch(`http://localhost:3000/api/inventory/${form.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        name:form.name,
        quantity:form.quantname=vishity,
        price:form.price

      }),
    });

   

   
       
      
    
  };
  const delreq = async () => {
 
    
        
    const response = await fetch(`http://localhost:3000/api/inventory/${form.id}`, {
      method: 'DELETE'
      
    });

   

   
       
      
    
  };
  useEffect(() => {
    axios.get("http://localhost:3000/api/inventory").then((response) => {
      setInventory(response.data);
    });
    
  }, []);

  return (
    <div>
      <h1>Inventory List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>

            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>

              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
      <form>
      <label htmlFor='name'>name
        <input
        name="name"
          type="text" 
          value={form.name}
          onChange={handleChange}
          required

        />
      </label>
    </form>
    <form>
      <label>quantity
        <input
        name="quantity"
          type="text" 
          value={form.quantity}
          onChange={handleChange}
          required

        />
      </label>
    </form>
    <form>
      <label>price
        <input
        name="price"
          type="text" 
          value={form.price}
          onChange={handleChange}
          required

        />
      </label>
    </form>
    <button type="button" onClick={postreq}>POST</button>
    <form>
      <label>id
        <input
        name="id"
          type="text" 
          value={form.id}
          onChange={handleChange}
          required

        />
      </label>
    </form>
    <button type="button" onClick={delreq}>DEL</button>
    <button type="button" onClick={updreq}>UPDATE</button>

      </div>
    </div>
  );
};

export default InventoryList;

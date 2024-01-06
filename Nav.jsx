import React, { useEffect, useState } from 'react';
import { details } from './Data';


const Nav = ({searchItem,setSearchItem}) => {

  // const[searchitem, setSearchitem] = useState("");
  // const[newlist, setnewlist] = useState([]);


  function handleChange(event) {
    setSearchItem(event.target.value);
  }




  // let filteredData = details.filter((curItem) => {
  //   if (searchitem === "") {
  //     return curItem;
  //   } else if (curItem.Product_brand.toLowerCase().includes(searchitem.toLowerCase())) {
  //     return curItem;
  //   }
  //   return null; // Include a default return in case none of the conditions are met
  // });
  // useEffect(()=>{
  //   setnewlist(filteredData);
  // },[searchitem])

  return (
    <>
      <nav className="nav">
        <h1 className="shoe">ShoeCart </h1>
        <input
          type="search"
          placeholder="Search For Products"
          value={searchItem}
          onChange={(e)=>handleChange(e)} />

        
        <p className="search"> 🔍</p>
        <h4 className="cart"> Cart </h4>
        <h4 className="wish">Wishlist</h4>
        <h4 className="help">HelpCenter</h4>
        <h4 className="profile"> 🙎‍♂️ David Backham</h4>


       
      </nav>
    </>
  );
};

export default Nav;

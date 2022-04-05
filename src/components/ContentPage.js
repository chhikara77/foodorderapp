import React from "react";
import { useState,useEffect } from "react";
import "../styles/ContentPage.css";
import {data} from "../assets/data";
const ContentPage = () => {
 // data.map((ele)=>console.log(ele))
  const categoryName = [
    "By Season",
    "By Dietary Preference",
    "By Meal",
    "Sweet Things",
  ];
  const filterObject = [
    ["autumn", "spring", "summer", "winter"],
    ["dairy free", "egg free", "gluten free", "healthy", "quick and easy"],
    ["breakfast", "dessert", "dinner", "holidays", "snacks and appetizers"],
    [
      "fruit dessert",
      "chocolate",
      "cakes and quick breads",
      "cookies and bars",
      "pies and tarts",
      "ice cream and popsicles",
    ],
  ];
  const response=[];
const [fdata,setchecked] = useState(data)
const [userinfo, setUserInfo] = useState(response);
  function handlechange(e) {
    const { value, checked } = e.target;
    const { languages } = userinfo;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo(
        [...userinfo, value]
  
      );
    }
  
    // Case 2  : The user unchecks the box
    else {
      setUserInfo(
        [...userinfo.filter((e)=>e !== value)]
      );
    }
    console.log("hi",userinfo);
  }
  function filterfunction(x){
     
  }
  useEffect(() => {
  }, [userinfo]);
  return (
    <div className="contentpage-container">
      <div className="sidebar">
        <div className="sidebar-heading">
          <p className="heading">Filter Recipes:</p>
          <p className="heading-text">
            Check multiple boxes below to narrow recipe search results
          </p>
        </div>
        {categoryName.map((ele, index) => {
          return (
            <>
              <p key={index} className="filter-heading">{ele}:</p>
              <form key={ele} className="filter-form" action="">
              {filterObject[index].map((element,ind) => {
                return (
                  
                    <div key={element} className="checkbox-box">
                      <input onChange={handlechange} type="checkbox" value={element} />
                      <label>{element}</label>
                    </div>
                  
                );
              })}
              </form>
            </>
          );
        })}
        <p className="filter-heading">By Season:</p>
        <form className="filter-form" action="">
          <div>
            <input type="checkbox" value="" />
            <label>Autumn(88)</label>
          </div>
          <div>
            <input type="checkbox" value="" />
            <label>Spring(33)</label>
          </div>
          <div>
            <input type="checkbox" value="" />
            <label>Summer(34)</label>
          </div>
          <div>
            <input type="checkbox" value="" />
            <label>Winter(34)</label>
          </div>
        </form>
      </div>
      <div className="product-list">
        {fdata.map((item)=>{
          return (
            <div className="card">
          <div className="image">
            <img src={item.url} alt="" />
          </div>
          <div className="details">
            <div className="difficulty">
              <p><span class="lnr lnr-clock"></span> 30 minutes</p>
              <p><span class="lnr lnr-thumbs-up"></span> super easy</p>
            </div>
            <p>{item.title}</p>
          </div>
        </div>
          )
        })}
      </div>
    </div>
  );
};

export default ContentPage;

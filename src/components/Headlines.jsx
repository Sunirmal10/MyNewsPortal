
import React, {useState} from 'react';
import { countryCodes } from './Array';
import axios from 'axios';
import './Headlines.css';
import './input.css';
import {  API_KEY2 } from "./Api";
function Headlines() {

  const [coun, setCoun] = useState('')
  const [time, settime] = useState('')
  const [news, setNews] = useState('');

  const handleTime = (e)=>{
    let val = e.target.value;
    console.log(val);
    settime(val);
  }

  const handleCont = (e) =>{
    let val = e.target.value;
    console.log(val);
    setCoun(val);
  }

  const submitHeadline = async (e)=>{
    e.preventDefault();
    {
   
     let options = {
           method: 'GET',
           url: "https://api.newscatcherapi.com/v2/latest_headlines",
           params: { countries: coun, when: time, page_size: 15, page: 1},
           headers: {
             'x-api-key': API_KEY2,
           }}
     
         return await axios.request(options)
           .then((res)=>{
             let newsData = res.data.articles;
             console.log(newsData);
             setNews(newsData);
             console.log(news);
             setCoun('');
             settime('');
           
         })
           .catch((err)=>{console.log(err)})
     }
 
   }

  return (
    <div className='headlines'>
     <form className='form' onSubmit={submitHeadline}>
      <h4>SEARCH HEADLINES BY:</h4>
      <p><span style={{color:"red"}}>*</span>reqiured</p>
       <label htmlFor=""><strong>Time period:<span style={{color:"red"}}>*</span></strong>
       <select className='input' value={time} onChange={handleTime}>
        <option ></option>
        <option value="7d">7 days</option>
        <option value="30d">30 days</option>
        <option value="1hr">1 hour</option>
        <option value="24hr">24 hour</option>
       </select>
       </label>
       <br/>
       <label htmlFor=""><strong>Country:<span style={{color:"red"}}>*</span></strong><br/>
            <select className='input' value={coun.name} onChange={handleCont}>
            {
            countryCodes.map((x)=>(
              <option value={x.code}>{x.name}</option>
            ))
            }
            </select>
       </label>
       <br/>
      <div className='btngrp2'> <input type='submit' className='btn' value="SEARCH"/>
      <input type="reset" className='btn' value="RESET"/></div>
     </form>
     <div className='headbody'>
     <h2>TOP HEADLINES:</h2>
      {
        news ? 
     
          news.map(
            (items)=>(
              
              <div className='container'>
                <img className='imghead' src={items.media} alt="news_image"/>
                <h4><a className='title' href={items.link} target='_blank'> {items.title}</a></h4>

              </div>
            )
    
  ):
        (
          <p style={{textAlign: "left", color:"gray"}}> No data currently! Try searching!</p>
        )
      }
     </div>
    </div>
  )
}

export default Headlines
const dotenv = require("dotenv");
dotenv.config();
import React,{createContext, useState} from "react";
import axios from 'axios';


const ValueContext = createContext();

const ValueProvider = ({children})=>{



    const [key, setKey] = useState('')
    const [coun, setCoun] = useState('')
    const [select, setSelect] = useState('')
    const [topicx, settopics] = useState('')
    const [sort, setSort] = useState('')
    const [filteredNews, setFilteredNews] = useState('');
    const [query, setQuery] = useState('');
    const [news, setNews] = useState('');
    const [Filtered, setFiltered] = useState(false)
    const [Searched, setSearched] = useState(false)

    const handleChange = (e) =>{
        let val = e.target.value;
        console.log(val);
        setSelect(val);
      }
      const handleSort = (e) =>{
        let val = e.target.value;
        console.log(val);
        setSort(val);
      }
      const handleCon = (e) =>{
        let val = e.target.value;
        console.log(val);
        setCoun(val);
      }
      const handleTop = (e) =>{
        let val = e.target.value;
        console.log(val);
        settopics(val)
      }

      const handleKey = (e)=>{
        let val = e.target.value;
        console.log(val);
        setKey(val)
      }

      // SEARCH SETSTATE //
      const changeHandler = (e)=>{
        let val = e.target.value;
        setQuery(val);
        console.log(query, typeof query);
     }
   
    
// calling API om submit SEARCH//
  const submitHandler = async (e)=>{
    e.preventDefault();
    {
   
     let options = {
           method: 'GET',
           url: process.env.API_URL,
           params: {q: query,page_size: 20, page: '1'},
           headers: {
             'x-api-key': process.env.API_KEY,
           }}
     
          await axios.request(options)
           .then((res)=>{
             let newsData = res.data.articles;
             console.log(newsData);
             setNews(newsData);
             console.log(news);
             setQuery('');
             setSearched(true);
             setFiltered(false);
           
         })
           .catch((err)=>{console.log(err)})
     }
 
   }

        // API CALL with different FILTER Values //
      const handleSubmit = async (e)=>{

        e.preventDefault();
        {
       
         let options = {
               method: 'GET',
               url: process.env.API_URL,
               params: {q: key, lang: select, countries: coun, topic: topicx, sort_by: sort, page_size: 20, page: '1'},
               headers: {
                 'x-api-key': process.env.API_KEY,
               }}
             return await axios.request(options)
               .then((res)=>{
                 let newsData = res.data.articles;
                 console.log(newsData);
                 setFilteredNews(newsData);
                 console.log(filteredNews);
                 setSearched(false);
                 setFiltered(true);
               
                 setCoun('');
                 setSort('');
                 settopics('');
                 setSelect('');
                 setKey('');
               
             })
               .catch((err)=>{console.log(err)})
         }

      }

    return (
        <ValueContext.Provider value={{filteredNews, Filtered, Searched, coun, select, topicx, sort, query, news, changeHandler, submitHandler, handleChange, handleCon, handleSort, handleTop, handleKey, handleSubmit}}>
            {children}
        </ValueContext.Provider>
    )
}

export {ValueContext, ValueProvider};
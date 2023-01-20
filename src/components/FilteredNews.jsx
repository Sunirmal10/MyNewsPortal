import React, {useContext} from 'react'
import './SearchNews.css'
import { ValueContext } from './context'

function FilteredNews() {

    const {filteredNews} = useContext(ValueContext);

  return (
    <div>
          <div className='news'>
           {
            filteredNews ? 
            filteredNews.map(
              (items, index)=>
             (<div className='newsbox'>
              <h3>{index+1}.<a className='title' href={items.link}> {items.title}</a></h3>
              <span >
                <span className='info'>
                  <strong >Published: </strong>{items.published_date}
                </span> |  <strong><i class="fa-solid fa-feather"></i> {items.author}</strong> |  
               <i className="fa-brands fa-twitter twitter"></i> 
               <a className='twitterLink' href={"https://twitter.com/" + items.twitter_account} target='_blank'> {items.twitter_account}</a>
              </span>
              <img className="image" src={items.media} alt="news_image" />
              <p><strong>Topic:</strong> {items.topic}</p>
              <p className='excerpt'>{items.excerpt}</p>
              <p>
                <a className="readmore" href={items.link} target="_blank">
                  <strong>Read more..</strong>
                </a>
              </p>
              {/* <p>{items._id}</p> */}
              
              </div>)
            ) : (<h3 style={{textAlign: "center", color:"gray"}}>Oops! No Data! Try searching something!</h3>)
           }
           </div>
    </div>
  )
}

export default FilteredNews
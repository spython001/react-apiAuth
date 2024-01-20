import { useEffect, useState } from 'react'
import getAppleNews from './api'
import './App.css'
import News from './components/news/News'

function App() {

  const [appleNews, setAppleNews] = useState([])

  useEffect (() => {
    const fetchResult = async () => {
      const { articles } = await getAppleNews();
      console.log(articles);
      setAppleNews(articles)
    }
    fetchResult();
  }, [])

  return (
      <div>
        Hello world
        {
          appleNews.length > 0 && (
          appleNews.map((news) => (
          <News key={news.id} news={news} />
          ))
          )
        }
      </div>
  )
}

export default App

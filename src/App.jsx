import { useEffect, useState } from 'react'
import getAppleNews from './api'
import './App.css'

function App() {

  const [appleNews, setAppleNews] = useState([])

  useEffect (() => {
    const fetchResult = async () => {
      const results = await getAppleNews();
      console.log(results);
      setAppleNews(results)
    }
    fetchResult();
  }, [])

  return (
      <div>
        Hello world
        {
          appleNews.map(news =>  )
        }
      </div>
  )
}

export default App

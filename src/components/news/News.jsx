/* eslint-disable react/prop-types */
import './news.scss'

export default function News({news}) {
    console.log(news)
  return (
    <div className='news'>
        {news ? (
    <>
      <h2>{news.title}</h2>
      <span>{news.author}</span>
      <span>{news.content}</span>
      <hr />
      </>
    ) : (
      <p>Loading news...</p>
    )}
    </div>
  )
}

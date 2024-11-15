/*https://author-ide.skills.network/render?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZF9pbnN0cnVjdGlvbnNfdXJsIjoiaHR0cHM6Ly9jZi1jb3Vyc2VzLWRhdGEuczMudXMuY2xvdWQtb2JqZWN0LXN0b3JhZ2UuYXBwZG9tYWluLmNsb3VkL0lCTVNraWxsc05ldHdvcmstQ0QwMjEwRU4tQ291cnNlcmEvbGFicy92Mi9tMy9GZXRjaF9EYXRhX3VzaW5nX3VzZUZldGNoJUMyJUEwLm1kIiwidG9vbF90eXBlIjoidGhlaWEiLCJhdGxhc19maWxlX2lkIjo0MjExMiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE3MzAyMjE1NDR9.rS_W0sKesvKbJWHvezXUH6Co5ENhFWNfnwrvBicMrgY*/
import React from 'react'
import UseFetch from './UseFetch'
import './FetchData.css'

const FetchData = () => {
  const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
  console.log(data);
  return (
    <>
      <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
        {data && data.map((e) => (
          <>
            <li className="list_data">
              <h3>{e.name}</h3>
              <p><strong>Importance: </strong>{e.importance}</p>
              <p><strong>Benefits: </strong>{e.benefits}</p>
              <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
            </li>
          </>
        ))}
      </ul>
    </>
  )
}

export default FetchData
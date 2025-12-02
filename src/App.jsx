import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'


const filmList = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {

  return (<div className="container">
    <ul className='list-group'>
      {filmList.map((film, index) => (<li className="list-group-item" key={index}>{film.title}</li>
      ))}
    </ul>
  </div>
  )
}

export default App

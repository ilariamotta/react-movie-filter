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
    <div className="row">
      <div className="col">
        <div className="form-floating">
          <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option selected>Apri la lista dei generi</option>
            {filmList.map((film, index) => (<option value="1" key={index}>{film.genre}</option>))}
          </select>
          <label for="floatingSelect">Seleziona il genere</label>
        </div>
        <ul className='list-group'>
          {filmList.map((film, index) => (<li className="list-group-item" key={index}>{film.title}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
}



export default App





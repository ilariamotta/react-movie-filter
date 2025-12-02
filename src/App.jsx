import { useState } from 'react'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
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
  const [choose, setChoose] = useState("");
  const [filteredArray, setFilteredArray] = useState(filmList)

  

  useEffect(() => {
    const newFilteredArray = filmList.filter((film) => film.genre.includes(choose));
    setFilteredArray(newFilteredArray);
  }, [choose])

  return (<div className="container">
    <div className="row">
      <div className="col">
        <div className="form-floating">
          <select className="form-select" id="floatingSelect" aria-label="Floating label select example" value={choose} onChange={(event) => setChoose(event.target.value)}>
            <option value="">Apri la lista dei generi</option>
            {filmList.map((film, index) => (<option key={index} value={film.genre}>{film.genre}</option>))}
          </select>
          <label htmlFor="floatingSelect">Seleziona il genere</label>
        </div>
        <ul className='list-group'>
          {filteredArray.map((film, index) => (<li className="list-group-item" key={index}>{film.title}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
}



export default App





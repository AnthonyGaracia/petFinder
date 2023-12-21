import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchPets = async() => {
      const {data} = await axios.get('http://localhost:3000/api/pets')
      setPets(data)
    }
    fetchPets()

  },[]) 
  return (
    <div>
      <h1>Pet Finder - {pets.length}</h1>
      {
        pets.map((pet) => {
          return(
            <div key={pet.id} className={pet.is_favorite? 'favorite' : ''}>{pet.name}</div>
            )
          })
      }
    </div>

  )
}

export default App

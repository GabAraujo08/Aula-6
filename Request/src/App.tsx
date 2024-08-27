import { useState, useEffect } from 'react'
import axios from 'axios'; // Import axios library
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [data, setData] = useState<any>();
  const [name, setName] = useState<string>('');

  var URL = 'https://pokeapi.co/api/v2/pokemon/' + count.toString();

  useEffect(() => {
    axios.get(URL).then((response: any) => {
      setData(response.data);
      setName(response.data.name);
      console.log(response.data);
    }).catch((error: any) => {
      console.log(error);
    })
  })
  return (
    <>
      <div className='PokeCard'>
        <img
          src={data ? data.sprites?.other.home.front_default : ''}
          alt={name}
        />
        <h2>{name}</h2>
        <p>Habilidades:</p>
        {data && data.abilities && data.abilities.map((x : any) => (
          <p key={x.ability.name}>{x.ability.name}</p>
        ))}
        <p>Peso: {data && data.weight}</p>
      </div>
    
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default App

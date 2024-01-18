import { useState } from 'react'
import './App.css'
import './scss/main.scss'

function App() {
  const [baseAmount, setBase] = useState(0)
  
  function handleSubmit (e) {
    e.preventDefault();
    const baseTree = { baseAmount }
    console.log(baseTree)
    fetch('http://localhost:8000/main', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(baseTree)
    }).then(() => {
      console.log('post worked?')
    })
  }

  return (
    <>
      <h1>Welcome to Greenery!</h1>
      <h3><i>Money doesnt grow on trees, but maybe it can grow with them!</i></h3>
      <div className="baseTree">
        <p>How much money is in this tree?</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input 
            id="treeSubmit" 
            type="text" 
            name="text" 
            value={baseAmount}
            onChange={(e) => setBase(e.target.value)}/>
          </div>
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
        <div className='hyperlink'>
          <p>While these trees may be digital, you can also use your money to grow real trees! </p>
          <a href='https://plant.ecosia.org/collections/trees'>Find out how!</a>
        </div>
      </div>
    </>
  )
}

export default App

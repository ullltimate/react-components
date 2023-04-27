import { useState } from 'react'
//import './App.css'
import Card from "./Card"
import dataProducts from "./products"

function App() {
  const [cards, setCards] = useState(dataProducts);

  function renderCards(i:any){
    return (
      <Card title={dataProducts[i].title} img={dataProducts[i].thumbnail} desc={dataProducts[i].description} />
    );
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <div className="container">
            <a className="navbar-brand" href='/test'>Navbar</a>
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>
      <section>
        <div className="container">
          <div className="row">
            {cards.map((_, i) => renderCards(i))}
          </div>
        </div>
      </section>
    </>
  )
}

export default App

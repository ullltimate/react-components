import { useState } from 'react'
//import './App.css'
import Card from "./Card"
import dataProducts from "./products"

function App() {
  const [cards] = useState(dataProducts);

  function renderCards(i:any){
    return (
      <Card title={dataProducts[i].title} img={dataProducts[i].thumbnail} desc={dataProducts[i].description} id={i} />
    );
  }

  return (
    <>
      <header>
        <nav className="navbar bg-body-tertiary">
          <div className="container">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>
      <section>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {cards.map((_, i) => renderCards(i))}
          </div>
        </div>
      </section>
    </>
  )
}

export default App

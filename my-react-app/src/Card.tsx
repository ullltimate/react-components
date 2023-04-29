import { Link } from "react-router-dom"

function Card(props:any) {
  
    return (
      <>
        <div className="col-sm-6">
          <div className="card">
            <img className="card-img-top" src={props.img} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.desc}</p>
              <Link to={`/product/${props.id}`} className="btn btn-primary">Страница продукта</Link>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Card
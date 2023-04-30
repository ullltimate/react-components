import { Link } from "react-router-dom"

function Card(props:any) {

    const width = {
      maxWidth: '18rem',
    }
  
    return (
      <>
        <div className="col">
          <div className="card h-100">
            <img className="card-img-top rounded mx-auto d-block" style={width} src={props.img} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">{props.title}</h5>
              <p className="card-text">{props.desc}</p>
            </div>
            <div className="card-footer text-center">
              <Link to={`/product/${props.id}`} className="btn btn-primary">Страница продукта</Link>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Card
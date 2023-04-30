import { Link, useParams } from "react-router-dom"
import dataProducts from "./products";

function Product() {
    const params = useParams();
    console.log(params);
    return (
      <>
        <div className="container">
          <div className="card">
            <img className="card-img-top" src={dataProducts[Number(params.id)].thumbnail} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{dataProducts[Number(params.id)].title}</h5>
              <p className="card-text">{dataProducts[Number(params.id)].description}</p>
              <Link to='/' className="btn btn-primary">На главную</Link>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Product
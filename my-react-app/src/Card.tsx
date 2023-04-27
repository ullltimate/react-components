function Card(props:any) {
  
    return (
      <>
        <div className="col-sm-6">
          <div className="card">
            <img className="card-img-top" src={props.img} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.desc}</p>
              <a href="#" className="btn btn-primary">Переход куда-нибудь</a>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Card
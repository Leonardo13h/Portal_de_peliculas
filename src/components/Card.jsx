import { Link } from "react-router-dom";

const ruta = "https://image.tmdb.org/t/p/w500";
const rutaDetalle="/detalle/"
const Card = ({pelicula,tipo}) => {

  return (
    <div
  className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4"
  key={pelicula.id}
>
  <div className="card h-100 shadow-sm border-0 position-relative">
    {/* Imagen de la película */}
    <div className="card-header p-0 overflow-hidden rounded-top">
      <img
        src={ruta + pelicula.poster_path}
        className="img-fluid hover-scale"
        alt={pelicula.title || pelicula.name}
        style={{ transition: "transform 0.3s ease" }}
      />
    </div>

    {/* Contenido */}
    <div className="card-body text-center p-3">
      <h6 className="card-title mb-1 text-truncate">
        {pelicula.title || pelicula.name}
      </h6>
      <p className="text-muted mb-1 small">
        Popularidad{" "}
        <span className="badge rounded-pill bg-danger px-2 py-1">
          {parseInt(pelicula.popularity)}
        </span>
      </p>
    </div>

    {/* Footer / botón */}
    <div className="card-footer bg-transparent border-0 p-3 pt-0">
      <Link
        to={rutaDetalle + tipo + "/" + pelicula.id}
        className="btn btn-outline-success btn-sm w-100"
      >
        Ver detalles
      </Link>
    </div>
  </div>
</div>
  )
}

export default Card
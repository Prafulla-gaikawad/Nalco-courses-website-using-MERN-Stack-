import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card m-3" style={{ width: "23rem" }}>
        <img
          src={props.imgSrc}
          className="card-img-top"
          alt="..."
          style={{ height: "200px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            <b>{props.courseName}</b>
          </h5>
          <p className="card-text">{props.desc}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

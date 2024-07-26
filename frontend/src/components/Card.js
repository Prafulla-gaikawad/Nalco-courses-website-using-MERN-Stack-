import React from "react";

function Card() {
  return (
    <div>
      <div className="card m-3" style={{ width: "23rem" }}>
        <img
          src="https://i.ytimg.com/vi/fis26HvvDII/maxresdefault.jpg"
          className="card-img-top"
          alt="..."
          style={{ height: "200px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            <b>Android App Development for Beginners</b>
          </h5>
          <p className="card-text">
            Learn how to develop Android applications from scratch.
          </p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

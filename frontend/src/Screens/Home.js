import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Home() {
  const [courseCat, setcourseCat] = useState([]);
  const [course, setCourse] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/coursedata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response[0], response[1]);

    setCourse(response[0]);
    setcourseCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        {courseCat !== [] ? (
          courseCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.category}
                </div>
                <hr />
                {course !== [] ? (
                  course
                    .filter((item) => item.category === data.category)
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          {" "}
                          <Card
                            courseName={filterItems.name}
                            desc={filterItems.description}
                            imgSrc={filterItems.image}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>no such data</div>
                )}
              </div>
            );
          })
        ) : (
          <div>""""""""""""</div>
        )}
      </div>
    </div>
  );
}

export default Home;

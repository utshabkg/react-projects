/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";
import ReactStars from "react-stars";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "./firebase/firebase";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef);
      _data.forEach((doc) => {
        setData((prev) => [...prev, { ...doc.data(), id: doc.id }]);
      });
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="cards flex flex-wrap justify-between px-3 mt-2">
      {loading ? (
        <div className="w-full flex justify-center items-center h-96">
          <Vortex height={40} color="white" />
        </div>
      ) : (
        data.map((e, i) => {
          return (
            <Link to={`/detail/${e.id}`}>
              <div
                key={i}
                className="card font-medium shadow-lg p-1 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500"
              >
                <div className="card-img">
                  <img className="" src={e.image} />
                </div>

                <div className="pt-2">
                  <h1>
                    <span className="text-orange-700">Movie:</span> {e.title}
                  </h1>
                  <h1 className="flex items-center">
                    <span className="text-orange-700 mr-1">Rating:</span>
                    <ReactStars
                      size={20}
                      half={true}
                      value={e.rating / e.number_of_ratings}
                      edit={false}
                    />
                  </h1>
                  <h1>
                    <span className="text-orange-700">Year:</span> {e.year}
                  </h1>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Cards;

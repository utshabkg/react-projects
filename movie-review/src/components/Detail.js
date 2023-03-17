/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router";
import { db } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Bars } from "react-loader-spinner";
import Reviews from "./Reviews";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
    rating: 0,
    number_of_ratings: 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="p-4 mt-4 flex flex-col md:flex-row justify-center md:items-start w-full">
      {loading ? (
        <div className="h-96 flex w-full justify-center items-center">
          <Bars height={25} color="white" />
        </div>
      ) : (
        <>
          <img className="h-96 md:sticky top-14" src={data.image} />
          <div className="ml-0 md:ml-4 w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-400">
              {data.title} <span className="text-xl">({data.year})</span>
            </h1>
            <ReactStars
              size={20}
              half={true}
              value={data.rating / data.number_of_users}
              edit={false}
            />
            <p className="mt-3">{data.description}</p>
            <Reviews
              id={id}
              prevRating={data.rating}
              number_of_users={data.number_of_users}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;

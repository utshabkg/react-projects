/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import ReactStars from "react-stars";

const Cards = () => {
  const [data, setData] = useState([
    {
      name: "Avengers Endgame",
      year: 2020,
      rating: 4.5,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2020,
      rating: 3.5,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2020,
      rating: 5,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2020,
      rating: 5,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2020,
      rating: 5,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2020,
      rating: 5,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2020,
      rating: 5,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2020,
      rating: 5,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2020,
      rating: 5,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2020,
      rating: 5,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
  ]);
  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {data.map((e, i) => {
        return (
          <div
            key={i}
            className="card font-medium shadow-lg p-1 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500"
          >
            <img className="h-72" src={e.img} />
            <h1>
              <span className="text-gray-400">Movie:</span> {e.name}
            </h1>
            <h1 className="flex items-center">
              <span className="text-gray-400 mr-1">Rating:</span>
              <ReactStars size={20} half={true} value={e.rating} edit={false} />
            </h1>
            <h1>
              <span className="text-gray-400">Year:</span> {e.year}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

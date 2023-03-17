import React, { useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef } from "./firebase/firebase";
import { addDoc } from "firebase/firestore";
import { TailSpin } from "react-loader-spinner";
import swal from "sweetalert";

const Reviews = ({ id }) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState("");

  const sendReview = async () => {
    setLoading(true);
    try {
      await addDoc(reviewsRef, {
        movieid: id,
        name: "Hard Coder",
        thought: form,
        rating: rating,
        timestamp: new Date().getTime(),
      });
      swal({
        title: "Review Sent",
        icon: "success",
        buttons: false,
        timer: 2000,
      });
      setRating(0);
      setForm("");
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 2000,
      });
    }
    setLoading(false);
  };

  return (
    <div className="mt-4 border-t-2 border-blue-900 w-full">
      <ReactStars
        size={30}
        half={true}
        edit={true}
        value={rating}
        onChange={(rate) => setRating(rate)}
      />
      <input
        value={form}
        onChange={(e) => setForm(e.target.value)}
        placeholder="Share your thoughts..."
        className="w-full p-2 outline-none header"
      />
      <button
        onClick={sendReview}
        className="bg-blue-800 flex justify-center w-full p-2"
      >
        {loading ? <TailSpin height={15} color="white" /> : "Share"}
      </button>
    </div>
  );
};

export default Reviews;

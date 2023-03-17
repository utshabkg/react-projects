import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { db, reviewsRef } from "./firebase/firebase";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import swal from "sweetalert";

const Reviews = ({ id, prevRating, number_of_ratings }) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [form, setForm] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    sendReview();
  }, []);

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

      const _doc = doc(db, "movies", id);
      await updateDoc(_doc, {
        rating: prevRating + rating,
        number_of_ratings: number_of_ratings + 1,
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

  useEffect(() => {
    async function getData() {}
    getData();
  }, []);

  return (
    <div className="mt-4 border-t-2 border-blue-900 w-full">
      <ReactStars
        size={30}
        half={true}
        edit={true}
        value={data.rating / data.number_of_ratings}
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
      {reviewsLoading ? (
        <div className="mt-3 flex justify-center">
          <ThreeDots height={15} color="white" />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Reviews;

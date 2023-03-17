import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "./firebase/firebase";
import {
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import swal from "sweetalert";

const Reviews = ({ id, prevRating, number_of_users }) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setreviewsLoading] = useState(false);
  const [form, setForm] = useState("");
  const [data, setData] = useState([]);

  const sendReview = async () => {
    setLoading(true);
    try {
      await addDoc(reviewsRef, {
        movieid: id,
        name: "Hard Coder",
        rating: rating,
        thought: form,
        timestamp: new Date().getTime(),
      });

      const _doc = doc(db, "movies", id);
      await updateDoc(_doc, {
        rating: prevRating + rating,
        number_of_users: number_of_users + 1,
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
        timer: 5000,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    async function getData() {
      setreviewsLoading(true);
      let q = query(reviewsRef, where("movieid", "==", id));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setData((prev) => [...prev, doc.data()]);
      });

      setreviewsLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="mt-4 border-t-2 border-blue-900 w-full">
      <ReactStars
        size={30}
        half={true}
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
      {reviewsLoading ? (
        <div className="mt-6 flex justify-center">
          <ThreeDots height={10} color="white" />
        </div>
      ) : (
        <div className="mt-4">
          {data.map((e, i) => {
            return (
              <div
                className="p-2 w-full mt-2 bg-gray-900 bg-opacity-50 border-b border-gray-500"
                key={i}
              >
                <div className="flex items-center">
                  <p className="text-blue-500">{e.name}</p>
                  <p className="ml-3 text-xs">
                    ({new Date(e.timestamp).toLocaleString()})
                  </p>
                </div>
                <ReactStars
                  size={15}
                  half={true}
                  value={e.rating}
                  edit={false}
                />
                <p>{e.thought}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;

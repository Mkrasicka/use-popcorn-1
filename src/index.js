import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import StarRating from "./StarRating";
// import { useState } from "react";
import App from "./App-v3";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating
//         color="blue"
//         maxRating={10}
//         onSetMovieRating={setMovieRating}
//       />
//       <p>This movie was rated {movieRating} star. </p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      color="red"
      size={24}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      className="test"
      defaultRating={1}
    />
    <Test /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//

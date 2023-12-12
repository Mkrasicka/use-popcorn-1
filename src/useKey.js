import { useState, useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        console.log(e);
        if (e.keyCode === key) {
          action();
          // console.log("escape");
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}

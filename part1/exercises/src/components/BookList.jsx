import React from "react";
import styles from "./BookList.module.css";
export default function BookList() {
  let pageTitle = "Book Collections";
  let book1 = "google.com";
  let book2 = "";
  let book3 = "";

  return (
    <div class={styles.bookposition}>
      <h3>{pageTitle}</h3>
      <img
        src={"https://m.media-amazon.com/images/I/81u-dwwWWOL._SL1500_.jpg"}
        alt="The art of happiness"
        height="100px"
        width="100px"
      />
      <img
        src={"https://m.media-amazon.com/images/I/81l3rZK4lnL._SY522_.jpg"}
        alt="ikigai"
        height="100px"
        width="100px"
      />
      <img
        src={"https://m.media-amazon.com/images/I/81u-dwwWWOL._SL1500_.jpg"}
        alt="The art of happiness"
        height="100px"
        width="100px"
      />
    </div>
  );
}

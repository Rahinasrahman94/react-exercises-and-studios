import React from "react";
export default function hobbyLinks() {
  let hobbyTitle = "Hobbies";
  let hobbyLinks = [
    "https://einthusan.tv/intro/",
    "https://en.wikipedia.org/wiki/Fishing",
  ];
  return (
    <div>
      <h3>{hobbyTitle}</h3>
      <a href={hobbyLinks[0]}>Watching Movies</a>
      <a href={hobbyLinks[1]}>Fishing</a>
    </div>
  );
}

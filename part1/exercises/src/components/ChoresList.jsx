import React from "react";
import styles from "./ChoresList.module.css";

export default function ChoresList() {
  return (
    <div>
      <h3 class={styles.choresHeading}>Chores!</h3>
      <ul>
        <li class={styles.choresText}>work1</li>
        <li class={styles.choresText}>work2</li>
        <li class={styles.choresText}>work3</li>
      </ul>
    </div>
  );
}

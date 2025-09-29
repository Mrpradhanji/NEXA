import React from "react";
import styles from "./bubble.module.css";

const Example = () => {
  return (
    <div className="grid h-screen place-content-center">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-white">
      {"Helping Businesses Achieve Their Goals Since 2018".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Example;
import React from "react";
import "../../public/assets/SortingVisualizer.css";

const SortingVisualizer = ({
  array,
  isSorting,
  isSorted,
  comparingIndices,
  swappingIndices,
  currentIndex,
  loopIndex,
}) => {
  const getBarClassName = (index) => {
    let className = "array-bar";
    if (index === currentIndex) {
      className += " current";
    } else if (index === loopIndex) {
      className += " loop";
    } else if (comparingIndices.includes(index)) {
      className += " comparing";
    } else if (swappingIndices.includes(index)) {
      className += " swapping";
    }
    return className;
  };

  return (
    <div className="visualizer-container">
      <div
        className={`array-container ${isSorting ? "sorting" : ""} ${
          isSorted ? "sorted" : ""
        }`}
      >
        {array.map((value, idx) => (
          <div
            className={getBarClassName(idx)}
            key={idx}
            style={{
              height: `${value}px`,
              width: `${Math.max(3, Math.min(30, 800 / array.length - 1))}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
import React from "react";
import "../../public/assets/AlgorithmInfo.css";

const AlgorithmInfo = ({ algorithm }) => {
  const algorithmInfo = {
    bubble: {
      title: "Bubble Sort",
      description:
        "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.",
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
      stable: "Yes",
    },
    selection: {
      title: "Selection Sort",
      description:
        "Selection sort works by selecting the smallest element from the unsorted portion and putting it at the beginning.",
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
      stable: "No",
    },
    insertion: {
      title: "Insertion Sort",
      description:
        "Insertion sort works by building a sorted array one element at a time.",
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
      stable: "Yes",
    },
    merge: {
      title: "Merge Sort",
      description:
        "Merge sort uses the divide and conquer strategy by dividing the array, sorting each part, and then merging them.",
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(n)",
      stable: "Yes",
    },
    quick: {
      title: "Quick Sort",
      description:
        "Quick sort also uses divide and conquer by selecting a pivot and partitioning the array around it.",
      timeComplexity: "O(n²) worst case, O(n log n) average",
      spaceComplexity: "O(log n)",
      stable: "No",
    },
    heap: {
      title: "Heap Sort",
      description:
        "Heap sort uses a binary heap data structure to sort elements.",
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(1)",
      stable: "No",
    },
  };

  const info = algorithmInfo[algorithm];

  return (
    <div className="algorithm-info">
      <h3>{info.title}</h3>
      <p>{info.description}</p>
      <div className="complexity-info">
        <div className="info-item">
          <span className="label">Time Complexity:</span>
          <span className="value">{info.timeComplexity}</span>
        </div>
        <div className="info-item">
          <span className="label">Space Complexity:</span>
          <span className="value">{info.spaceComplexity}</span>
        </div>
        <div className="info-item">
          <span className="label">Stable:</span>
          <span className="value">{info.stable}</span>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmInfo;
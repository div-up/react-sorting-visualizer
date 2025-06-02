import React from "react";
import "../../public/assets/SortingControl.css";

const SortingControls = ({
  selectedAlgorithm,
  onAlgorithmChange,
  speed,
  onSpeedChange,
  size,
  onSizeChange,
  onGenerateNewArray,
  onStartSorting,
  onStopSorting,
  isSorting,
}) => {
  const algorithms = [
    { id: "bubble", name: "Bubble Sort" },
    { id: "selection", name: "Selection Sort" },
    { id: "insertion", name: "Insertion Sort" },
    { id: "merge", name: "Merge Sort" },
    { id: "quick", name: "Quick Sort" },
    { id: "heap", name: "Heap Sort" },
  ];

  return (
    <div className="sorting-controls">
      <div className="control-group">
        <label>Algorithm:</label>
        <select
          value={selectedAlgorithm}
          onChange={(e) => onAlgorithmChange(e.target.value)}
          disabled={isSorting}
        >
          {algorithms.map((algo) => (
            <option key={algo.id} value={algo.id}>
              {algo.name}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label>Speed: {speed}</label>
        <input
          type="range"
          min="1"
          max="100"
          value={speed}
          onChange={(e) => onSpeedChange(parseInt(e.target.value))}
          disabled={isSorting}
        />
      </div>

      <div className="control-group">
        <label>Array Size: {size}</label>
        <input
          type="range"
          min="5"
          max="100"
          value={size}
          onChange={(e) => onSizeChange(parseInt(e.target.value))}
          disabled={isSorting}
        />
      </div>

      <div className="control-buttons">
        <button
          onClick={onGenerateNewArray}
          disabled={isSorting}
          className="generate-btn"
        >
          Generate New Array
        </button>
        <button
          onClick={onStartSorting}
          disabled={isSorting}
          className="sort-btn"
        >
          Sort!
        </button>

        {isSorting && (
          <button onClick={onStopSorting} className="sort-btn">
            Stop
          </button>
        )}
      </div>
    </div>
  );
};

export default SortingControls;
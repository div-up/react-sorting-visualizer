import React, { useState, useEffect, useRef } from "react";
import SortingControls from "../components/SortingControls";
import SortingVisualizer from "../components/SortingVisualizer";
import AlgorithmInfo from "../components/AlgorithmInfo";
import {
  bubbleSort,
  quickSort,
  mergeSort,
  heapSort,
  selectionSort,
  insertionSort,
} from "../utils/sortingAlgorithm";
import "../../public/assets/VisualizerPage.css"

const VisualizerPage = () => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(20);
  const [speed, setSpeed] = useState(20);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubble");
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [comparingIndices, setComparingIndices] = useState([]);
  const [swappingIndices, setSwappingIndices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [loopIndex, setLoopIndex] = useState(-1);
  const sortingRef = useRef(null);

  useEffect(() => {
    generateNewArray();
  }, [arraySize]);

  const generateNewArray = () => {
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 300) + 10);
    }
    setArray(newArray);
    setIsSorted(false);
    setComparingIndices([]);
    setSwappingIndices([]);
    setCurrentIndex(-1);
    setLoopIndex(-1);
  };

  const handleAlgorithmChange = (algorithm) => {
    if (!isSorting) {
      setSelectedAlgorithm(algorithm);
    }
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const handleSizeChange = (newSize) => {
    if (!isSorting) {
      setArraySize(newSize);
    }
  };

  const updateArrayWithAnimation = (
    newArray,
    comparing = [],
    swapping = [],
    current = -1,
    loop = -1
  ) => {
    setArray([...newArray]);
    setComparingIndices(comparing);
    setSwappingIndices(swapping);
    setCurrentIndex(current);
    setLoopIndex(loop);
  };

  const stopSorting = () => {
    if (sortingRef.current) {
      sortingRef.current.abort();
      sortingRef.current = null;
    }
    setIsSorting(false);
    setComparingIndices([]);
    setSwappingIndices([]);
    setCurrentIndex(-1);
    setLoopIndex(-1);
  };

  const startSorting = async () => {
    if (isSorting) return;

    setIsSorting(true);
    setIsSorted(false);

    const sortingSpeed = Math.max(1, 100 - speed);
    sortingRef.current = new AbortController();

    try {
      switch (selectedAlgorithm) {
        case "bubble":
          await bubbleSort(
            array,
            updateArrayWithAnimation,
            sortingSpeed,
            sortingRef.current.signal
          );
          break;
        case "quick":
          await quickSort(
            array,
            updateArrayWithAnimation,
            sortingSpeed,
            sortingRef.current.signal
          );
          break;
        case "merge":
          await mergeSort(
            array,
            updateArrayWithAnimation,
            sortingSpeed,
            sortingRef.current.signal
          );
          break;
        case "heap":
          await heapSort(
            array,
            updateArrayWithAnimation,
            sortingSpeed,
            sortingRef.current.signal
          );
          break;
        case "selection":
          await selectionSort(
            array,
            updateArrayWithAnimation,
            sortingSpeed,
            sortingRef.current.signal
          );
          break;
        case "insertion":
          await insertionSort(
            array,
            updateArrayWithAnimation,
            sortingSpeed,
            sortingRef.current.signal
          );
          break;
        default:
          break;
      }

      setIsSorted(true);
      setComparingIndices([]);
      setSwappingIndices([]);
      setCurrentIndex(-1);
      setLoopIndex(-1);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Sorting was stopped");
      } else {
        console.error("Sorting error:", error);
      }
    } finally {
      setIsSorting(false);
      sortingRef.current = null;7
    }
  };

  return (
    <div style={{}}>
      <div className="visualizer-page">
        <SortingControls
          selectedAlgorithm={selectedAlgorithm}
          onAlgorithmChange={handleAlgorithmChange}
          speed={speed}
          onSpeedChange={handleSpeedChange}
          size={arraySize}
          onSizeChange={handleSizeChange}
          onGenerateNewArray={generateNewArray}
          onStartSorting={startSorting}
          onStopSorting={stopSorting}
          isSorting={isSorting}
        />

        <SortingVisualizer
          array={array}
          isSorting={isSorting}
          isSorted={isSorted}
          comparingIndices={comparingIndices}
          swappingIndices={swappingIndices}
          currentIndex={currentIndex}
          loopIndex={loopIndex}
        />

        <AlgorithmInfo algorithm={selectedAlgorithm} />
      </div>
    </div>
  );
};

export default VisualizerPage;
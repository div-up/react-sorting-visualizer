import React, { useEffect, useRef, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlgorithmCard from "../components/AlgorithmCard";
import "../../public/assets/HomePage.css";
import Navbar from "../components/Navbar";

// Move static data outside component to avoid unnecessary re-renders
const algorithms = [
  {
    id: "bubble",
    title: "Bubble Sort",
    description:
      "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
    link: "https://www.geeksforgeeks.org/bubble-sort/?ref=lbp",
  },
  {
    id: "selection",
    title: "Selection Sort",
    description:
      "Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list.",
    link: "https://www.geeksforgeeks.org/selection-sort/",
  },
  {
    id: "insertion",
    title: "Insertion Sort",
    description:
      "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part.",
    link: "https://www.geeksforgeeks.org/insertion-sort/?ref=lbp",
  },
  {
    id: "merge",
    title: "Merge Sort",
    description:
      "Merge sort is a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.",
    link: "https://www.geeksforgeeks.org/merge-sort/?ref=lbp",
  },
  {
    id: "quick",
    title: "Quick Sort",
    description:
      "QuickSort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.",
    link: "https://www.geeksforgeeks.org/quick-sort/?ref=lbp",
  },
  {
    id: "heap",
    title: "Heap Sort",
    description:
      "Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning.",
    link: "https://www.geeksforgeeks.org/heap-sort/?ref=lbp",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
   const [currentSection, setCurrentSection] = useState("home");

  // Scroll to specific section
  const scrollToSection = useCallback((ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const aboutTop = aboutRef.current?.getBoundingClientRect().top || 0;

      if (aboutTop <= 100) {
        setCurrentSection("about");
      } else {
        setCurrentSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash-based navigation
  useEffect(() => {
    if (window.location.hash === "#about") {
      scrollToSection(aboutRef);
    } else {
      scrollToSection(homeRef);
    }
  }, [scrollToSection]);

  

  return (
    <><Navbar currentSection={currentSection} />
    <div ref={homeRef} className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="accent">VISUALIZE</span>
            <span className="block">ALL THE</span>
            <span className="block">SORTING</span>
            <span className="block">ALGORITHMS</span>
          </h1>
          <p className="hero-subtitle">
            cause... The more you <span className="highlight">SEE</span> the
            more you <span className="highlight">LEARN</span>...
          </p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/visualizer")}>
              Get Started
            </button>
            <button className="secondary-btn" onClick={() => scrollToSection(aboutRef)}>
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className="explore-section" id="about" ref={aboutRef}>
        <div className="section-header">
          <h2>What is Sorting?</h2>
          <p>
            A Sorting Algorithm is used to rearrange a given array or list of
            elements according to a comparison operator on the elements. The
            comparison operator is used to decide the new order of elements in
            the respective data structure.
          </p>
        </div>

        <div className="algorithms-grid">
          {algorithms.map((algo) => (
            <AlgorithmCard
              key={algo.id}
              id={algo.id}
              title={algo.title}
              description={algo.description}
              link={algo.link}
            />
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;

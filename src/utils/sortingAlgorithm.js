export const bubbleSort = async (array, updateArray, speed, signal) => {
    const n = array.length;
    const sortedIndices = [];
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (signal?.aborted) throw new Error("AbortError");
  
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          await new Promise((resolve) => setTimeout(resolve, speed));
          updateArray([...array], [j, j + 1], [j, j + 1], j, i, sortedIndices);
        } else {
          await new Promise((resolve) => setTimeout(resolve, speed));
          updateArray([...array], [j, j + 1], [], j, i, sortedIndices);
        }
      }
      sortedIndices.push(n - i - 1);
    }
    return array;
  };
  
  export const quickSort = async (array, updateArray, speed, signal) => {
    const partition = async (low, high) => {
      const pivot = array[high];
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        if (signal?.aborted) throw new Error("AbortError");
  
        await new Promise((resolve) => setTimeout(resolve, speed));
        updateArray([...array], [j, high], [], j, i);
  
        if (array[j] < pivot) {
          i++;
          [array[i], array[j]] = [array[j], array[i]];
          await new Promise((resolve) => setTimeout(resolve, speed));
          updateArray([...array], [], [i, j], j, i);
        }
      }
  
      [array[i + 1], array[high]] = [array[high], array[i + 1]];
      await new Promise((resolve) => setTimeout(resolve, speed));
      updateArray([...array], [], [i + 1, high], i + 1, high);
  
      return i + 1;
    };
  
    const sort = async (low, high) => {
      if (low < high) {
        const pi = await partition(low, high);
        await sort(low, pi - 1);
        await sort(pi + 1, high);
      }
    };
  
    await sort(0, array.length - 1);
    return array;
  };
  
  export const mergeSort = async (array, updateArray, speed, signal) => {
    const merge = async (start, middle, end) => {
      const left = array.slice(start, middle);
      const right = array.slice(middle, end);
      let i = 0,
        j = 0,
        k = start;
  
      while (i < left.length && j < right.length) {
        if (signal?.aborted) throw new Error("AbortError");
  
        await new Promise((resolve) => setTimeout(resolve, speed));
        updateArray([...array], [k, middle + j], [], k, middle + j);
  
        if (left[i] <= right[j]) {
          array[k] = left[i];
          i++;
        } else {
          array[k] = right[j];
          j++;
        }
        await new Promise((resolve) => setTimeout(resolve, speed));
        updateArray([...array], [], [k], k, middle + j);
        k++;
      }
  
      while (i < left.length) {
        if (signal?.aborted) throw new Error("AbortError");
        array[k] = left[i];
        await new Promise((resolve) => setTimeout(resolve, speed));
        updateArray([...array], [], [k], k, -1);
        i++;
        k++;
      }
  
      while (j < right.length) {
        if (signal?.aborted) throw new Error("AbortError");
        array[k] = right[j];
        await new Promise((resolve) => setTimeout(resolve, speed));
        updateArray([...array], [], [k], k, -1);
        j++;
        k++;
      }
    };
  
    const sort = async (start, end) => {
      if (end - start > 1) {
        const middle = Math.floor((start + end) / 2);
        await sort(start, middle);
        await sort(middle, end);
        await merge(start, middle, end);
      }
    };
  
    await sort(0, array.length);
    return array;
  };
  
  export const selectionSort = async (array, updateArray, speed, signal) => {
    const n = array.length;
    const sortedIndices = [];
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (signal?.aborted) throw new Error("AbortError");
  
        await new Promise((resolve) => setTimeout(resolve, speed));
        updateArray([...array], [j, minIndex], [], j, i, sortedIndices);
  
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        await new Promise((resolve) => setTimeout(resolve, speed));
        updateArray([...array], [], [i, minIndex], i, minIndex, sortedIndices);
      }
      sortedIndices.push(i);
    }
    return array;
  };
  
  export const insertionSort = async (array, updateArray, speed, signal) => {
    const n = array.length;
    const sortedIndices = [0];
  
    for (let i = 1; i < n; i++) {
      const key = array[i];
      let j = i - 1;
  
      while (j >= 0 && array[j] > key) {
        if (signal?.aborted) throw new Error("AbortError");
  
        array[j + 1] = array[j];
        await new Promise((resolve) => setTimeout(resolve, speed));
        updateArray([...array], [j, j + 1], [j + 1], j, i, sortedIndices);
  
        j--;
      }
  
      array[j + 1] = key;
      await new Promise((resolve) => setTimeout(resolve, speed));
      updateArray([...array], [], [j + 1], j + 1, i, sortedIndices);
  
      sortedIndices.push(i);
    }
  
    return array;
  };
  
  export const heapSort = async (array, updateArray, speed, signal) => {
    const n = array.length;
    const sortedIndices = [];
  
    const heapify = async (n, i) => {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < n && array[left] > array[largest]) {
        largest = left;
      }
  
      if (right < n && array[right] > array[largest]) {
        largest = right;
      }
  
      if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        await new Promise((resolve) => setTimeout(resolve, speed));
        updateArray([...array], [], [i, largest], i, largest, sortedIndices);
  
        await heapify(n, largest);
      }
    };
  
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      if (signal?.aborted) throw new Error("AbortError");
      await heapify(n, i);
    }
  
    // Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
      if (signal?.aborted) throw new Error("AbortError");
  
      [array[0], array[i]] = [array[i], array[0]];
      await new Promise((resolve) => setTimeout(resolve, speed));
      updateArray([...array], [], [0, i], 0, i, sortedIndices);
  
      await heapify(i, 0);
      sortedIndices.push(i);
    }
    return array;
  };
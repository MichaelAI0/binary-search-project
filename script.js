function binarySearch(arr, x) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) return mid;
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
}

document.getElementById("search").addEventListener("click", function () {
  let number = document.getElementById("number").value;
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = binarySearch(arr, Number(number));
  document.getElementById("result").innerText =
    result >= 0 ? "Number found at index " + result : "Number not found";
});

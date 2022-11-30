// function countDown(num) {
//   let timer = setInterval(function () {
//     num = num - 1;
//     if (num <= 0) {
//       clearInterval(timer);
//       console.log("Stop!"); //this line took awhile to execute, I wonder why?
//     } else {
//       console.log(num);
//     }
//   }, 1000);
// }

//method i tried but not successful

// function countDown(num) {
//   for (let i = num; i > 0; i--) {
//     num = num - 1;
//     setInterval(countDown, 1000);

//     if (num >= 1) {
//       console.log(num);
//     }
//     if (num < 1) {
//       clearInterval(6);
//       console.log("Stop!");
//     }
//   }
// }

function randomGame() {
  let count = 0;
  let pickedNum;
  let timer = setInterval(function () {
    pickedNum = Math.random();
    count++;

    if (pickedNum > 0.75) {
      clearInterval(timer);
      console.log(count);
      console.log(pickedNum);
    } else {
      console.log(count);
      console.log(pickedNum);
    }
  }, 1000);
}
// I figured this out from the previous question's answer key, I struggled a little bit with tracking the count but I finally found the way that it would make sense.

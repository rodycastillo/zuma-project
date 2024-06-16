// document.addEventListener("DOMContentLoaded", function () {
//   const items = document.querySelectorAll('.section2__main__item');
//   const section2 = document.querySelector('.section2');

//   const updateCenterItem = () => {
//     items.forEach(item => item.classList.remove('centered'));


//     console.log(section2.getBoundingClientRect())

//     const section2Rect = section2.getBoundingClientRect();
//     const section2Middle = section2Rect.top + section2Rect.height / 2;

//     let closest = items[0];
//     let closestDistance = Math.abs(closest.getBoundingClientRect().top + closest.clientHeight / 2 - section2Middle);

//     items.forEach(item => {
//       const itemMiddle = item.getBoundingClientRect().top + item.clientHeight / 2;
//       const distance = Math.abs(itemMiddle - section2Middle);

//       if (distance < closestDistance) {
//         closest = item;
//         closestDistance = distance;
//       }
//     });

//     closest.classList.add('centered');
//   };

//   window.addEventListener('scroll', updateCenterItem);

//   // Call the function initially to set the correct centered item
//   // updateCenterItem();
// });
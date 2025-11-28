// import React, {useEffect} from 'react'

// function CustomCursor() {

//     useEffect(() => {
//     // Custom cursor implementation
//     const cursor = document.querySelector('.my-cursor');
//     if (cursor) {
//       const moveCursor = (e) => {
//         cursor.style.left = `${e.clientX}px`;
//         cursor.style.top = `${e.clientY}px`;

//       }

//       const hoverElements = document.querySelectorAll('p, li, a, span');
//       hoverElements.forEach(element => {
//         element.addEventListener('mouseenter', function () {
//           cursor.classList.add('large');
//         });

//         element.addEventListener('mouseleave', function () {
//           cursor.classList.remove('large');
//         });
//       });

//       document.addEventListener('mousemove', moveCursor);
//       return () => document.removeEventListener('mousemove', moveCursor);
//     }
//   }, []);

//   useEffect(() => {
//     document.querySelectorAll('li a').forEach(anchor => {
//       anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);

//         targetElement.scrollIntoView({
//           behavior: 'smooth'
//         })
//       });
//     });

//   }, []);

//     return (
//         <div className='my-cursor'>
            
//         </div>
//     )
// }

// export default CustomCursor

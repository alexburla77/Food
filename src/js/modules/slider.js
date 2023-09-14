function slider({container, slide, nextArr, prevArr, totalCounter, currentCounter, wrapper, field}) {

   //Slider

   const prev = document.querySelector(prevArr);
   const next = document.querySelector(nextArr);
   const slider = document.querySelector(container);
   const slides = document.querySelectorAll(slide);
   const total = document.querySelector(totalCounter);
   const current = document.querySelector(currentCounter);
   const slidesWrapper = document.querySelector(wrapper);
   const slidesField = document.querySelector(field);
   const width = window.getComputedStyle(slidesWrapper).width;
 
   let slideIndex = 1;
   let offset = 0;
 
 
   if (slides.length < 10) {
     total.textContent = `0${slides.length}`;
     current.textContent = `0${slideIndex}`;
   } else {
     total.textContent = slides.length;
     current.textContent = slideIndex;
   }
 
   slidesField.style.width = 100 * slides.length + '%';
   slidesField.style.display = 'flex';
   slidesField.style.transition = `0.5s all`;
   slider.style.position = 'relative';
 
   slidesWrapper.style.overflow = 'hidden';
 
   const indicators = document.createElement('ul'),
     dots = [];
   indicators.classList.add('carousel-indicators');
   slider.append(indicators);
 
 
   for (let i = 0; i < slides.length; i++) {
     const dot = document.createElement('li');
     dot.setAttribute('data-slide-to', i + 1);
     dot.classList.add('dot');
     indicators.append(dot);
     if (i == 0) {
       dot.style.opacity = 1;
     }
     dots.push(dot);
   }
 
   function moveSlides() {
 
     if (slides.length < 10) {
       current.textContent = `0${slideIndex}`;
     } else {
       current.textContent = slideIndex;
     }
 
     dots.forEach(dot => dot.style.opacity = ".5");
     dots[slideIndex - 1].style.opacity = 1;
   }
 
 
   function deleteNotDigits(str) {
     return +str.replace(/\D/g, '')
   }
 
   next.addEventListener('click', () => {
     if (offset == (deleteNotDigits(width) * (slides.length - 1))) {
       offset = 0;
     } else {
       offset += deleteNotDigits(width);
     }
 
     slidesField.style.transform = `translateX(-${offset}px)`;
 
     if (slideIndex == slides.length) {
       slideIndex = 1;
     } else {
       slideIndex++;
     }
 
     moveSlides();
 
   });
 
 
   prev.addEventListener('click', () => {
     if (offset == 0) {
       offset = deleteNotDigits(width) * (slides.length - 1);
     } else {
       offset -= deleteNotDigits(width);
     }
 
     slidesField.style.transform = `translateX(-${offset}px)`;
 
 
     if (slideIndex == 1) {
       slideIndex = slides.length;
     } else {
       slideIndex--;
     }
 
     moveSlides();
 
   });
 
 
   dots.forEach(dot => {
     dot.addEventListener('click', (e) => {
       const slideTo = e.target.getAttribute('data-slide-to');
       slideIndex = slideTo;
       offset = deleteNotDigits(width) * (slideTo - 1);
       slidesField.style.transform = `translateX(-${offset}px)`;
       moveSlides();
     });
   });
}

export default slider;
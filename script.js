
    function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }
       const sliderImage = document.querySelectorAll('.slide-in')
      function checkSlide (e){
        sliderImage.forEach(sliderImage=>{
          // window.scrolly will give th whole height and window.innerheight will tell the where we are at the bottom right now
          const slideInAt = (window.scrollY + window.innerHeight)-sliderImage.height / 2; // divide by 2 will give us the half height of the image
  
          const imageBottom = sliderImage.offsetTop + sliderImage.height
          const isHalfShown = slideInAt > sliderImage.offsetTop
          const isNotScrollPass = window.scrollY < imageBottom
  
          if(isHalfShown && isNotScrollPass ){
            sliderImage.classList.add('active')
          }else{
            sliderImage.classList.remove('active')
  
          }
  
  
        })
      }
      
      window.addEventListener('scroll',debounce(checkSlide))
  
  
  
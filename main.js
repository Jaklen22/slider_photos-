var imgList = Array.from(document.getElementsByClassName("img-item"));
var lightboxContainer =document.querySelector('.lightbox-container');
var lightboxItem = document.querySelector('.lightbox-item');
var currentIndex = 0;
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var clos = document.getElementById("close");




for (var i=0 ; i<imgList.length ; i++){
 imgList[i].addEventListener('click' , function(e){
   var currentIndex =imgList.indexOf(e.target);  
    var imgSrc = e.target.getAttribute('src');
    lightboxContainer.classList.replace('d-none','d-flex');
    lightboxItem.style.backgroundImage =`url(${imgSrc})`
 })
}

function nexdSlide(){
   currentIndex ++ ;
   if(currentIndex == imgList.length){
      currentIndex = 0 ;
   }
   var imgSrc = imgList[currentIndex].getAttribute('src');
   lightboxItem.style.backgroundImage =`url(${imgSrc})`;
  

}
function prevSlide(){
   currentIndex --;
   if(currentIndex == -1){
      currentIndex = imgList.length-1 ;
   }
   var imgSrc = imgList[currentIndex].getAttribute('src');
   lightboxItem.style.backgroundImage =`url(${imgSrc})`


}
function closeSlide(){
   lightboxContainer.classList.replace('d-flex','d-none');
}

next.addEventListener('click', nexdSlide);
prev.addEventListener('click' , prevSlide);
clos.addEventListener('click',closeSlide);

document.addEventListener('keydown' ,function(e){
   if(e.key == 'ArrowRight'){
      nexdSlide();
   }else if(e.key =='ArrowLeft'){
      prevSlide();
   }else if(e.key =='Enter'){
      closeSlide();
   }
})
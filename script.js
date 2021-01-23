const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 147;
const currentFrame = index => (
  `https://firebasestorage.googleapis.com/v0/b/marco-suriano.appspot.com/o/${index.toString().padStart(4, '0')}.webp?alt=media&token=3372c0be-e72b-4b71-8130-629f5dce3795`
)

var images = [] // since everything else is 1-indexed, explicitly fill images[0]
function preloadImages() {
  for (let i = 1; i < frameCount; i++) {
    images[i] = new Image();
    images[i].src = currentFrame(i);
  }
};

window.addEventListener("scroll", (event) => {
  let scroll1 = this.scrollY;
  if(scroll1>=200){
    canvas.style.opacity = "0"
  }
  else{
    canvas.style.opacity = "1"
  }
  console.log(scroll)
});


const img = new Image()
img.src = currentFrame(1);
canvas.width=1920;
canvas.height=381;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  context.drawImage(images[index], 0, 0); 
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / 200;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});




preloadImages()
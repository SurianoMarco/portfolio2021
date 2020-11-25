const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 160;
const currentFrame = index => (
  `assets/img/parallax/${index.toString().padStart(4, '0')}.png`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
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
canvas.height=1080;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
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
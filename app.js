const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const images = document.querySelector(".images");
const firstBtn = document.querySelector(".first");
const secondBtn = document.querySelector(".second");
const thirdBtn = document.querySelector(".third");

let currentImage = 1;
var i = 1;

automaticSlide();

prevBtn.addEventListener("click", () => {
  prevImage();
});
nextBtn.addEventListener("click", () => {
  nextImage();
});

firstBtn.addEventListener("click", () => {
  images.style.transform = `translateX(-${firstBtn.id * 700}px)`;
  currentImage = 1;
  i = currentImage;
  addActiveClass(firstBtn.id);
});
secondBtn.addEventListener("click", () => {
  images.style.transform = `translateX(-${secondBtn.id * 700}px)`;
  currentImage = 2;
  i = currentImage;
  addActiveClass(secondBtn.id);
});
thirdBtn.addEventListener("click", () => {
  images.style.transform = `translateX(-${thirdBtn.id * 700}px)`;
  currentImage = 3;
  i = currentImage;

  addActiveClass(thirdBtn.id);
});

function nextImage() {
  images.style.transform = `translateX(-${currentImage * 700}px)`;
  if (currentImage < 3) {
    currentImage++;
  } else {
    currentImage = 1;
    images.style.transform = `translateX(0px)`;
  }
  i = currentImage;
  addActiveClass(currentImage - 1);
}
function prevImage() {
  if (currentImage > 1) {
    temp = currentImage - 2;
    images.style.transform = `translateX(-${temp * 700}px)`;
    currentImage--;
  } else {
    temp = 2;
    images.style.transform = `translateX(-${temp * 700}px)`;
    currentImage = 3;
  }
  i = currentImage;
  addActiveClass(currentImage - 1);
}

function addActiveClass(id) {
  const allDots = document.querySelectorAll(".dots button");
  allDots.forEach((dot) => {
    dot.classList.remove("active");
  });
  const activeBtn = document.getElementById(`${id}`);
  activeBtn.classList.add("active");
}
function automaticSlide() {
  setTimeout(function slideImages() {
    images.style.transform = `translateX(-${i * 700}px)`;
    if (i < 3) {
      i++;
      currentImage = i;
    } else {
      i = 1;
      currentImage = 1;
      images.style.transform = `translateX(0px)`;
    }
    addActiveClass(i - 1);
    automaticSlide();
  }, 3000);
}

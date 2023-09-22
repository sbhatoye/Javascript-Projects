// Mood Board and Collection section

let moodIndex = 0;
let outfitIndex = 0;

// access DOM elements for mood board
const moodContainer = document.querySelector(".mood_images");
const moodLeftArrow = document.querySelector("#mood_left_arrow");
const moodRightArrow = document.querySelector("#mood_right_arrow");

// access DOM elements for outfit collection
const outfitContainer = document.querySelector(".outfit_images");
const outfitLeftArrow = document.querySelector("#outfit_left_arrow");
const outfitRightArrow = document.querySelector("#outfit_right_arrow");

// store images data
const moodImages = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
const outfitImages = [
  "outfit1.jpg",
  "outfit2.jpg",
  "outfit3.jpg",
  "outfit4.jpg",
  "outfit5.jpg",
  "outfit6.jpg",
];

// function for mood board
displayMoodImage = (i) => {
  moodContainer.style.backgroundImage = `url(/resources/images/${moodImages[i]})`;
};

// function for outfit collection
displayOutfitImage = (i) => {
  outfitContainer.style.backgroundImage = `url(/resources/images/${outfitImages[i]})`;
};

// event listener for left arrow - mood
moodLeftArrow.addEventListener("click", () => {
  moodIndex--;
  if (moodIndex < 0) {
    moodIndex = moodImages.length - 1;
  }

  displayMoodImage(moodIndex);
});

// event listener for right arrow - mood
moodRightArrow.addEventListener("click", () => {
  moodIndex++;
  if (moodIndex > moodImages.length - 1) {
    moodIndex = 0;
  }

  displayMoodImage(moodIndex);
});

// event listener for left arrow - outfit
outfitLeftArrow.addEventListener("click", () => {
  outfitIndex--;
  if (outfitIndex < 0) {
    outfitIndex = outfitImages.length - 1;
  }

  displayOutfitImage(outfitIndex);
});

// event listener for right arrow - outfit
outfitRightArrow.addEventListener("click", () => {
  outfitIndex++;
  if (outfitIndex > outfitImages.length - 1) {
    outfitIndex = 0;
  }

  displayOutfitImage(outfitIndex);
});

// Rating section

let countDesign = document.getElementById("design_rating");
let countStyle = document.getElementById("style_rating");
let countPattern = document.getElementById("pattern_rating");
console.log(countDesign);

let element = document.getElementById("ratings");

element.addEventListener("click", (e) => {
  if (e.target.classList.contains("increase")) {
    if (e.target.id == "design_increase") {
      changeCount(1, "design_rating");
    }

    if (e.target.id == "style_increase") {
      changeCount(1, "style_rating");
    }

    if (e.target.id == "pattern_increase") {
      changeCount(1, "pattern_rating");
    }
  }

  if (e.target.classList.contains("decrease")) {
    if (e.target.id == "design_decrease") {
      changeCount(-1, "design_rating");
    }

    if (e.target.id == "style_decrease") {
      changeCount(-1, "style_rating");
    }

    if (e.target.id == "pattern_decrease") {
      changeCount(-1, "pattern_rating");
    }
  }
});

changeCount = (num, ratingID) => {
  let ratingDisplay = document.getElementById(ratingID);
  console.log(ratingDisplay);

  if (ratingDisplay == countDesign) {
    if (num === 1) {
      countDesign.innerHTML++;
    }

    if (num === -1) countDesign.innerHTML--;
  }

  if (ratingDisplay == countStyle) {
    if (num === 1) {
      countStyle.innerHTML++;
    }

    if (num === -1) countStyle.innerHTML--;
  }

  if (ratingDisplay == countPattern) {
    if (num === 1) {
      countPattern.innerHTML++;
    }

    if (num === -1) countPattern.innerHTML--;
  }
};

// Comment section

let commentInput = document.querySelector("textarea");
let submitButton = document.querySelector("#submit");
let commentOutput = document.querySelector(".display_comments");

getComment = () => {
  let newComment = document.createElement("p");
  newComment.innerText = commentInput.value;
  newComment.style.borderBottom = "1px solid black";
  commentOutput.appendChild(newComment);

  // Scroll to the bottom to display the newest comment
  commentOutput.scrollTop = commentOutput.scrollHeight;

  // clear out comment box for next input
  commentInput.value = "";
};

// event listener for clicking 'submit' button
submitButton.addEventListener("click", () => {
  getComment();
});

// event listener for pressing enter key on keyboard
commentInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") getComment();
});

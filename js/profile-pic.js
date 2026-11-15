// List of image URLs
const images = [
  { src: "img/linkedin.jpg", weight: 0.5 },
  { src: "img/singapore.jpg", weight: 0.5 },
];

function setRandomImage() {
  const cumulativeWeights = [];
  let currentSum = 0;
  for (const img of images) {
    currentSum += img.weight;
    cumulativeWeights.push(currentSum);
  }

  const totalWeight = cumulativeWeights[cumulativeWeights.length - 1];

  const randomNumber = Math.random() * totalWeight;

  let selectedIndex = -1;
  for (let i = 0; i < cumulativeWeights.length; i++) {
    if (randomNumber < cumulativeWeights[i]) {
      selectedIndex = i;
      break;
    }
  }

  const imgElement = document.getElementById("profileImage");
  imgElement.src = images[selectedIndex].src;
}

// Run immediately (this script is placed right after the <img> tag), so the
// image request starts during HTML parsing instead of after window.onload.
setRandomImage();

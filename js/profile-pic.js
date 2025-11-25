// List of image URLs
const images = [
  { src: "img/linkedin.jpg", weight: 0.25 },
  { src: "img/lego_wings.jpg", weight: 0.15 },
  { src: "img/eagle_lake.png", weight: 0.3 },
  { src: "img/singapore.jpg", weight: 0.3 },
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

// Set the random image on page load
window.onload = setRandomImage;

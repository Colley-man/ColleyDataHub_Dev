// Define the prices for each data package in Ghana cedis
const dataPackagePrices = {
    "1GB": 60,
    "2GB": 120,
    "3GB": 180,
    "5GB": 240,
    "6GB": 300,
    "10GB": 360,
    "15GB": 480,
    "20GB": 600,
    "25GB": 720,
    "30GB": 840,
    "35GB": 960,
    "40GB": 1080,
    "45GB": 1200,
    "50GB": 1320,
    "60GB": 1440,
    "65GB": 1560,
    "70GB": 1680,
    "100GB": 1800
};

// Function to handle the selection of a data package
function selectDataPackage(packageSize) {
    const price = dataPackagePrices[packageSize];
    alert(`The price of ${packageSize} is GHS ${price}.`);
}

// Function to handle the purchase of a data bundle
function buyBundle(bundleName, bundlePrice) {
    alert(`You have selected the ${bundleName} for GHS ${bundlePrice}.`);
    // Add additional logic for handling the purchase
}

// Example usage: Attach event listeners to buttons
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".bundle button");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const packageSize = event.target.textContent;
            selectDataPackage(packageSize);
        });
    });
});
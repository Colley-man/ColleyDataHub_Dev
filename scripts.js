// Define the prices for each data package
const dataPackagePrices = {
    "1GB": 5,
    "2GB": 10,
    "3GB": 15,
    "5GB": 20,
    "6GB": 25,
    "10GB": 30,
    "15GB": 40,
    "20GB": 50,
    "25GB": 60,
    "30GB": 70,
    "35GB": 80,
    "40GB": 90,
    "45GB": 100,
    "50GB": 110,
    "60GB": 120,
    "65GB": 130,
    "70GB": 140,
    "100GB": 150
};

// Function to handle the selection of a data package
function selectDataPackage(packageSize) {
    const price = dataPackagePrices[packageSize];
    alert(`The price of ${packageSize} is $${price}.`);
}

// Function to handle the purchase of a data bundle
function buyBundle(bundleName, bundlePrice) {
    alert(`You have selected the ${bundleName} for $${bundlePrice}.`);
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
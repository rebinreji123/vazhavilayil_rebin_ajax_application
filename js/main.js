(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  //This information needs to be removed then pulled with an AJAX Call using the Fetch API
  //this is the api url https://swiftpixel.com/earbud/api/infoboxes"

  const infoBoxes = [
    {
      title: 'Noise-cancelling microphones',
      text: 'Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.',
      image: 'images/ear-piece.jpg'
    },
    {
      title: 'Comfortable fit',
      text: 'Three pairs of ultra comfortable silicone tips are included. The tips create an acoustic seal that blocks outside audio and secures the earbuds in place.',
      image: 'images/ear-piece.jpg'
    },
    {
      title: '360 AUDIO',
      text: '360 Audio places sound all around you, while Dolby Head Tracking™ technology delivers an incredible three-dimensional listening experience.',
      image: 'images/ear-piece.jpg'
    },
    {
      title: 'Ultra Fast Charging',
      text: 'Charge your earbuds in 30 minutes or less with our hyper charging technology.',
      image: 'images/ear-piece.jpg'
    },
  ];

    //This information needs to be removed then pulled with an AJAX Call using the Fetch API
    //this is the api url https://swiftpixel.com/earbud/api/materials"

  const materialListData = [
    {
      heading: "Precision-Crafted Polymers",
      description: "Our earbuds are meticulously molded from high-quality plastics, ensuring a blend of elegance, comfort, and resilience that's second to none."
    },
    {
      heading: "Luxurious Silicone Harmony",
      description: "Our uniquely engineered ear tips are cocooned in plush silicone, delivering an opulent embrace for your ears, ensuring an unrivaled fit and exquisite audio experience."
    },
    {
      heading: "Rubberized Cables",
      description: "Experience the unparalleled freedom of movement with our flexible rubber cables that promise durability without compromise."
    },
    {
      heading: "Enhanced Comfort Sensors",
      description: "A touch of magic in the form of built-in microphones and sensors empowers your earbuds to obey your every command, making your audio journey seamless and enchanting."
    },
    {
      heading: "Artistic Mesh Guard",
      description: "Shielded by artful mesh screens, our speakers remain untarnished, keeping your listening experience pristine."
    }
  ];

  //functions
  function modelLoaded() {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function loadInfoBoxes() {

    //make AJAX call here

    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index+1}`);
      
      const titleElement = document.createElement('h2');
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;

      selected.appendChild(titleElement);
      selected.appendChild(textElement);
    });
  }
  loadInfoBoxes();


  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

document.addEventListener('DOMContentLoaded', function() {
  fetchEarbudsData();
});

function fetchEarbudsData() {
  fetch('https://swiftpixel.com/earbud/api/infoboxes and https://swiftpixel.com/earbud/api/materials') // Replace 'API_URL' with the actual API URL
  .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => {
      updateView(data);
  })
  .catch(error => {
      console.error('Error fetching data: ', error);
      // Handle errors here, like showing an error message
  });
}
function updateView(data) {
  // Update the HTML elements with the data from the API
  // Example: document.getElementById('hotspot-1').textContent = data.someProperty;
}
function showLoading() {
  // Code to show loading indicator
}

function hideLoading() {
  // Code to hide loading indicator
}
document.addEventListener('DOMContentLoaded', function() {
  fetchEarbudsData();
});

function showLoadingSpinner() {
  const spinner = document.querySelector('.spinner');
  spinner.style.display = 'block';
}

function hideLoadingSpinner() {
  const spinner = document.querySelector('.spinner');
  spinner.style.display = 'none';
}

function showError(message) {
  const errorContainer = document.getElementById('error');
  errorContainer.textContent = message;
  errorContainer.style.display = 'block';
}

async function fetchEarbudsData() {
  showLoadingSpinner(); // Show spinner before fetching data
  try {
      const response = await fetch('https://swiftpixel.com/earbud/api/infoboxes and https://swiftpixel.com/earbud/api/materials');
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      updateView(data);
  } catch (error) {
      console.error('Fetching data failed:', error);
      showError('Failed to load data. Please try again later.');
  } finally {
      hideLoadingSpinner(); // Hide spinner after fetching data
  }
}

function hideLoadingSpinner() {
  const spinner = document.getElementById('spinner'); // Make sure this ID matches your spinner's ID
  spinner.style.display = 'none';
}


function updateView(data) {
  // Assuming data is an array of objects
  const template = document.getElementById('earbud-template'); // Replace with your template ID
  const container = document.getElementById('earbud-container'); // Container to append items

  data.forEach(item => {
      const clone = template.content.cloneNode(true);
      // Populate clone with item data
      // Example: clone.querySelector('.name').textContent = item.name;
      container.appendChild(clone);
  });
}

function openNav() {
    document.getElementById("myNav").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.display= "none";
  }
  
  window.addEventListener('load', function () {
  const countdownElement = document.querySelector('.countdown');

  const updateCountdown = function (percentage) {
    countdownElement.textContent = `${percentage} / 100`;

    if (percentage === 100) {
      // Hide the preloader and show the website content
      const preloader = document.getElementById('preloader');
      preloader.style.display = 'none';
      // Add any necessary code to show the website content
    }
  };

  let percentage = 0;
  const increment = 1;
  const interval = 60; // in milliseconds

  const countdownInterval = setInterval(function () {
    percentage += increment;
    if (percentage <= 100) {
      updateCountdown(percentage);
    } else {
      clearInterval(countdownInterval);
    }
  }, interval);
});

  

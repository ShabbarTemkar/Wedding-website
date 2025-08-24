 var weddingDate = new Date("November 1, 2025 18:00:00").getTime();

    var countdownFunction = setInterval(function() {
      var now = new Date().getTime();
      var distance = weddingDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance > 0) {
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
      } else {
        clearInterval(countdownFunction);
        document.querySelector(".landing-headline").textContent = "Today is the Wedding Day!";
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        document.title = "We finally got hitched";
      }
    }, 1000);
setTimeout(function () {
    document.getElementById('tooltip').style.display = 'none'
}, 3600)
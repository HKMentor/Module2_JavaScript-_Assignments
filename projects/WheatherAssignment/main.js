var weather = prompt("Please select season:\n winter,\n autumn,\n summer,\n spring").toLowerCase();

  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.fontFamily = "Arial, sans-serif";
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.minHeight = "100vh";
  document.body.style.transition = "0.4s ease";

  var card = "";

  if (weather === "winter") {
    document.body.style.backgroundColor = "#e0f7fa";
    card = "<div style='width: 300px; padding: 20px; background-color: white; border-radius: 10px; text-align:center; box-shadow:0 5px 10px rgba(0,0,0,0.2);'>" +
             "<img src='./image/winterGif.gif' style='width:100%; height:180px; border-radius:8px;'><br>" +
             "<h2>❄️ Winter Season</h2>" +
             "<p>Stay cozy! Thandi thandi hawaen hain.</p>" +
           "</div>";
  }
  else if (weather === "autumn") {
    document.body.style.backgroundColor = "#fff3e0";
    card = "<div style='width: 300px; padding: 20px; background-color: white; border-radius: 10px; text-align:center; box-shadow:0 5px 10px rgba(0,0,0,0.2);'>" +
             "<img src='./image/autumngif.gif' style='width:100%; height:180px; border-radius:8px;'><br>" +
             "<h2>🍁 Autumn Season</h2>" +
             "<p>Pattay gir rahe hain, mausam suhana hai.</p>" +
           "</div>";
  }
  else if (weather === "summer") {
    document.body.style.backgroundColor = "#fffde7";
    card = "<div style='width: 300px; padding: 20px; background-color: white; border-radius: 10px; text-align:center; box-shadow:0 5px 10px rgba(0,0,0,0.2);'>" +
             "<img src='./image/summer.jpeg' style='width:100%; height:180px; border-radius:8px;'><br>" +
             "<h2>☀️ Summer Season</h2>" +
             "<p>Garmi ka mausam! Thanda pani zaroor piyen.</p>" +
           "</div>";
  }
  else if (weather === "spring") {
    document.body.style.backgroundColor = "#e8f5e9";
    card = "<div style='width: 300px; padding: 20px; background-color: white; border-radius: 10px; text-align:center; box-shadow:0 5px 10px rgba(0,0,0,0.2);'>" +
             "<img src='./image/springGif.gif' style='width:100%; height:180px; border-radius:8px;'><br>" +
             "<h2>🌸 Spring Season</h2>" +
             "<p>Phool khil rahe hain! Har taraf rang hi rang.</p>" +
           "</div>";
  }
  else {
    document.body.style.backgroundColor = "#ffcdd2";
    card = "<h2 style='color:#b71c1c;'>❌ Invalid Season! Please type: winter, autumn, summer, or spring.</h2>";
  }

  document.write(card);
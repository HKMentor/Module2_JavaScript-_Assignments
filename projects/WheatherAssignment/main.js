//  var weather = prompt("Please select season:\n winter,\n autumn,\n summer,\n spring").toLowerCase();

//   var card = "";

//   if (weather === "winter") {
//     document.body.style.background = "linear-gradient(135deg, #a2d2ff, #e0f7fa)";
//     card = `
//       <div class="card">
//         <img src="./image/winterGif.gif" alt="Winter">
//         <h2>❄️ Winter Season</h2>
//         <p>Stay cozy! Thandi thandi hawaen hain.</p>
//       </div>`;
//   }
//   else if (weather === "autumn") {
//     document.body.style.background = "linear-gradient(135deg, #ffcc80, #ffe0b2)";
//     card = `
//       <div class="card">
//         <img src="./image/autumngif.gif" alt="Autumn">
//         <h2>🍁 Autumn Season</h2>
//         <p>Pattay gir rahe hain, mausam suhana hai.</p>
//       </div>`;
//   }
//   else if (weather === "summer") {
//     document.body.style.background = "linear-gradient(135deg, #fff176, #ffecb3)";
//     card = `
//       <div class="card">
//         <img src="./image/summer.jpeg" alt="Summer">
//         <h2>☀️ Summer Season</h2>
//         <p>Garmi ka mausam! Thanda pani zaroor piyen.</p>
//       </div>`;
//   }
//   else if (weather === "spring") {
//     document.body.style.background = "linear-gradient(135deg, #a5d6a7, #e8f5e9)";
//     card = `
//       <div class="card">
//         <img src="./image/springGif.gif" alt="Spring">
//         <h2>🌸 Spring Season</h2>
//         <p>Phool khil rahe hain! Har taraf rang hi rang.</p>
//       </div>`;
//   }
//   else {
//     document.body.style.background = "linear-gradient(135deg, #ffcdd2, #ef9a9a)";
//     card = `<div class="card"><h2>❌ Invalid Season!</h2>
//             <p>Please type: winter, autumn, summer, or spring.</p></div>`;
//   }

//   document.write(card);
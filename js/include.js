
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Ab header load hone ke baad script.js run karna hoga
    const script = document.createElement("script");
    script.src = "script.js";
    document.body.appendChild(script);
  });

fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
    console.log("Footer loaded");
  });


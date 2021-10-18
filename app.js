import express from "express";

const app = express();

app.get("/", (req, res) => {
  let html = ""
  let text = ""
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      text = `<p>${i} Soy Par!</p>`;
      html += text
    } else {
      text = `<p>${i} Soy Impar!</p>`;
      html += text
    }
  }
  res.send(html)
});

app.listen(3000, () => console.log("Listening on port 3000"));


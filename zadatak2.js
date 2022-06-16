async function main() {
  const root = document.getElementById("root");
  const res = await fetch("https://api.imgflip.com/get_memes");
  const data = await res.json();
  data.data.memes.forEach((memeObj) => {
    div = document.createElement("div");
    div.style.width = "500px";
    div.style.border = "2px solid gray";
    div.style.margin = "0px 30%";

    img = document.createElement("img");
    img.src = memeObj.url;
    img.style.width = "90%";

    title = document.createElement("h1");
    title.style.textAlign = "center";
    title.innerText = memeObj.name;

    div.appendChild(title);
    div.appendChild(img);
    root.appendChild(div);
  });
}

main();

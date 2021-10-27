const body = document.body;
const container = document.createElement("div");
container.className = "container";
container.getAttribute = "style";
document.body.append(container);
container.style.width = "250px";
container.style.height = "250px";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.margin = "50px auto";
const generateBlocks = () => {
  const squareSize = 50;
  for (let i = 0; i < 25; i++) {
    const square = document.createElement("div");
    square.className = "square";
    const left = i % 5;
    const top = (i - left) / 5;
    square.style.left = `${left * squareSize}px`;
    square.style.top = `${top * squareSize}px`;
    square.style.background =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    container.append(square);
  }
};
generateBlocks();

const generateBlocksInterval = () => {
  setInterval(generateBlocks, 1000);
};

generateBlocksInterval();

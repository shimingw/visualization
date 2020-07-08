
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

const rectSize = [100, 100];
context.fillStyle = 'red';
context.beginPath();
context.save();
context.translate(-0.5 * rectSize[0], -0.5 * rectSize[1]);
context.rect(0.5 * canvas.width, 0.5 * canvas.height, ...rectSize);
context.restore();
// context.translate(0.5 * rectSize[0], 0.5 * rectSize[1]);
// context.rect(0.5 * (canvas.width - rectSize[0]), 0.5 * (canvas.height - rectSize[1]), ...rectSize);
context.fill();

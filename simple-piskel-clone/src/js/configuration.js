const canvasSize = {
  '32': 32,
  '64': 64,
  '128': 128,

};

const tools = {
  fillBucket: false,
  stroke: false,
  pencil: false,
  eraser: false,

};

const cordPixel = {
  x0: 0,
  y0: 0,
  x1: 0,
  y1: 0,
};

const realSizeCanvas = '512';

const frame = [];

const noIMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAALUlEQVRYR+3QQREAAAABQfqXFsNnFTizzXk99+MAAQIECBAgQIAAAQIECBAgMBo/ACHo7lH9AAAAAElFTkSuQmCC';

export {canvasSize, tools, cordPixel, realSizeCanvas, frame, noIMG};

//se utiliza para manipular los archivos

const sharp = require('sharp');

sharp('original.png')
  .resize(80)
  .grayscale()
  .toFile("resized.png");
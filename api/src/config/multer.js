const multer = require('multer');
const path = require('path');

module.exports = {
  // Destinando o arquivo ao caminho de armazenamento
  storage: multer.diskStorage({
    // Fazendo isso
    destination: path.resolve(__dirname, '..', 'tmp', 'uploads'),

    // Lendo o tipo e o nome do arquivo
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);

      // Escrevendo o nome do arquivo
      cb(null, `${name}-${Date.now()}${ext}`);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/jpg'];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Formato invalido.'));
    }
  },
};

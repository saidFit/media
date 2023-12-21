
const multer = require('multer');
const path = require('path');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
//   });
  
//   // define file filter
//   const fileFilter = function(req, file, cb) {
//     // accept only image files with specified extensions
//     const allowedFileTypes = /jpeg|jpg|png|gif/;
//     const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = allowedFileTypes.test(file.mimetype);
    
//     if(extension && mimetype) {
//       cb(null, true);
//     } else {
//       cb( new Error('Error: Only image files with .jpg, .jpeg, .png, or .gif extensions are allowed.'));
    
//     }
//   };
// const upload = multer({ 
//   storage: storage,
//   fileFilter: fileFilter
// });




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
  
  // create multer instance with storage and file filter configurations
  



module.exports = {upload}
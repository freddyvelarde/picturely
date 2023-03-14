import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.join(__dirname, "../assets"));
  },
  filename: (_req, file, cb) => {
    cb(null, new Date().getTime() + file.originalname);
  },
});

const upload = multer({ storage });

export default upload;

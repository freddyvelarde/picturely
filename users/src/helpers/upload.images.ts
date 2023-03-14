// code to upload images to cloudinary cloud
import { v2 as cloudinary } from "cloudinary";
import { cloud_name, api_key, api_secret } from "../config/dotenv";
cloudinary.config({
  secure: true,
  api_key,
  api_secret,
  cloud_name,
});

// cloudinary.config({
//   cloud_name: 'sample',
//   api_key: '874837483274837',
//   api_secret: 'a676b67565c6767a6767d6767f676fe1',
//   secure: true
// });

interface Return {
  response: boolean;
  img_url?: string;
  img_id?: string;
}

export class UploadImages {
  private file_path: string;

  constructor(file_path: string) {
    this.file_path = file_path;
  }

  async uploadImages(): Promise<Return> {
    try {
      const image = await cloudinary.uploader.upload(this.file_path);
      return {
        response: true,
        img_url: image.secure_url,
        img_id: image.public_id,
      };
    } catch (err) {
      console.warn(err);
      return { response: false, img_id: "", img_url: "" };
    }
  }
}

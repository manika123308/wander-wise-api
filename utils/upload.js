import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const uploadFile = async (Path, folder) => {
    const result = await cloudinary.uploader.upload(Path, {
        folder,
        resource_type: "auto",
        overwrite: false,
        use_filename: true,
        unique_filename: true,
    });

    fs.unlinkSync(Path);

    return result;

};
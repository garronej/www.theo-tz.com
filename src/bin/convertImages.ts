import { imageConverter } from "./imageConverter";
import { join } from "path";


imageConverter({
	"acceptedFileExtensions": [".jpg"],
	"pathToAssets": join(__dirname, "..", "assets", "img"),
	"pathToConvertedImages": join(__dirname, "..", "assets", "webp"),
	"convertTo": "webp",
	"overrideIfConvertedImagesExit": true
});



import {generateMediaFile} from "./generateMediaFile";
import {join} from "path";

generateMediaFile({
	"acceptedFileExtensions": [".webp"],
	"mediaPath": join(__dirname, "..", "assets", "webp", "gallery"),
	"generatedFilePath": join(__dirname, ".."),
	"generatedFileName": "generatedWebpExports"
});

generateMediaFile({
	"acceptedFileExtensions": [".jpg"],
	"mediaPath": join(__dirname, "..", "assets", "img", "gallery"),
	"generatedFilePath": join(__dirname, ".."),
	"generatedFileName": "generatedImgExports"
});



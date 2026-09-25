import { Camera } from "lucide-react";
const PhotosVideos = ()=> {

    return (
    <div className="w-full md:w-2xl h-70">
  {/* Upload Area */}
  <label
    htmlFor="propertyPhotos"
    className="
      flex flex-col items-center justify-center
      w-full h-44
      border-2 border-dashed border-gray-300
      rounded-xl
      bg-gray-50
      cursor-pointer
      hover:bg-gray-100
      transition
    "
  >
    {/* Icon */}
    <div className="mb-3 text-gray-400">
      <Camera className="w-15 h-15 bg-transparent"></Camera>
    </div>

    {/* Text */}
    <p className="text-sm text-gray-600 mb-3">
      Drag and drop your photos here
    </p>

    {/* Browse Button */}
    <span
      className="
        px-5 py-2
        text-sm font-medium
        text-white
        bg-blue-500
        rounded-md
        hover:bg-blue-600
        transition
      "
    >
      Browse Files
    </span>

    {/* Actual Input */}
    <input
      id="propertyPhotos"
      type="file"
      accept="image/png,image/jpeg"
      multiple
      className="hidden"
    />
  </label>

  {/* Information */}
  <p className="mt-3 text-sm text-gray-600">
    Upload high-quality landscape photos (JPEG, PNG, up to 10MB each).
    Min. 5 photos recommended.
  </p>
</div>
    )

}

export default PhotosVideos;
import { Camera } from "lucide-react";
import {useContext} from 'react';
import { PropertyFormContext } from "../../context/PropertyUploadContext";
const PhotosVideos = ()=> {
   const {formData,setFormData} = useContext(PropertyFormContext);
   const handleChange = async (e)=>{

     const files = Array.from(e.target.files);
     if(formData.photos.length + files.length > 3){
      alert("maximum 3 photos are allowd");
      return;
     }
    

    const cloudName="q3n5przz";
    const upload_preset = "roomly_property_image";
    const uploadUrl =
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

   

   
    const uploadPhotos = [];

    for(const file of files){

      const data = new FormData;
      data.append("file",file);
      data.append("upload_preset",upload_preset);

       const response = await fetch(uploadUrl,{
        method:"POST",
        body:data
       });

       const result = await response.json();

       uploadPhotos.push({
        url:result.secure_url,
        publicId:result.public_id
       })
    }

    console.log(uploadPhotos);
    setFormData((prev)=>({
      ...prev,
      photos:[...prev.photos,...uploadPhotos]
    }))
    }
   

    return (
      <div className="w-full md:w-2xl">

      {/* ================= EMPTY STATE ================= */}
      {formData.photos.length === 0 && (
        <>
          <label
            htmlFor="propertyPhotos"
            className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
          >
            <div className="mb-3 text-gray-400">
              <Camera className="w-15 h-15" />
            </div>

            <p className="text-sm text-gray-600 mb-3">
              Drag and drop your photos here
            </p>

            <span className="px-5 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition">
              Browse Files
            </span>

            <input
              id="propertyPhotos"
              type="file"
              multiple
              accept="image/png,image/jpeg"
              onChange={handleChange}
              className="hidden"
            />
          </label>

          <p className="mt-3 text-sm text-gray-600">
            Upload high-quality landscape photos (JPEG, PNG, up to 10MB
            each). Maximum 5 photos.
          </p>
        </>
      )}

      {/* ================= PHOTO PREVIEW ================= */}
      {formData.photos.length > 0 && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {formData.photos.map((photo, index) => (
              <div
                key={photo.publicId}
                className="relative h-32 rounded-lg overflow-hidden border border-gray-200"
              >
                <img
                  src={photo.url}
                  alt={`Property ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* ================= ADD MORE ================= */}
          {formData.photos.length < 5 && (
            <label
              htmlFor="propertyPhotos"
              className="mt-4 flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
            >
              <span className="text-sm font-medium text-gray-600">
                + Add More Photos
              </span>

              <input
                id="propertyPhotos"
                type="file"
                multiple
                accept="image/png,image/jpeg"
                onChange={handleChange}
                className="hidden"
              />
            </label>
          )}

          <p className="mt-3 text-sm text-gray-500">
            {formData.photos.length} / 3 photos uploaded
          </p>
        </>
      )}
    </div>
  );
    

    

}

export default PhotosVideos;
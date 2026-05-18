import { GalleryImage } from "../shared/ImageGallery";
import ImageGallery from "../shared/ImageGallery";
import { folderImages } from "../shared/CloudinaryGallery";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "demo";

function cloudinaryUrl(publicId: string) {
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${publicId}.jpg`;
}

export default function Portraits() {
  const images: GalleryImage[] = (folderImages.portraits || []).map((img: { publicId: string; caption: string }) => ({
    img: cloudinaryUrl(img.publicId),
    full: cloudinaryUrl(img.publicId),
    title: img.caption,
    lightboxGroup: "portraits-gallery"
  }));
  return (
    <div className="min-h-screen bg-white flex flex-col items-left pt-32">
      <div className="pt-24 w-full flex flex-col items-center">
        <h1 className="text-4xl font-semibold mb-8 text-gray-900">Portraits</h1>
        <ImageGallery images={images} />
      </div>
    </div>
  );
}
// import CloudinaryGallery from "../shared/CloudinaryGallery";
// export default function Portraits(){
//   return (
//     <div className="min-h-screen bg-white flex flex-col items-left pt-32">
//       <div className="pt-24 w-full flex flex-col items-center">
//         <h1 className="text-4xl font-semibold mb-8 text-gray-900">Portraits</h1>
//         <CloudinaryGallery folder="portraits" />
//       </div>
//     </div>
//   );
// }

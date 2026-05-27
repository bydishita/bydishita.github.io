const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "demo";

type captionImage = {
  caption: string; 
  publicId: string; 
}

export const folderImages: Record<string, captionImage[]> = {
  graduation: [
    {caption: "samantha", publicId: "v1769728429/IMG_0194_h9mmpc"},
    {caption: "jennifer", publicId: "v1769040508/IMG_5272_v1ov90"},

  ],
  events: [
    {caption: "beautiful", publicId: "v1769040508/IMG_5272_v1ov90"},
    {caption: "john", publicId: "v1769727518/IMG_5374_vyklf8"}
  ],
  portraits: [
    {caption: "family", publicId: "v1769040508/IMG_5272_v1ov90"},
    {caption: "color coded", publicId: "v1769727518/IMG_5374_vyklf8"}, 
    {caption: "february", publicId: "v1769727517/IMG_5356_n4ckdk"}, 
    {caption: "", publicId: "v1769728429/IMG_0194_h9mmpc"},     
  ],
  more: [
  {caption: "baby", publicId: "v1769040508/IMG_5272_v1ov90"},
    {caption: "dog1", publicId: "v1769040508/IMG_5272_v1ov90"}
  ]
};

function thumbUrl(publicId: string) {
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${publicId}.jpg`;
}

function fullUrl(publicId: string) {
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${publicId}.jpg`;
}



export default function CloudinaryGallery({ folder }: { folder: string }) {
  const images = (folderImages[folder] || []).slice(0, 12);
  const setId = folder;
  return (
    <div className="gallery w-full max-w-5xl mx-auto px-2 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((item, idx) => (
        <a
          key={item.publicId + idx}
          href={fullUrl(item.publicId)}
          data-lightbox={setId}
          data-title={item.caption}
          className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          <img
            className="example-image w-full aspect-[4/3] object-cover"
            src={thumbUrl(item.publicId)}
            alt={item.caption || `${folder} photo ${idx + 1}`}
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
}

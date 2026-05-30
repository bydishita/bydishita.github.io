const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "demo";

type captionImage = {
  caption: string; 
  publicId: string; 
}

// 21, 26, 17 should be at 1, 9, 17 
export const folderImages: Record<string, captionImage[]> = {
  graduation: [
    {caption: "uc santa cruz", publicId: "v1780175546/IMG_1987_dfzs1t"},
    {caption: "beach", publicId: "v1780175546/IMG_6755_xwrvti"},
    {caption: "five grads at s&e bridge", publicId: "v1780175556/IMG_8950_jwxsm3"},
    {caption: "natural bridges", publicId: "v1780175543/IMG_3754_gfbmzm"},
    {caption: "three grads at mchenry library", publicId: "v1780175790/IMG_6024_lx9gdn"},
    {caption: "baskin engineering", publicId: "v1780175543/IMG_1311_twqjho"},
    {caption: "east field", publicId: "v1780175550/IMG_8344_x4uaw3"},
    {caption: "birds and the beach", publicId: "v1780175554/IMG_9154_nzi4x3"},
    {caption: "", publicId: "v1780175550/IMG_8123_fnfrdh"},
    {caption: "natural sciences", publicId: "v1780175544/IMG_0692_n5h5yy"},
    {caption: "mchenry library", publicId: "v1780175545/IMG_5883_gcwtdo"},
    {caption: "third floor of s&e", publicId: "v1780175792/IMG_1787_t2h9zx"},
    {caption: "in the lab", publicId: "v1780175558/IMG_5472_lbwbwb"},
    {caption: "", publicId: "v1780175556/IMG_8896_przzr3"},
    {caption: "bring props", publicId: "v1780175550/IMG_8009_bynlpg"},
    {caption: "cap throw", publicId: "v1780175558/IMG_8640_vdfuon"},
    {caption: "sunset at the beach", publicId: "v1780175541/IMG_2629_dcj2dq"},
    {caption: "a lecture hall", publicId: "v1780175793/IMG_0913_bh4ngj"},
    {caption: "s&e bridge", publicId: "v1780175549/IMG_7872_u6iiyg"},

  ],
  events: [
    {caption: "beautiful", publicId: "v1769040508/IMG_5272_v1ov90"},
  ],
  portraits: [
    {caption: "family", publicId: "v1769040508/IMG_5272_v1ov90"},
    {caption: "color coded", publicId: "v1769727518/IMG_5374_vyklf8"}, 
    {caption: "february", publicId: "v1769727517/IMG_5356_n4ckdk"}, 
    {caption: "", publicId: "v1769728429/IMG_0194_h9mmpc"},     
  ],
  more: [
  {caption: "baby", publicId: "v1769040508/IMG_5272_v1ov90"},
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

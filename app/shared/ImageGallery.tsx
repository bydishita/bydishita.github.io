import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export type GalleryImage = {
  img: string; // thumbnail or display image
  full?: string; // full-size image (optional)
  title?: string;
  lightboxGroup?: string; // optional group name for lightbox
};

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  // All images in the same gallery group for lightbox
  const lightboxGroup = images[0]?.lightboxGroup || "gallery";
  return (
    <Box sx={{ width: '100%', maxWidth: 900, margin: '0 auto', overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item, idx) => (
          <ImageListItem key={item.img}>
            <a
              href={item.full || item.img}
              data-lightbox={item.lightboxGroup || lightboxGroup}
              data-title={item.title || ''}
              style={{ display: 'block' }}
            >
              <img
                src={item.img}
                alt={item.title || ''}
                loading="lazy"
                style={{ width: '100%', display: 'block', cursor: 'pointer' }}
              />
            </a>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default function buildImagePaths(): { images: string[]; thumbnails: string[] } {
  const basePath = "images/image-product";
  const numberOfImages = 5;

  const images = [];
  const thumbnails = [];

  for (let i = 1; i <= numberOfImages; i++) {
    images.push(`${basePath}-${i}.jpg`);
    thumbnails.push(`${basePath}-${i}-thumbnail.jpg`);
  }

  return { images, thumbnails };
}

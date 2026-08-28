export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryData {
  eyebrow: string;
  subheading: string;
  photos: GalleryPhoto[];
}

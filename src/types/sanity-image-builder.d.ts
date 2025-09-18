// Type definitions for Sanity Image Builder
declare module '@sanity/image-url/lib/types/builder' {
  interface ImageUrlBuilder {
    url(): string;
    width(width: number): ImageUrlBuilder;
    height(height: number): ImageUrlBuilder;
    fit(fit: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'): ImageUrlBuilder;
    quality(q: number): ImageUrlBuilder;
    crop(value: string): ImageUrlBuilder;
    auto(format: string): ImageUrlBuilder;
    format(format: 'jpg' | 'png' | 'webp' | 'avif'): ImageUrlBuilder;
  }
}

declare module '@sanity/image-url/lib/types' {
  export * from '@sanity/image-url/lib/types/builder';
}

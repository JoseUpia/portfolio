export interface Certificate {
  slug: string;
  title: string;
  issuer: string;
  issued: string;
  dateTime: string;
  duration?: string;
  previews?: readonly string[];
}

export interface CertificateGalleryProps {
  certificates: readonly Certificate[];
  presentation?: 'featured' | 'catalog';
}

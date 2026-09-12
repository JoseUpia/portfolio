export interface BaseLayoutProps {
  title?: string;
  description?: string;
  socialImage?: string;
  pageType?: 'website' | 'profile';
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

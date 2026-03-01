export interface PortfolioImage {
  src: string;
  alt?: string;
  caption?: string;
  srcset?: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  images: PortfolioImage[];
}

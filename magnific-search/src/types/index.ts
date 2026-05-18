export interface Asset {
  id: string;
  title: string;
  image_url: string;
  original_magnific_url: string;
  type: string;
  format: string;
  width: number;
  height: number;
  prompt?: string;
}

export interface SearchResponse {
  results: Asset[];
  hasMore: boolean;
}

import { NextRequest } from 'next/server';

const generateMockAssets = (query: string, page: number, limit: number) => {
  const assetTypes = ['Photo', 'Vector', 'Illustration', 'Icon', '3D'];
  const formats = ['png', 'jpg', 'svg', 'webp'];
  const orientations = ['landscape', 'portrait', 'square'];
  
  const results = [];
  const startIndex = (page - 1) * limit;
  
  for (let i = 0; i < limit; i++) {
    const id = startIndex + i;
    const type = assetTypes[Math.floor(Math.random() * assetTypes.length)];
    const format = formats[Math.floor(Math.random() * formats.length)];
    const orientation = orientations[Math.floor(Math.random() * orientations.length)];
    
    let width, height;
    switch(orientation) {
      case 'landscape':
        width = Math.floor(Math.random() * 2000) + 1000;
        height = Math.floor(Math.random() * 1000) + 500;
        break;
      case 'portrait':
        width = Math.floor(Math.random() * 1000) + 500;
        height = Math.floor(Math.random() * 2000) + 1000;
        break;
      default:
        const size = Math.floor(Math.random() * 1500) + 500;
        width = size;
        height = size;
    }
    
    results.push({
      id: `${id}`,
      title: `${query} ${type.toLowerCase()} ${id}`,
      image_url: `https://picsum.photos/${width}/${height}?random=${id}`,
      original_magnific_url: `https://magnificassets.com/assets/${id}`,
      type,
      format,
      width,
      height,
      prompt: `A beautiful ${query} ${type.toLowerCase()} with modern design elements`,
    });
  }
  
  return results;
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q') || '';
  const page = parseInt(searchParams.get('page') || '1');
  const limit = 20;
  
  if (!query.trim()) {
    return new Response(JSON.stringify({ results: [], hasMore: false }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const results = generateMockAssets(query, page, limit);
  const hasMore = page < 5;
  
  return new Response(JSON.stringify({ results, hasMore }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

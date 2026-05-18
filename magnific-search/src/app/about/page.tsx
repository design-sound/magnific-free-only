export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">About Magnific Search</h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="mb-4">
          Magnific Search is a free tool designed to help creators find high-quality assets from Magnific.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-4">
          We aim to make it easier for designers, developers, and content creators to find the perfect assets
          for their projects without spending hours searching through multiple platforms.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">How It Works</h2>
        <p className="mb-4">
          Our platform indexes free assets from Magnific and allows you to search using keywords, filter by
          asset type, orientation, and sort results based on your preferences.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Privacy</h2>
        <p className="mb-4">
          We do not store your search queries or personal information. All search history is stored locally
          in your browser.
        </p>
      </div>
    </div>
  );
}

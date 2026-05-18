export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">How Magnific Search Works</h1>
      
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
            1
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Enter Your Search Query</h2>
            <p className="text-muted-foreground">
              Type what you're looking for in the search bar - whether it's "book png", "minimal office", 
              or "nature illustration".
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
            2
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Browse Results</h2>
            <p className="text-muted-foreground">
              View free assets from Magnific in a beautiful grid layout. Hover over images to see details.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
            3
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Apply Filters</h2>
            <p className="text-muted-foreground">
              Use filters to narrow down results by asset type (Photos, Vectors, Illustrations, etc.), 
              orientation, and more.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
            4
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Get the Asset</h2>
            <p className="text-muted-foreground">
              Click on any image to be redirected to the original asset page on Magnific where you can 
              download it for free.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
            5
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Optional Features</h2>
            <p className="text-muted-foreground">
              Copy prompts for Midjourney/Flux directly from the asset cards, and access your search 
              history for quick re-searching.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

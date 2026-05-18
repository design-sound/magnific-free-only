import SearchResultCard from './search-result-card';
import { Skeleton } from '@/app/components/ui/skeleton';
import { Button } from '@/app/components/ui/button';
import { useState, useEffect } from 'react';

interface SearchGridProps {
  results: any[];
  isLoading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  searchQuery: string;
}

export default function SearchGrid({ results, isLoading, hasMore, onLoadMore, searchQuery }: SearchGridProps) {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (results.length > 0) {
      setIsInitialLoad(false);
    }
  }, [results]);

  if (isLoading && isInitialLoad && !results.length) {
    return (
      <div className="grid-masonry gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <Skeleton key={index} className="h-64 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (!results.length && !isLoading) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">No results found</h3>
        <p className="text-muted-foreground">
          No free assets matched your search for "{searchQuery}". Try different keywords.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid-masonry gap-4">
        {results.map((result) => (
          <SearchResultCard key={result.id} asset={result} />
        ))}
      </div>

      {isLoading && results.length > 0 && (
        <div className="grid-masonry gap-4 mt-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={`loading-${index}`} className="h-64 w-full rounded-xl" />
          ))}
        </div>
      )}

      {hasMore && !isLoading && (
        <div className="flex justify-center mt-8">
          <Button onClick={onLoadMore} variant="outline">
            Load More
          </Button>
        </div>
      )}
    </>
  );
}

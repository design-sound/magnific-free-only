"use client";

import { useState, useEffect } from "react";
import SearchBar from "@/app/components/search-bar";
import SearchGrid from "@/app/components/search-grid";
import SidebarFilters from "@/app/components/sidebar-filters";
import { useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery);
      performSearch(initialQuery, 1);
    }
  }, [initialQuery]);

  const performSearch = async (query: string, pageNum: number) => {
    if (!query.trim()) {
      setResults([]);
      setHasMore(true);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}&page=${pageNum}`);
      const data = await response.json();

      if (pageNum === 1) {
        setResults(data.results);
      } else {
        setResults(prev => [...prev, ...data.results]);
      }
      
      setHasMore(data.hasMore);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
    performSearch(query, 1);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    performSearch(searchQuery, nextPage);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Find Free Assets from Magnific
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Search for free PNGs, vectors, illustrations, and more
        </p>
        <SearchBar 
          initialValue={initialQuery}
          onSearch={handleSearch} 
          isLoading={isLoading} 
        />
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {["book png", "minimal office", "nature illustration", "abstract shapes"].map((tag) => (
            <button
              key={tag}
              onClick={() => handleSearch(tag)}
              className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-accent transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {searchQuery && (
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
            <SidebarFilters />
          </aside>
          
          <div className="flex-grow">
            <SearchGrid 
              results={results} 
              isLoading={isLoading}
              hasMore={hasMore}
              onLoadMore={loadMore}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      )}

      {!searchQuery && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="bg-muted p-6 rounded-full w-24 h-24 flex items-center justify-center mb-6">
            <MagnifyingGlassIcon className="w-12 h-12 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Search for Free Assets</h2>
          <p className="text-muted-foreground max-w-md">
            Enter a keyword above to find free assets from Magnific. Examples: "book png", "minimal office", "nature illustration"
          </p>
        </div>
      )}
    </div>
  );
}

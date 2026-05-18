"use client";

import { useState, useEffect, useRef } from 'react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Search as SearchIcon, Loader2 } from 'lucide-react';
import { useDebounce } from '@/hooks/use-debounce';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  initialValue?: string;
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export default function SearchBar({ initialValue = '', onSearch, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const debouncedQuery = useDebounce(query, 500);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (debouncedQuery !== undefined) {
      if (debouncedQuery.trim() === '') {
        onSearch('');
      } else {
        onSearch(debouncedQuery);
        router.push(`/?q=${encodeURIComponent(debouncedQuery)}`, { scroll: false });
      }
    }
  }, [debouncedQuery, onSearch, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      router.push(`/?q=${encodeURIComponent(query)}`, { scroll: false });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for free assets... (e.g. book png, minimal office, nature illustration)"
          className="pl-12 pr-12 py-6 text-lg rounded-full shadow-lg"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <SearchIcon className="w-5 h-5 text-muted-foreground" />
        </div>
        {isLoading ? (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Loader2 className="w-5 h-5 animate-spin text-primary" />
          </div>
        ) : (
          <Button
            type="submit"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full h-8 w-8 p-0"
            disabled={!query.trim()}
          >
            <SearchIcon className="w-4 h-4" />
          </Button>
        )}
      </div>
      <div className="mt-2 text-center text-sm text-muted-foreground">
        Press <kbd className="px-2 py-1 bg-muted rounded-md">/</kbd> to focus search
      </div>
    </form>
  );
}

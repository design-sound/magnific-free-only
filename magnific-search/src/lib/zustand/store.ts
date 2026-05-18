import { create } from 'zustand';

interface SearchHistoryItem {
  query: string;
  timestamp: number;
}

interface SearchStore {
  searchHistory: SearchHistoryItem[];
  addToHistory: (query: string) => void;
  clearHistory: () => void;
  removeHistoryItem: (query: string) => void;
}

export const useSearchStore = create<SearchStore>((set, get) => ({
  searchHistory: [],
  
  addToHistory: (query: string) => {
    const currentHistory = get().searchHistory;
    const existingIndex = currentHistory.findIndex(item => item.query === query);
    
    let newHistory;
    if (existingIndex >= 0) {
      // Move to front
      newHistory = [
        { query, timestamp: Date.now() },
        ...currentHistory.filter((_, i) => i !== existingIndex)
      ];
    } else {
      // Add to front
      newHistory = [
        { query, timestamp: Date.now() },
        ...currentHistory
      ].slice(0, 10); // Keep only last 10 items
    }
    
    set({ searchHistory: newHistory });
    
    // Save to localStorage
    try {
      localStorage.setItem('magnific-search-history', JSON.stringify(newHistory));
    } catch (e) {
      console.error('Failed to save search history to localStorage');
    }
  },
  
  clearHistory: () => {
    set({ searchHistory: [] });
    try {
      localStorage.removeItem('magnific-search-history');
    } catch (e) {
      console.error('Failed to clear search history from localStorage');
    }
  },
  
  removeHistoryItem: (query: string) => {
    const newHistory = get().searchHistory.filter(item => item.query !== query);
    set({ searchHistory: newHistory });
    try {
      localStorage.setItem('magnific-search-history', JSON.stringify(newHistory));
    } catch (e) {
      console.error('Failed to update search history in localStorage');
    }
  },
}));

// Load history from localStorage on mount (client-side only)
if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem('magnific-search-history');
    if (saved) {
      const parsed = JSON.parse(saved);
      useSearchStore.setState({ searchHistory: parsed });
    }
  } catch (e) {
    console.error('Failed to load search history from localStorage');
  }
}

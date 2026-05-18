import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { Search, Home, Info, BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary w-8 h-8 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl">Magnific Search</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
            <Home className="w-4 h-4 mr-1" />
            <span>Home</span>
          </Link>
          <Link href="/about" className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
            <Info className="w-4 h-4 mr-1" />
            <span>About</span>
          </Link>
          <Link href="/how-it-works" className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
            <BookOpen className="w-4 h-4 mr-1" />
            <span>How It Works</span>
          </Link>
        </nav>
        
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild className="hidden md:flex">
            <Link href="/">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

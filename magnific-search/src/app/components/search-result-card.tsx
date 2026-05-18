'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Copy, Download, Star } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';

interface SearchResultCardProps {
  asset: {
    id: string;
    title: string;
    image_url: string;
    original_magnific_url: string;
    type: string;
    format: string;
    width: number;
    height: number;
    prompt?: string;
  };
}

export default function SearchResultCard({ asset }: SearchResultCardProps) {
  const copyPrompt = () => {
    if (asset.prompt) {
      navigator.clipboard.writeText(asset.prompt);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden cursor-pointer group relative break-inside-avoid mb-4">
          <div className="relative overflow-hidden" style={{ aspectRatio: `${asset.width}/${asset.height}` }}>
            <Image
              src={asset.image_url}
              alt={asset.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div className="text-white">
                <h3 className="font-semibold truncate">{asset.title}</h3>
                <p className="text-sm opacity-80">{asset.width}×{asset.height}</p>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-between items-start">
              <h3 className="font-medium truncate mr-2">{asset.title}</h3>
              <Badge variant="secondary" className="text-xs">
                {asset.type}
              </Badge>
            </div>
            <div className="flex justify-between items-center mt-2">
              <Badge className="text-xs">Free</Badge>
              <span className="text-xs text-muted-foreground">{asset.format.toUpperCase()}</span>
            </div>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{asset.title}</DialogTitle>
          <DialogDescription>
            Asset details and options
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-square">
            <Image
              src={asset.image_url}
              alt={asset.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Details</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li><span className="text-muted-foreground">Type:</span> {asset.type}</li>
                  <li><span className="text-muted-foreground">Format:</span> {asset.format.toUpperCase()}</li>
                  <li><span className="text-muted-foreground">Dimensions:</span> {asset.width}×{asset.height}px</li>
                  <li><span className="text-muted-foreground">Status:</span> Free</li>
                </ul>
              </div>
              
              {asset.prompt && (
                <div>
                  <h3 className="font-semibold">AI Prompt</h3>
                  <p className="mt-2 text-sm bg-muted p-3 rounded-md">{asset.prompt}</p>
                  <Button 
                    onClick={copyPrompt}
                    size="sm" 
                    variant="outline" 
                    className="mt-2"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Prompt for Midjourney/Flux
                  </Button>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                <Button asChild>
                  <Link href={asset.original_magnific_url} target="_blank">
                    <Download className="w-4 h-4 mr-2" />
                    Download from Magnific
                  </Link>
                </Button>
                <Button variant="outline">
                  <Star className="w-4 h-4 mr-2" />
                  Save to Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

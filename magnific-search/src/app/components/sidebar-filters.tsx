'use client';

import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';
import { Select } from '@/app/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Separator } from '@/app/components/ui/separator';

export default function SidebarFilters() {
  const [assetType, setAssetType] = useState('all');
  const [orientation, setOrientation] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Filters</h3>
        <Separator />
      </div>
      
      <div className="space-y-4">
        <div>
          <Label>Asset Type</Label>
          <Select value={assetType} onChange={(e) => setAssetType(e.target.value)} className="mt-2">
            <option value="all">All Types</option>
            <option value="photos">Photos</option>
            <option value="vectors">Vectors</option>
            <option value="illustrations">Illustrations</option>
            <option value="icons">Icons</option>
            <option value="3d">3D Models</option>
          </Select>
        </div>
        
        <div>
          <Label>Orientation</Label>
          <RadioGroup value={orientation} onValueChange={setOrientation} className="grid grid-cols-3 gap-2 mt-2">
            <div>
              <RadioGroupItem value="all" id="all" className="peer sr-only" />
              <Label 
                htmlFor="all" 
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-3 hover:bg-accent hover:text-accent-foreground cursor-pointer"
              >
                All
              </Label>
            </div>
            <div>
              <RadioGroupItem value="landscape" id="landscape" className="peer sr-only" />
              <Label 
                htmlFor="landscape" 
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-3 hover:bg-accent hover:text-accent-foreground cursor-pointer"
              >
                Landscape
              </Label>
            </div>
            <div>
              <RadioGroupItem value="portrait" id="portrait" className="peer sr-only" />
              <Label 
                htmlFor="portrait" 
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-3 hover:bg-accent hover:text-accent-foreground cursor-pointer"
              >
                Portrait
              </Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <Label>Sort By</Label>
          <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="mt-2">
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="most-downloaded">Most Downloaded</option>
          </Select>
        </div>
      </div>
      
      <Button variant="outline" className="w-full">
        Reset Filters
      </Button>
    </div>
  );
}

// types.ts
export interface Breed {
    name: string;
    subBreeds: string[];
  }
  
  export interface BreedImage {
    breed: string;
    image: string;
  }
  
  export interface AppState {
    selectedBreeds: string[];
    maxImages: number;
    breedList: Breed[];
    breedImages: Record<string, string[]>;
  }

  export interface HTMLImageAttribute {
    alt?: string;
    crossorigin?: 'anonymous' | 'use-credentials' | '';
    decoding?: 'async' | 'auto' | 'sync';
    height?: Number;
    sizes?: string;
    src?: string;
    srcset?: string;
    usemap?: string;
    width?: Number;
  }
  
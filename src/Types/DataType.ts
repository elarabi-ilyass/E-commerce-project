export type TCategory = {
        id?: number;
        title?: string;
        image?: string;
        alt?: string;
      }; 

      export type TProduct = {
        id: number;
        title: string;
        product: string;
        image: string;
        price: string;
        alt: string;
        imagePosition?: {
          [key?: string]: string; // Example: "image1", "image2", etc.
        };
        type?:{
          [key?: string]: string; 
        }
      }; 
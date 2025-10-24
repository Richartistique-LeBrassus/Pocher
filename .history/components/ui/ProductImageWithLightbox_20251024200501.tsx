"use client";
import Image from "next/image";
import Lightbox from "@/components/ui/Lightbox";

interface Props {
  images: { src: string }[];
  productName: string;
}

export default function ProductImageWithLightbox({ images, productName }: Props) {
  return (
    /*<div className="relative w-full h-[80vh] lg:h-[83vh] overflow-hidden">
      <Lightbox images={images} productName={productName}>
        <div className="absolute inset-0 cursor-pointer">
          <Image
            src="/images/1.webp"
            alt="main image"
            width={2000}
            height={850}
            className="object-cover w-full h-full rounded-b-4xl"
            priority
          />
        </div>
      </Lightbox>
    </div>
    
    <div className="relative w-full h-[632.5px] lg:h-[656.52px] xl:h-[712.5px] 2xl:h-[710.5px] overflow-hidden">
    */
    <div className="relative w-full h-[632.5px] lg:h-[656.52px] xl:h-[712.5px] 2xl:h-[710.5px] overflow-hidden">
      <Lightbox images={images} productName={productName}>
        <div className="absolute inset-0 cursor-pointer">
          <Image
            src="/images/trial-1.webp"
            alt="main image"
            width={2000}
            height={850}
            className="object-cover sm:object-cover w-full h-full"
            priority
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-60 bg-linear-to-b from-neutral-950 
        to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-42 bg-linear-to-t from-neutral-950 
        to-transparent pointer-events-none" />
      </Lightbox>
    </div>
  );
}
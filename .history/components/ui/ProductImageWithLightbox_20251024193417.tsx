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
            className="object-cover rounded-b-4xl"
            priority
          />
        </div>
      </Lightbox>
    </div>*/
    <div className="relative w-full h-[190vw] lg:h-[83vh] overflow-hidden">
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
  );
}
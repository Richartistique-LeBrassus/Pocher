import { notFound } from 'next/navigation';
import React from 'react';
import AddToBasketButton from '@/components/ui/AddToBasketButton';
import Image from 'next/image';
import "@/app/globals.css";
import Head from 'next/head';
import type { Metadata } from 'next';
import ProductImageWithLightbox from '@/components/ui/ProductImageWithLightbox';
import DelayedPage from '@/components/ui/DelayedPage';
import FadeInSection from '@/components/ui/FadeInSection';
import trial from "/images/porsche-badge.png";


interface ImageType {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const images = [
  { src: "/images/1.webp" },
  { src: "/images/4.webp" },
  { src: "/images/5.webp" },
  { src: "/images/6.webp" },
];

export async function generateMetadata(
  { params }: { params: Promise<{ slug: "porsche-917k-gulf-edition" }> }
): Promise<Metadata> {
  const { slug } = await params;
  //const product = "porsche-917k-gulf-edition";

  //if (!product) {
  //  return {
  //    title: "Product Not Found | Pocher",
  //    description: "The requested product could not be found.",
  //  };
  //}

  return {
    title: `HK118 Porsche 917K - Gulf Edition | Pocher`,
    description: `Explore the HK118 Porsche 917K - Gulf Edition in 1:18 scale. Premium craftsmanship, limited stock.`,
    openGraph: {
      title: `HK118 Porsche 917K - Gulf Edition | Pocher`,
      description: `Explore the HK118 Porsche 917K - Gulf Edition in 1:18 scale. Premium craftsmanship, limited stock.`,
      images: "../../public/images/1.webp",
/*        ? [
            {
              url: imageUrl(product.images[0]).url(),
              width: 1200,
              height: 630,
              alt: product.name,
            },
          ]
        : [],*/
    },
  };
}

export default async function ProductPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = "HK118 Porsche 917K - Gulf Edition";

  //if (!product?.name || product.price == null) return notFound();
//
  //const isOutOfStock = product.stock != null && product.stock <= 0;
//
  //const images: ImageType[] = (product.images || []).map((img: Record<string, unknown>) => ({
  //  src: imageUrl(img).url() || '',
  //  alt: (img.alt as string) ?? 'Product Image',
  //}));

  //const mainImage = images[0]?.src || '/images/logo.png';
  //const secondImage = images[1]?.src || '';
  //const thirdImage = images[2]?.src || '';
  const fourthImage = "/images/5.webp";
  const fifthImage = "/images/brillen.webp";
  const sixthImage = "/images/6.webp";
  // const seventhImage = images[6]?.src || '';

  return (
    <DelayedPage>
      <>
        <Head>
          <link rel="preload" href="/images/1.webp" as="image" />
          {/*{secondImage && <link rel="preload" href={secondImage} as="image" />}*/}
          {/*{thirdImage && <link rel="preload" href={thirdImage} as="image" />}*/}
          {/*{fourthImage && <link rel="preload" href={fourthImage} as="image" />}*/}
          {/*{fifthImage && <link rel="preload" href={fifthImage} as="image" />}*/}
          {/*{sixthImage && <link rel="preload" href={sixthImage} as="image" />}*/}
          {/*{seventhImage && <link rel="preload" href={seventhImage} as="image" />}*/}
        </Head>

        <div className="w-full min-h-screen">
          <div className="flex flex-col w-full min-h-fit gap-1">

            <div
              className={`relative w-full h-[80vh] lg:h-[83vh] `}
            >
              <ProductImageWithLightbox  images={images} productName="Porsche 917k Gulf Edition" />
            </div>

            <div className="relative grid grid-cols-1 gap-36 h-fit 
            min-h-[730px] max-h-[800px]
            w-full max-w-3xl mx-auto mt-12 sm:mt-20 md:mt-28">
              <div className="relative w-full h-[400px] lg:h-fit px-5 py-6 sm:px-12">
                <FadeInSection>
                <div                   
                  className="flex flex-col justify-between gap-7 w-full h-[95%] uppercase text-center text-neutral-100"
                >
                  <p className="italic text-[27px] sm:text-3xl text-white">
                    "Michael Delaney's Porsche"
                  </p>
                  <h1 className="font-extrabold text-[27px] 
                   text-amber-400 sm:text-3xl md:text-4xl max-w-lg mx-auto"
                  >
                    HK118 Porsche 917K - Gulf Edition
                  </h1>
                  <p className="text-sm text-amber-50">1:18 Scale</p>
                  <p className="text-xl text-red-100">£ 789.99</p>

                  <div className="flex flex-col gap-8 sm:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12">
                    <AddToBasketButton product={product} />
                    <p className="text-sm px-1 max-w-[560px] mx-auto text-white">
                      The striking Gulf livery is inspired by the car driven 
                      by Motorsport legends Derek Bell and Jo Siffert at the 1971 1000km Monza. 
                      One of the fastest racing cars of all time, 
                      it came second in this race, 
                      falling behind its sister Porsche 917K driven by 
                      Pedro Rodriguez and Jackie Oliver.
                    </p>

                    <div className="flex flex-col text-sm tracking-tight gap-1 text-amber-50">
                      <p>More Details</p>
                      <p>Customer Service</p>
                      <p>Shipping & Returns</p>
                    </div>
                    <p className="text-sm tracking-wide text-neutral-100">
                      Average Delivery Time: 2-4 Working Days
                    </p>
                  </div>
                </div>
                </FadeInSection>
              </div>

            </div>

           

            <FadeInSection>
            <div className="py-12 md:py-20 xl:py-28 
            2xl:py-36 grid grid-cols-2 gap-1 sm:inline-flex 
            sm:justify-center w-full lg:gap-5 mx-auto">
              <div className="relative w-full h-[85vw] sm:h-auto sm:w-[45vh] md:w-[70vh]">
                  <Image
                    className="object-cover w-full h-full rounded-4xl"
                    src="/images/long.webp"
                    alt="upper product-view"
                    layout="fill"
                    loading="lazy"
                  />
              </div>
              <div className="relative w-full h-[85vw] sm:h-auto sm:w-[45vh] md:w-[70vh]">
                <Image
                  className="object-cover w-full h-full rounded-4xl"
                  src="/images/have.jpg"
                  alt="decorative image"
                  width={1168}
                  height={1752}
                  loading="lazy"
                />
              </div>
            </div>
            </FadeInSection>

            <FadeInSection>
            <div className="py-12 md:py-20 xl:px-8 2xl:p-16 xl:py-28 2xl:py-36 grid grid-cols-3 gap-1
              lg:gap-5 w-full"
            >              
              {[fourthImage, fifthImage, sixthImage].map((imgSrc, i) => (
                <div
                  key={i}
                  className="relative h-[42.5vw] sm:h-[32vw] lg:h-[25vw] xl:h-[20vw] 2xl:h-[17vw] w-full"
                >
                  {imgSrc && (
                    <Image
                      className="object-cover w-full h-full rounded-4xl sm:rounded-full"
                      src={imgSrc}
                      alt="product"
                      layout="fill"
                      loading="lazy"
                    />
                  )}
                </div>                
              ))}              
            </div>
            </FadeInSection>

            <FadeInSection>
            <div className="mt-12 md:mt-20 xl:mt-28 2xl:mt-36 
            relative w-full h-[70vw] sm:h-[47vw] md:h-[43vw] lg:h-[40vw] xl:h-[34vw] mx-auto">
                <Image
                  src="/images/trial.jpg"
                  className="rounded-t-4xl xl:rounded-t-full object-center"
                  alt="Decorative banner image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  priority
                />
            </div>
            </FadeInSection>
          </div>
        </div>
      </>
    </DelayedPage>
  );
}
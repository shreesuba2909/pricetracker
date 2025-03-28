import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import Link from "next/link"; // ✅ Import Link from Next.js
import { getAllProducts } from "@/lib/actions";
import ProductsCard from "@/components/ProductsCard";

export const revalidate = 10;

export default async function Home() {
  const allProduct = await getAllProducts();

  return (
    <>
      <section className="px-6  md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-6">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Unleash the Power of <span className="text-primary">PriceWise</span>
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            <Searchbar />

            {/* ✅ Add the Price Comparer Button Here */}
            <Link href="http://localhost:5005" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Price Comparer
                </button>
              </a>
            </Link>
          </div>
          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProduct?.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

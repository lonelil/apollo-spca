import Image from "next/image";
import apollologo from "@/images/apollo.webp";
import { data } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex h-[50vh] flex-col items-center justify-center">
        <Image
          src={apollologo}
          alt="Apollo Logo"
          width={250}
          height={250}
          className="rounded-[23.3%]"
        />

        <h1 className="text-2xl font-semibold mt-8">
          Apollo SPCA 2020 Community Photo Album
        </h1>
        <h2>
          Celebrating Our Animal Companions: The Apollo SPCA 2020 Community
          Photo Album
        </h2>
      </div>
      <div className="container columns-3xs">
        {data.map((image, i) => {
          return (
            <Image
              src={image.src}
              alt={image.name}
              key={i}
              width={image.width}
              height={image.height}
              className="mb-4 aspect-auto w-full rounded-md"
            />
          );
        })}
      </div>
      <div className="mt-8 flex flex-col items-center justify-center bg-secondary p-8">
        <h1 className="font-semibold">
          Made with ❤️ by <Link href="https://lonelil.com">lonelil</Link>
        </h1>
        <Link
          href={"https://github.com/lonelil/apollo-spca"}
          className="text-sm"
        >
          View on GitHub
        </Link>
      </div>
    </>
  );
}

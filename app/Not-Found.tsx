import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="text-center">

        <h1 className="text-8xl font-bold text-[#C2F800]">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-400">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-lg bg-[#C2F800] px-6 py-3 font-bold text-black transition hover:bg-[#d4ff33]"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
};

export default NotFound;
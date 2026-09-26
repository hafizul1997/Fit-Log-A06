const Loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center">

        <span className="loading loading-spinner loading-lg text-[#C2F800]"></span>

        <p className="mt-4 text-sm text-gray-400">
          Loading workouts...
        </p>

      </div>
    </main>
  );
};

export default Loading;
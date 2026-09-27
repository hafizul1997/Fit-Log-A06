"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import { WorkoutContext } from "@/app/Components/Context/WorkoutContext";

const SavedNavButton = () => {
  const router = useRouter();

  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "SavedNavButton must be used inside WorkoutProvider"
    );
  }

  const { savedWorkouts } = context;

  return (
      <button
      onClick={() => router.push("/my-plan")}
      className="btn btn-neutral border-none bg-transparent text-white hover:bg-transparent btn-xs sm:btn-sm md:btn-md lg:btn-lg gap-2 "
    >
      Saved

      <div className="badge badge-xs rounded-full border border-gray-500 bg-transparent text-white   sm:badge-sm md:badge-md lg:badge badge-lg ">
        {savedWorkouts.length}
      </div>
    </button>
  );
};

export default SavedNavButton;
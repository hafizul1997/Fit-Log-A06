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
      className="btn btn-neutral gap-2 border-none bg-transparent text-white hover:bg-transparent"
    >
      Saved

      <div className="badge badge-lg rounded-full border border-gray-500 bg-transparent text-white">
        {savedWorkouts.length}
      </div>
    </button>
  );
};

export default SavedNavButton;
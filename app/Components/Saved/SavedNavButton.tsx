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
      className="btn btn-neutral gap-2"
    >
      Saved

      <div className="badge badge-lg rounded-full bg-[#CCFF00] text-black">
        {savedWorkouts.length}
      </div>
    </button>
  );
};

export default SavedNavButton;
"use client";

import { useContext } from "react";
import { FaBookmark, FaCheck } from "react-icons/fa";

import { IWorkout } from "@/app/Type.ts/Type";
import { WorkoutContext } from "@/app/Components/Context/WorkoutContext";

interface SavedButtonProps {
  workout: IWorkout;
}

const SavedButton = ({ workout }: SavedButtonProps) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "SavedButton must be used inside WorkoutProvider"
    );
  }

  const { savedWorkouts, setSavedWorkouts } = context;

  const alreadySaved = savedWorkouts.some(
    (item) => item.id === workout.id
  );

  const handleSave = () => {
    if (alreadySaved) return;

    setSavedWorkouts((prev) => [
      ...prev,
      workout,
    ]);
  };

  return (
  <button
  onClick={handleSave}
  disabled={alreadySaved}
  className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-6 py-3.5 font-bold transition ${
    alreadySaved
      ? "cursor-not-allowed border-gray-600 bg-gray-600 text-gray-300"
      : "border-gray-600 bg-transparent text-white hover:border-[#C2F800]"
  }`}
>
  {alreadySaved ? (
    <>
      <FaCheck />
      Saved
    </>
  ) : (
    <>
      <FaBookmark />
      Save Workout
    </>
  )}
</button>
  );
};

export default SavedButton;
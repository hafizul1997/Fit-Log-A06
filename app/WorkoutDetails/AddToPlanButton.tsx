"use client";

import { useContext } from "react";
import { FaCheck, FaPlus } from "react-icons/fa";
import { IWorkout } from "../Type.ts/Type";
import { WorkoutContext } from "@/app/Components/Context/WorkoutContext";

const AddToPlanButton = ({
  workout,
}: {
  workout: IWorkout;
}) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "AddToPlanButton must be used inside WorkoutProvider"
    );
  }

  const { myPlan, setMyPlan } = context;

  const alreadyAdded = myPlan.some(
    (item) => item.id === workout.id
  );

  const handleAddToPlan = () => {
    if (alreadyAdded) return;

    setMyPlan((prev) => [...prev, workout]);
  };

  return (
    <button
      onClick={handleAddToPlan}
      disabled={alreadyAdded}
      className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold transition ${
        alreadyAdded
          ? "cursor-not-allowed bg-gray-600 text-gray-300"
          : "bg-[#C2F800] text-black hover:bg-[#d4ff33]"
      }`}
    >
      {alreadyAdded ? (
        <>
          <FaCheck />
          Added to Plan
        </>
      ) : (
        <>
          <FaPlus />
          Add to Today's Plan
        </>
      )}
    </button>
  );
};

export default AddToPlanButton;
"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import { WorkoutContext } from "@/app/Components/Context/WorkoutContext";

const MyPlanButton = () => {
  const router = useRouter();

  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "MyPlanButton must be used inside WorkoutProvider"
    );
  }

  const { myPlan } = context;

  return (
    <button
      onClick={() => router.push("/my-plan")}
      className="btn btn-neutral gap-2"
    >
      Plan

      <div className="badge badge-lg rounded-full bg-[#CCFF00] text-black">
        {myPlan.length}
      </div>
    </button>
  );
};

export default MyPlanButton;
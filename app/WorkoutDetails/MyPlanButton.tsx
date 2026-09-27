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
      className="btn btn-xs btn-neutral sm:btn-sm md:btn-md lg:btn-lg gap-2 "
    >
      Plan

      <div className=" rounded-full bg-[#CCFF00] text-black badge badge-xs sm:badge-sm md:badge-md lg:badge-lg">
        {myPlan.length}
      </div>
    </button>
  );
};

export default MyPlanButton;
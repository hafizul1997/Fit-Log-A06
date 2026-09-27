
"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { WorkoutContext } from "@/app/Components/Context/WorkoutContext";
import WorkoutSummary from "@/app/Components/MyPlan/WorkpoutSummary";
import PlanTabs from "@/app/Components/MyPlan/PlanTab";
import SortDropdown from "@/app/Components/MyPlan/SortDropdown";
import WorkoutPlanCard from "@/app/Components/MyPlan/WorkoutPlanCard";

const MyPlanPage = () => {
  const router = useRouter();

  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("MyPlanPage must be used inside WorkoutProvider");
  }

  const {
    myPlan,
    savedWorkouts,
    setMyPlan,
    setSavedWorkouts,
  } = context;

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const [sortBy, setSortBy] = useState("latest");

  // Which list will show?
  const selectedWorkouts =
    activeTab === "plan" ? myPlan : savedWorkouts;

  // Sorting
  const sortedWorkouts = [...selectedWorkouts].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);

      case "name-desc":
        return b.name.localeCompare(a.name);

      case "duration-asc":
        return a.duration - b.duration;

      case "duration-desc":
        return b.duration - a.duration;

      case "calories-asc":
        return a.caloriesBurned - b.caloriesBurned;

      case "calories-desc":
        return b.caloriesBurned - a.caloriesBurned;

      case "rating-asc":
        return a.rating - b.rating;

      case "rating-desc":
        return b.rating - a.rating;

      case "latest":
      default:
        return 0;
    }
  });

  // Remove from current tab
  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      setMyPlan((prev) =>
        prev.filter((workout) => workout.id !== id)
      );

      toast.success("Workout removed from your plan!");
    } else {
      setSavedWorkouts((prev) =>
        prev.filter((workout) => workout.id !== id)
      );

      toast.success("Workout removed from saved workouts!");
    }
  };

  return (
    <main className="min-h-screen w-full bg-black px-2 py-6 text-white sm:px-4 sm:py-8 lg:px-0 lg:py-10">
      
      {/* Full width 1280px container */}
      <div className="mx-auto w-full max-w-\[1280px]">

        {/* 1280px - 48px = 1232px content */}
        <div className="mx-2 sm:mx-4 lg:mx-6">

  {/* Header */}
  <div className="mb-5 sm:mb-7 lg:mb-8">
    
    <h1
      className="
        text-xl
        font-bold
        leading-tight
        sm:text-2xl
        md:text-3xl
        lg:text-4xl
      "
    >
      My Plan
    </h1>

    <p
      className="
        mt-1.5
        max-w-[320px]
        text-[10px]
        leading-relaxed
        text-gray-400
        sm:mt-2
        sm:max-w-none
        sm:text-xs
        md:text-sm
        lg:text-base
      "
    >
      Cap of five lifts for today. Finish them, then load more.
    </p>

  </div>

          {/* Summary */}
          <WorkoutSummary workouts={selectedWorkouts} />

          {/* Tabs + Sort */}
         <div
  className="
    mb-5
    flex
    w-full
    flex-row
    items-center
    justify-between
    gap-1

    sm:mb-6
    sm:gap-3
  "
>
  <PlanTabs
    activeTab={activeTab}
    setActiveTab={setActiveTab}
  />

  <SortDropdown
    sortBy={sortBy}
    setSortBy={setSortBy}
  />
</div>

          {/* Workout List */}
          <div className="w-full space-y-3 sm:space-y-4">

            {sortedWorkouts.length > 0 ? (
              sortedWorkouts.map((workout) => (
                <WorkoutPlanCard
                  key={workout.id}
                  workout={workout}
                  onRemove={handleRemove}
                  showCompleteButton={activeTab === "plan"}
                />
              ))
            ) : (
              <div className="flex min-h-[260px] w-full items-center justify-center rounded-xl bg-[#222630] px-4 text-center sm:min-h-[300px] sm:rounded-2xl sm:px-6">
                
                <div>
                  <p className="text-sm text-gray-400 sm:text-base">
                    No workout selected yet.
                  </p>

                  <button
                    type="button"
                    onClick={() => router.push("/Workouts")}
                    className="mt-4 rounded-lg bg-[#C2F800] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#d4ff33] sm:mt-5 sm:px-6 sm:py-2.5 sm:text-sm"
                  >
                    Go to Workout
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;


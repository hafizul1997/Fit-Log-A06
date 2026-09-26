"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { WorkoutContext } from "@/app/Components/Context/WorkoutContext";

import WorkoutSummary from "@/app/Components/MyPlan/WorkpoutSummary";
import PlanTabs from "@/app/Components/MyPlan/PlanTab";
import SortDropdown from "@/app/Components/MyPlan/SortDropdown";
import WorkoutPlanCard from "@/app/Components/MyPlan/WorkoutPlanCard";

const MyPlanPage = () => {
  const router = useRouter();

  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "MyPlanPage must be used inside WorkoutProvider"
    );
  }

  const {
    myPlan,
    savedWorkouts,
    setMyPlan,
    setSavedWorkouts,
  } = context;

  const [activeTab, setActiveTab] = useState<
    "plan" | "saved"
  >("plan");

  const [sortBy, setSortBy] = useState("latest");

  // Which list will show?
  const selectedWorkouts =
    activeTab === "plan"
      ? myPlan
      : savedWorkouts;

  // Sorting
  const sortedWorkouts = [...selectedWorkouts].sort(
    (a, b) => {
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
    }
  );

  // Remove from current tab
  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      setMyPlan((prev) =>
        prev.filter((workout) => workout.id !== id)
      );
    } else {
      setSavedWorkouts((prev) =>
        prev.filter((workout) => workout.id !== id)
      );
    }
  };

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto w-full max-w-[1186px]">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            My Plan
          </h1>

          <p className="mt-2 text-gray-400">
           Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Summary */}
        <WorkoutSummary
          workouts={selectedWorkouts}
        />

        {/* Tabs + Sort */}
        <div className="mb-6 flex w-full items-center justify-between">

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
        <div className="w-full space-y-4">

          {sortedWorkouts.length > 0 ? (

            sortedWorkouts.map((workout) => (
              <WorkoutPlanCard
                key={workout.id}
                workout={workout}
                onRemove={handleRemove}
              />
            ))

          ) : (

            /* Empty State */
            <div className="flex h-[300px] w-full max-w-[1184px] items-center justify-center rounded-2xl bg-[#222630] px-6 text-center">

              <div>
                <p className="text-base text-gray-400">
                  No workout selected yet.
                </p>

                <button
                  onClick={() =>
                    router.push("/Workouts")
                  }
                  className="mt-5 rounded-lg bg-[#C2F800] px-6 py-2.5 text-sm font-bold text-black transition hover:bg-[#d4ff33]"
                >
                  Go to Workout
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </main>
  );
};

export default MyPlanPage;
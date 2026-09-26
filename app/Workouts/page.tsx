
import React from "react";
import WorkoutCard from "@/app/Components/WorkoutCard";
import { IWorkout } from "@/app/Type.ts/Type";
import Hero from "@/app/Components/shared/HomePage/Hero";

const getWorkOuts = async (): Promise<IWorkout[]> => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(
      `Workout API failed with status ${res.status}`
    );
  }

  const contentType = res.headers.get("content-type");

  if (!contentType?.includes("application/json")) {
    throw new Error(
      "Workout API did not return JSON."
    );
  }

  const data: IWorkout[] = await res.json();

  return data;
};

const WorkoutPage = async () => {
  const workOutData = await getWorkOuts();

  return (
    <main className="min-h-screen bg-black">

      <Hero />

      <section className="w-full bg-[#000000] pb-15">
        <div className="mx-auto w-full max-w-\[1280px\]">

          <div className="mx-6">

            <div className="py-10 text-white">
              <h1 className="text-4xl font-bold">
                THE LIBRARY
              </h1>

              <p className="mt-1 text-[#9CA3AF]">
                Twelve lifts covering every major muscle group.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {workOutData.map((workout: IWorkout) => (
                <WorkoutCard
                  key={workout.id}
                  workout={workout}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default WorkoutPage;

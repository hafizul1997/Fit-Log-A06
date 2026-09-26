"use client";

import { createContext, ReactNode, useState } from "react";
import { IWorkout } from "@/app/Type.ts/Type";

interface IWorkoutContext {
  myPlan: IWorkout[];
  setMyPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  savedWorkouts: IWorkout[];
  setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const WorkoutContext = createContext<IWorkoutContext | undefined>(
  undefined
);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [myPlan, setMyPlan] = useState<IWorkout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);

  const sharedData = {
    myPlan,
    setMyPlan,
    savedWorkouts,
    setSavedWorkouts,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
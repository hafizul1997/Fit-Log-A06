
"use client";

interface PlanTabsProps {
  activeTab: "plan" | "saved";
  setActiveTab: (tab: "plan" | "saved") => void;
}

const PlanTabs = ({
  activeTab,
  setActiveTab,
}: PlanTabsProps) => {
  return (
    <div
      className="
        mb-5
        flex
        w-fit
        gap-1
        rounded-lg
        bg-[#222630]
        p-1

        sm:mb-6
        sm:rounded-xl
      "
    >
      {/* Today's Plan */}
      <button
        type="button"
        onClick={() => setActiveTab("plan")}
        className={`
          rounded-md
          px-2.5
          py-1.5
          text-[10px]
          font-semibold
          transition-all

          sm:rounded-lg
          sm:px-3
          sm:py-2
          sm:text-xs

          md:px-4
          md:py-2.5
          md:text-sm

          lg:px-5
          lg:py-2.5
          lg:text-sm

          ${
            activeTab === "plan"
              ? "bg-[#C2F800] text-black"
              : "text-gray-400 hover:bg-white/5 hover:text-white"
          }
        `}
      >
        Today's Plan
      </button>

      {/* Saved */}
      <button
        type="button"
        onClick={() => setActiveTab("saved")}
        className={`
          rounded-md
          px-2.5
          py-1.5
          text-[10px]
          font-semibold
          transition-all

          sm:rounded-lg
          sm:px-3
          sm:py-2
          sm:text-xs

          md:px-4
          md:py-2.5
          md:text-sm

          lg:px-5
          lg:py-2.5
          lg:text-sm

          ${
            activeTab === "saved"
              ? "bg-[#C2F800] text-black"
              : "text-gray-400 hover:bg-white/5 hover:text-white"
          }
        `}
      >
        Saved
      </button>
    </div>
  );
};

export default PlanTabs;

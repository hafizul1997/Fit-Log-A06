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
    <div className="mb-6 flex w-fit gap-1 rounded-xl bg-[#222630] p-1">

      {/* Today's Plan */}
      <button
        onClick={() => setActiveTab("plan")}
        className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
          activeTab === "plan"
            ? "bg-[#C2F800] text-black"
            : "text-gray-400 hover:bg-white/5 hover:text-white"
        }`}
      >
        Today's Plan
      </button>

      {/* Saved */}
      <button
        onClick={() => setActiveTab("saved")}
        className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
          activeTab === "saved"
            ? "bg-[#C2F800] text-black"
            : "text-gray-400 hover:bg-white/5 hover:text-white"
        }`}
      >
        Saved
      </button>

    </div>
  );
};

export default PlanTabs;
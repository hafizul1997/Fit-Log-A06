"use client";

import { FaChevronDown } from "react-icons/fa";

interface SortDropdownProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

const SortDropdown = ({
  sortBy,
  setSortBy,
}: SortDropdownProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-400">
        Sort by:
      </span>

      <div className="relative">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="appearance-none rounded-lg bg-[#222630] px-4 py-2 pr-9 text-sm text-white outline-none"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>

        <FaChevronDown
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400"
        />
      </div>
    </div>
  );
};

export default SortDropdown;
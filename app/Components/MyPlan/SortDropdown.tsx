
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
    <div className="flex items-center gap-1.5 sm:gap-2">

      {/* Sort Label */}
      <span
        className="
          text-[10px]
          text-gray-400

          sm:text-xs
          md:text-sm
        "
      >
        Sort by:
      </span>

      {/* Select */}
      <div className="relative">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="
            appearance-none
            rounded-md
            bg-[#222630]
            px-2
            py-1.5
            pr-7
            text-[10px]
            text-white
            outline-none

            sm:rounded-lg
            sm:px-3
            sm:py-2
            sm:pr-8
            sm:text-xs

            md:px-4
            md:py-2
            md:pr-9
            md:text-sm

            lg:text-sm
          "
        >
          <option value="duration">
            Duration
          </option>

          <option value="calories">
            Calories
          </option>

          <option value="rating">
            Rating
          </option>
        </select>

        {/* Arrow */}
        <FaChevronDown
          className="
            pointer-events-none
            absolute
            right-2
            top-1/2
            h-2.5
            w-2.5
            -translate-y-1/2
            text-gray-400

            sm:right-2.5
            sm:h-3
            sm:w-3

            md:right-3
            md:h-3
            md:w-3
          "
        />
      </div>
    </div>
  );
};

export default SortDropdown;

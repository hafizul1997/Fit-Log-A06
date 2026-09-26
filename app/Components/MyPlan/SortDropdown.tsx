"use client";

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

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="select select-sm rounded-lg border-none bg-[#222630] text-white outline-none"
      >
        <option value="latest">Latest Added</option>
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
        <option value="duration-asc">Duration ↑</option>
        <option value="duration-desc">Duration ↓</option>
        <option value="calories-asc">Calories ↑</option>
        <option value="calories-desc">Calories ↓</option>
        <option value="rating-asc">Rating ↑</option>
        <option value="rating-desc">Rating ↓</option>
      </select>
    </div>
  );
};

export default SortDropdown;
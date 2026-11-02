
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const propertyTypes = [
  "PG",
  "Hostel",
  "Shared Apartment",
  "Single Room",
  "1 RK / Studio",
];

const roomTypes = [
  "Single Occupancy",
  "Double Occupancy",
  "Triple Occupancy",
];

const amenities = [
  "Wi-Fi",
  "AC",
  "Food",
  "Power Backup",
  "Laundry",
  "Attached Bathroom",
  "Washing Machine",
  "Parking",
];

const initialFilters = {
  propertyTypes: ["PG"],
  minBudget: 0,
  maxBudget: 50000,
  roomTypes: [],
  amenities: [],
};

const PropertyFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState(initialFilters);
  const [showMore, setShowMore] = useState(false);

  // Update checkbox selections
  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const selected = prev[category];

      const updated = selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value];

      const nextFilters = {
        ...prev,
        [category]: updated,
      };

      onFilterChange?.(nextFilters);
      return nextFilters;
    });
  };

  // Update minimum or maximum budget
  const handleBudgetChange = (field, value) => {
    const amount = Number(value);

    setFilters((prev) => {
      const nextFilters = {
        ...prev,
        [field]: amount,
      };

      onFilterChange?.(nextFilters);
      return nextFilters;
    });
  };

  // Reset every filter
  const handleClearAll = () => {
    const resetFilters = {
      propertyTypes: [],
      minBudget: 0,
      maxBudget: 50000,
      roomTypes: [],
      amenities: [],
    };

    setFilters(resetFilters);
    onFilterChange?.(resetFilters);
  };

  // Reusable checkbox list
  const renderCheckboxes = (items, category) =>
    items.map((item) => (
      <label
        key={item}
        className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-600 transition hover:text-brand-primary-hover"
      >
        <input
          type="checkbox"
          checked={filters[category].includes(item)}
          onChange={() => handleCheckboxChange(category, item)}
          className="h-4 w-4 cursor-pointer accent-brand-primary"
        />

        <span>{item}</span>
      </label>
    ));

  return (
    <aside className="w-full rounded-xl border border-gray-100 bg-white p-5 shadow-sm lg:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">
          Filters
        </h2>

        <button
          type="button"
          onClick={handleClearAll}
          className="text-xs font-medium text-brand-primary hover:text-brand-primary-hover"
        >
          Clear All
        </button>
      </div>

      {/* Property Type */}
      <section className="border-b border-gray-100 pb-5">
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Property Type
        </h3>

        <div className="space-y-2.5">
          {renderCheckboxes(propertyTypes, "propertyTypes")}
        </div>
      </section>

      {/* Budget */}
      <section className="border-b border-gray-100 py-5">
        <h3 className="mb-4 text-sm font-semibold text-gray-900">
          Budget (per month)
        </h3>

        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="50000"
            step="500"
            value={filters.maxBudget}
            onChange={(e) =>
              handleBudgetChange("maxBudget", e.target.value)
            }
            aria-label="Maximum monthly budget"
            className="h-1.5 w-full cursor-pointer accent-brand-primary"
          />

          <div className="grid grid-cols-2 gap-3">
            <label className="flex min-w-0 items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5">
              <span className="text-sm text-gray-500">₹</span>

              <input
                type="number"
                min="0"
                max={filters.maxBudget}
                step="500"
                value={filters.minBudget}
                onChange={(e) =>
                  handleBudgetChange("minBudget", e.target.value)
                }
                aria-label="Minimum monthly budget"
                className="w-full min-w-0 bg-transparent text-sm outline-none"
              />
            </label>

            <label className="flex min-w-0 items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5">
              <span className="text-sm text-gray-500">₹</span>

              <input
                type="number"
                min={filters.minBudget}
                max="50000"
                step="500"
                value={filters.maxBudget}
                onChange={(e) =>
                  handleBudgetChange("maxBudget", e.target.value)
                }
                aria-label="Maximum monthly budget"
                className="w-full min-w-0 bg-transparent text-sm outline-none"
              />
            </label>
          </div>
        </div>
      </section>

      {/* Room Type */}
      <section className="border-b border-gray-100 py-5">
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Room Type
        </h3>

        <div className="space-y-2.5">
          {renderCheckboxes(roomTypes, "roomTypes")}
        </div>
      </section>

      {/* Amenities */}
      <section className="pt-5">
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Amenities
        </h3>

        <div className="space-y-2.5">
          {renderCheckboxes(
            showMore ? amenities : amenities.slice(0, 5),
            "amenities"
          )}
        </div>

        <button
          type="button"
          onClick={() => setShowMore((prev) => !prev)}
          className="mt-4 flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:text-brand-primary-hover"
        >
          {showMore ? "Show Less" : "Show More"}

          {showMore ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>
      </section>
    </aside>
  );
};

export default PropertyFilters;

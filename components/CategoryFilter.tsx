"use client";

type CategoryFilterProps = {
  category: string;
  setCategory: (value: string) => void;
};

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Gaming",
];

export default function CategoryFilter({
  category,
  setCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-6">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`rounded-full px-5 py-2 transition ${
            category === item
              ? "bg-yellow-600 text-white"
              : "bg-white border hover:bg-gray-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

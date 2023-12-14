import "./ExpenseFilter.css";

interface ExpenseFilterProps {
  categories: string[];
  onChange: (category: string) => void;
}

function ExpenseFilter({ categories, onChange }: ExpenseFilterProps) {
  return (
    <>
      <select
        onChange={(event) => {
          onChange(event.target.value);
        }}
        className="expense-filter-select"
      >
        {categories.map((category) => {
          if (category == "All Categories")
            return (
              <option key={"select_" + category} defaultValue="All Categories">
                {category}
              </option>
            );

          return (
            <option key={"select_" + category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default ExpenseFilter;

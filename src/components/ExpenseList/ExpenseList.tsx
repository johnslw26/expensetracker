import "./ExpenseList.css";

export interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface ExpenseListProps {
  items: Expenses[];
  currentCategory: string;
  onDelete: (id: number) => void;
}

function ExpenseList({ onDelete, items, currentCategory }: ExpenseListProps) {
  if (items.length === 0) return null;
  return (
    <>
      <table className="expense-list-table">
        <tbody>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
          {items.map((item) => {
            if (
              item.category === currentCategory ||
              currentCategory == "All Categories"
            ) {
              return (
                <tr key={item.id}>
                  <td key={item.description}>{item.description}</td>
                  <td key={item.amount}>${item.amount.toFixed(2)}</td>
                  <td key={item.category}>{item.category}</td>
                  <td>
                    <button
                      onClick={() => onDelete(item.id)}
                      className="expense-list-delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
          })}
          <tr className="expense-list-total">
            <td>Total</td>
            <td>
              $
              {items
                .reduce(
                  (total, expense) =>
                    total +
                    (currentCategory === "All Categories" ||
                    expense.category === currentCategory
                      ? expense.amount
                      : 0),
                  0
                )
                .toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ExpenseList;

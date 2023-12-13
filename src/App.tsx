import "./App.css";
import ExpenseList from "./components/ExpenseList/ExpenseList";

function App() {
  let items = [
    {
      id: 1,
      description: "Milk",
      amount: 5.0,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Cat Food",
      amount: 15.0,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Water",
      amount: 50.0,
      category: "Utilities",
    },
    {
      id: 4,
      description: "Gas",
      amount: 500.0,
      category: "Utilities",
    },
    {
      id: 5,
      description: "Netflix",
      amount: 15.0,
      category: "Entertainment",
    },
    {
      id: 6,
      description: "Peacock",
      amount: 10.0,
      category: "Entertainment",
    },
    {
      id: 7,
      description: "Chips",
      amount: 5.0,
      category: "Groceries",
    },
    {
      id: 8,
      description: "Kit Kat",
      amount: 2.0,
      category: "Groceries",
    },
    {
      id: 9,
      description: "Internet",
      amount: 200.0,
      category: "Utilities",
    },
    {
      id: 10,
      description: "Eggs",
      amount: 2.0,
      category: "Groceries",
    },
    {
      id: 11,
      description: "Play",
      amount: 400.0,
      category: "Entertainment",
    },
  ];
  return (
    <>
      <ExpenseList
        items={items}
        categories={[
          "All Categories",
          "Groceries",
          "Utilities",
          "Entertainment",
        ]}
      />
    </>
  );
}

export default App;

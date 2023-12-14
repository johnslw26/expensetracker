import { useState } from "react";
import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpenseForm, {
  ExpenseFormData,
} from "./components/ExpenseForm/ExpenseForm";
import ExpenseList, { Expenses } from "./components/ExpenseList/ExpenseList";
import LightBox from "./components/LightBox/LightBox";

function App() {
  const items = [
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

  const handleDelete = (id: number) => {
    setExpenseList(
      expenseList.filter((expense) => {
        if (expense.id != id) {
          return expense;
        }
      })
    );
  };

  const categories = [
    "All Categories",
    "Groceries",
    "Utilities",
    "Entertainment",
  ];

  const [expenseList, setExpenseList] = useState<Expenses[]>(items);
  const [isLightboxVisible, setLightboxVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("All Categories");
  const handleUpdateItems = (expense: ExpenseFormData) => {
    setLightboxVisible(false);
    setExpenseList([
      ...expenseList,
      {
        ...expense,
        id: expenseList.length + 1,
      },
    ]);
  };
  return (
    <>
      <LightBox
        isLightboxVisible={isLightboxVisible}
        onClose={() => {
          setLightboxVisible(false);
        }}
      >
        <ExpenseForm
          categories={categories}
          onFormSubmit={handleUpdateItems}
        ></ExpenseForm>
      </LightBox>
      <button
        className="expense-list-show-form-button"
        onClick={() => {
          setLightboxVisible(true);
        }}
      >
        Add New Item
      </button>
      <ExpenseFilter
        categories={categories}
        onChange={(category) => {
          setCurrentCategory(category);
        }}
      />
      <ExpenseList
        onDelete={handleDelete}
        items={expenseList}
        currentCategory={currentCategory}
      />
    </>
  );
}

export default App;

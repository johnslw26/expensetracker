import { useRef, useState } from "react";
import { FieldValues } from "react-hook-form";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import LightBox from "../LightBox/LightBox";
import "./ExpenseList.css";

interface ExpenseListProps {
  items: {
    id: number;
    description: string;
    amount: number;
    category: string;
  }[];
  categories: string[];
}

function ExpenseList({ items, categories }: ExpenseListProps) {
  const [currentCategory, setCurrentCategory] = useState("All Categories");
  const [itemsArray, setItems] = useState(items);
  const [isLightboxVisible, setLightboxVisible] = useState(false);

  const handleUpdateItems = (data: FieldValues) => {
    setLightboxVisible(false);
    setItems([
      ...itemsArray,
      {
        id: itemsArray.length + 1,
        description: data.description,
        amount: data.amount,
        category: data.category,
      },
    ]);
  };

  let totalAmount = useRef(0.0);

  totalAmount.current = 0.0;
  let currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
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
          onUpdateItems={handleUpdateItems}
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
        onChange={(event) => {
          console.log(event.target.value);
          setCurrentCategory(event.target.value);
        }}
      />
      <table className="expense-list-table">
        <tbody>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
          {itemsArray.map((item) => {
            if (
              item.category === currentCategory ||
              currentCategory == "All Categories"
            ) {
              let totalAdd = totalAmount.current + item.amount;
              totalAmount.current = totalAdd;

              return (
                <tr key={item.id}>
                  <td key={item.description}>{item.description}</td>
                  <td key={item.amount}>
                    {currencyFormatter.format(item.amount)}
                  </td>
                  <td key={item.category}>{item.category}</td>
                  <td>
                    <button
                      onClick={() => {
                        setItems(
                          itemsArray.filter(
                            (currentItem) => currentItem.id != item.id
                          )
                        );
                      }}
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
            <td>{currencyFormatter.format(totalAmount.current)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ExpenseList;

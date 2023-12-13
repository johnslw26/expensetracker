import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import "./ExpenseForm.css";

interface ExpenseForm {
  categories: string[];
  onUpdateItems: (data: FieldValues) => void;
}

function ExpenseForm({ categories, onUpdateItems }: ExpenseForm) {
  const schema = z.object({
    description: z
      .string()
      .min(1, { message: "Description must not be empty" }),
    amount: z
      .number({ invalid_type_error: "Amount is required" })
      .min(0.01, { message: "Amount must be greater than $0.01" }),
    category: z.string(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    onUpdateItems(data);
    reset();
  };
  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("description")}
          name="description"
          type="text"
          placeholder="Description"
        />
        <span className="expense-form-error">
          {errors.description && errors.description.message}
        </span>
        <br />
        <input
          {...register("amount", { valueAsNumber: true })}
          name="amount"
          type="text"
          placeholder="Amount"
        />
        <span className="expense-form-error">
          {errors.amount && errors.amount.message}
        </span>
        <br />
        <select
          {...register("category")}
          name="category"
          className="expense-form-select"
        >
          {categories.map((category) => {
            if (category != "All Categories") {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            }
          })}
        </select>
        <button
          className="expense-form-submit"
          disabled={isValid ? false : true}
        >
          Submit
        </button>
      </form>
    </>
  );
}
export default ExpenseForm;

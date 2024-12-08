import { Expense } from "../../models/Expense";

export const createExpense = (expense: Expense): Promise<Expense> =>
  fetch("/api/expenses/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  }).then((response) => response.json());

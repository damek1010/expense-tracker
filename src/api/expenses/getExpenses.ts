import { Expense } from "../../models/Expense";

export const getExpenses = (): Promise<Expense[]> =>
  fetch("/api/expenses/").then((response) => response.json());

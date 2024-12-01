export interface Todo {
  description: string;
  isComplete: boolean;
}

export interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
}

export interface Todo {
  description: string;
  isComplete: boolean;
}

export interface Expense {
  title: string;
  amount: number;
  category: string;
  createdAt: Date;
}

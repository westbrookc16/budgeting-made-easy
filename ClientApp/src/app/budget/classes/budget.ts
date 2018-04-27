export class Budget {
  budgetID: number = -1;
  month: number = new Date().getMonth() + 1;
  year: number = new Date().getFullYear();
  totalIncome: number=0;
  totalSpent: number = 0;
  totalLeftToBudget: number = 0;
}

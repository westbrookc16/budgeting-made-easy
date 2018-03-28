using budgetmanagementAngular.data;
using System;
using System.Linq;

namespace budgetmanagementAngular.data

{
    public static class DbInitializer
    {
        public static void Initialize(budgetContext context)
        {
            context.Database.EnsureCreated();

            //lok for any budgets.
            if (context.budgets.Any())
            {
                return;   // DB has been seeded
            }
            var budgets = new budget[] { new budget { month = 3, year = 2018, creationDate = DateTime.Now, totalIncome = 5000 }, new budget { month = 4, year = 2018, creationDate = DateTime.Now, totalIncome = 8000 } };
            foreach (var budget in budgets)
            {
                context.budgets.Add(budget);

            }
            context.SaveChanges();
            var cateories = new budgetCategory[] { new budgetCategory { budgetCategoryID = 1, budgetID = 1, name = "testin this", amount = 4000 },new budgetCategory { budgetCategoryID = 2, budgetID = 2, name = "testin 2", amount = 8000 } };
            foreach (var c in cateories)
            {
                context.budgetCategories.Add(c);

            }
            context.SaveChanges();


            context.SaveChanges();


        }
    }
}
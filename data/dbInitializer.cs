using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using budgetmanagementAngular.models;
namespace budgetmanagementAngular.data
{
    public class dbInitializer
    {
        public static void initializeDB(budgetManagementContext context)
        {
            context.Database.EnsureCreated();
            if (context.budgets.Any())
                return;
            var budgets = new budget[] {
            new budget{month=3,year=2018,totalIncome=5000},
            new budget{month=4,year=2018,totalIncome=50000}
            };
            foreach (budget budget in budgets)
            {
                context.budgets.Add(budget);
            }
            context.SaveChanges();
            var categories = new category[] {
                new category{name="Food"},
                new category{name="Rent"}
            };
            foreach (category c in categories)
            {
                context.categories.Add(c);
            }
            context.SaveChanges();
            var budgetCategories = new budgetCategory[] {
                new budgetCategory{categoryID=1,budgetID=1,income=5000}
            };
            foreach (budgetCategory c in budgetCategories)
            {
                context.budgetCategories.Add(c);

            }
            context.SaveChanges();
        }
    }
    
}

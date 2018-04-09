using budgetmanagementAngular.data;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace budgetmanagementAngular.data

{
    public static class DbInitializer
    {
        public static void Initialize(budgetContext context,RoleManager<IdentityRole> roleManager,UserManager<applicationUser> userManager)
        {
            context.Database.EnsureCreated();

            //look for any budgets.
/*          if (context.budgets.Any())
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


  */          
            CreateUsers(context, roleManager, userManager).GetAwaiter().GetResult();
            context.SaveChanges();
        }
        private static async Task CreateUsers(
            budgetContext dbContext,
            RoleManager<IdentityRole> roleManager,
            UserManager<applicationUser> userManager)
        {
            // local variables
            DateTime createdDate = new DateTime(2016, 03, 01, 12, 30, 00);
            DateTime lastModifiedDate = DateTime.Now;

            string role_Administrator = "Administrator";
            string role_RegisteredUser = "RegisteredUser";

            //Create Roles (if they doesn't exist yet)
            if (!await roleManager.RoleExistsAsync(role_Administrator))
            {
                await roleManager.CreateAsync(new IdentityRole(role_Administrator));
            }
            if (!await roleManager.RoleExistsAsync(role_RegisteredUser))
            {
                await roleManager.CreateAsync(new IdentityRole(role_RegisteredUser));
            }

            // Create the "Admin" ApplicationUser account
            var user_Admin = new applicationUser()
            {
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = "Admin",
                Email = "admin@testmakerfree.com",
                CreatedDate = createdDate,
                LastModifiedDate = lastModifiedDate
            };
            // Insert "Admin" into the Database and assign the "Administrator" and "Registered" roles to him.
            if (await userManager.FindByNameAsync(user_Admin.UserName) == null)
            {
                await userManager.CreateAsync(user_Admin, "Pass4Admin");
                await userManager.AddToRoleAsync(user_Admin, role_RegisteredUser);
                await userManager.AddToRoleAsync(user_Admin, role_Administrator);
                // Remove Lockout and E-Mail confirmation.
                user_Admin.EmailConfirmed = true;
                user_Admin.LockoutEnabled = false;
            }
            await dbContext.SaveChangesAsync();
            
        }

        }
}
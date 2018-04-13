using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace budgetmanagementAngular.data
{
    public class budgetContext : IdentityDbContext<applicationUser>
    {
        public budgetContext(DbContextOptions options) : base(options) { }
        public DbSet<budget> budgets { get; set; }
        public DbSet<budgetCategory> budgetCategories { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<budget>().HasData(new budget() { month = 3, year = 2018, creationDate = DateTime.Now, totalIncome = 5000, budgetID = 1 });
            
            
        }
    }
}

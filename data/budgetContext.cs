using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace budgetmanagementAngular.data
{
    public class budgetContext:DbContext
    {
        public budgetContext(DbContextOptions<budgetContext> options) : base(options) { }
        public DbSet<budget> budgets { get; set; }
        public DbSet<budgetCategory> budgetCategories { get; set; }
    }
}

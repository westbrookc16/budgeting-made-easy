using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace budgetmanagementAngular.data
{
    public class budgetContext:IdentityDbContext<applicationUser>
    {
        public budgetContext(DbContextOptions options) : base(options) { }
        public DbSet<budget> budgets { get; set; }
        public DbSet<budgetCategory> budgetCategories { get; set; }
    }
}

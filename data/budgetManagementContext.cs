using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using budgetmanagementAngular.models;
using Microsoft.EntityFrameworkCore;
namespace budgetmanagementAngular.data
{
    public class budgetManagementContext : DbContext
    {
        public budgetManagementContext(DbContextOptions<budgetManagementContext> options) : base(options)
        {
        }
        public DbSet<budget> budgets { get; set; }
        public DbSet<category> categories { get; set; }
        public DbSet<budgetCategory> budgetCategories { get; set; }
    }
}

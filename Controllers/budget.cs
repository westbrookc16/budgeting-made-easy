using AutoMapper;
using System.Data.SqlClient;
using budgetmanagementAngular.data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using budgetmanagementAngular.viewModels;
using Newtonsoft.Json;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
using Microsoft.EntityFrameworkCore;
namespace budgetmanagementAngular.Controllers
{
    [Route("api/[controller]")]
    public class budgetController : BaseApiController
    {



        public budgetController(budgetContext db,
            IConfiguration configuration
            )
            : base(db, configuration)
        {


        }
        // GET: api/<controller>
        [HttpPost("add")]
        [Authorize]
        public JsonResult add([FromBody] budget b)
        {
            if (b.budgetID == -1)
            {
                var c = new budget();
                c.creationDate = DateTime.Now;
                c.totalIncome = b.totalIncome;
                c.month = b.month;
                c.year = b.year;
                b.creationDate = DateTime.Now;

                c.userID = userID;

                DbContext.budgets.Add(c);
                DbContext.SaveChanges();
                //insert categories that are recurring from the previous month
                DbContext.Database.ExecuteSqlCommand("insert into budgetCategories (budgetID, name, amount, isRecurring) select @budgetID, name, amount, isRecurring from budgetCategories c inner join budgets b on c.budgetID=b.budgetID where b.month=@month-1 and b.year=@year and isRecurring=1 and b.userID=@userID", new SqlParameter("@budgetID", c.budgetID), new SqlParameter("@month", c.month), new SqlParameter("@year", c.year), new SqlParameter("@userID", userID));
                DbContext.SaveChanges();
                var r = from newBudget in DbContext.budgets.Include(cat=>cat.categories) where newBudget.budgetID == c.budgetID select newBudget;
                return new JsonResult(r.FirstOrDefault(), JsonSettings);

            }
            else
            {
                var q = from bdg in DbContext.budgets where bdg.budgetID == b.budgetID select bdg;
                budget updatedBudget = new budget();
                updatedBudget = q.Single();
                updatedBudget.totalIncome = b.totalIncome;
                DbContext.SaveChanges();
                var r = from rec in DbContext.budgets.Include(c=>c.categories) where rec.budgetID == updatedBudget.budgetID select rec;
                return new JsonResult(r.FirstOrDefault(), JsonSettings);

            }



        }
        [HttpGet("getBudget/{month}/{year}")]
        [Authorize]
        public IActionResult getBudget(int? month = 3, int? year = 2018)
        {


            var q = from budget in DbContext.budgets.Include(c=>c.categories) where budget.month == month && budget.year == year && budget.userID == userID select budget;
            //budgetViewModel b = _mapper.Map<budgetViewModel>(q.SingleOrDefault());

            //}
            //budgetViewModel b = new budgetViewModel();
            if (q.Count() == 0)
                return new JsonResult(new budget() { budgetID = -1, totalIncome = 0, month = month.GetValueOrDefault(), year = year.GetValueOrDefault(), creationDate = DateTime.Now }, new JsonSerializerSettings() { Formatting = Formatting.Indented });
            return new JsonResult(q.SingleOrDefault(), new JsonSerializerSettings() { Formatting = Formatting.Indented });
        }
    }
}

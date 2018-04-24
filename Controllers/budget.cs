using AutoMapper;
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
                string userId = User.Claims.FirstOrDefault(u => u.Type == ClaimTypes.NameIdentifier).Value;
                c.userID = userId;

                DbContext.budgets.Add(c);
                DbContext.SaveChanges();

                return new JsonResult(c, new JsonSerializerSettings() { Formatting = Formatting.Indented });
            }
            else
            {
                var q = from bdg in DbContext.budgets where bdg.budgetID == b.budgetID select bdg;
                budget updatedBudget = new budget();
                updatedBudget = q.Single();
                updatedBudget.totalIncome = b.totalIncome;
                DbContext.SaveChanges();
                return new JsonResult(updatedBudget, JsonSettings);

            }



        }
        [HttpGet("getBudget/{month}/{year}")]
        [Authorize]
        public IActionResult getBudget(int? month = 3, int? year = 2018)
        {

            string userID = User.Claims.FirstOrDefault(u => u.Type == ClaimTypes.NameIdentifier).Value;
            var q = from budget in DbContext.budgets where budget.month == month && budget.year == year && budget.userID == userID select new { budget.budgetID, budget.month, budget.year, totalSpent = budget.categories.Sum(p => p.amount), budget.totalIncome };
            //budgetViewModel b = _mapper.Map<budgetViewModel>(q.SingleOrDefault());

            //}
            //budgetViewModel b = new budgetViewModel();
            if (q.Count() == 0)
                return new JsonResult(new budget() { budgetID = -1, totalIncome = 0, month = month.GetValueOrDefault(), year = year.GetValueOrDefault(), creationDate=DateTime.Now }, new JsonSerializerSettings() { Formatting = Formatting.Indented });
            return new JsonResult(q.SingleOrDefault(), new JsonSerializerSettings() { Formatting = Formatting.Indented });
        }
    }
}

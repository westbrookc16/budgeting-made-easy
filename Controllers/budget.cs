using AutoMapper;
using budgetmanagementAngular.data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using budgetmanagementAngular.viewModels;
using Newtonsoft.Json;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace budgetmanagementAngular.Controllers
{
    [Route("api/[controller]")]
    public class budgetController : Controller
    {
        private readonly IMapper _mapper;
        private budgetContext db;
        public budgetController(IMapper mapper, budgetContext context)
        {
            _mapper = mapper;
            db = context;
        }
        // GET: api/<controller>
        [HttpPost("add")]
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
                
                db.budgets.Add(c);
                db.SaveChanges();
                
                return new JsonResult(c, new JsonSerializerSettings() { Formatting = Formatting.Indented });
            }
            else
            {
                var q = from bdg in db.budgets where bdg.budgetID==b.budgetID select bdg;
                budget updatedBudget = new budget();
                updatedBudget = q.Single();
                updatedBudget.totalIncome = b.totalIncome;
                db.SaveChanges();
                return new JsonResult(updatedBudget, new JsonSerializerSettings() { Formatting = Formatting.Indented });

            }

            

        }
        [HttpGet("getBudget/{month}/{year}")]
        public IActionResult getBudget(int? month = 3, int? year = 2018)
        {


            var q = from budget in db.budgets where budget.month == month && budget.year == year select new { budget.budgetID, budget.month, budget.year, totalSpent = budget.categories.Sum(p => p.amount), budget.totalIncome };
            //budgetViewModel b = _mapper.Map<budgetViewModel>(q.SingleOrDefault());

            //}
            //budgetViewModel b = new budgetViewModel();

            return new JsonResult(q.SingleOrDefault(), new JsonSerializerSettings() { Formatting = Formatting.Indented });
        }
    }
}

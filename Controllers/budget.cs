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
        // GET: api/<controller>
        [HttpGet("getBudget/{month}/{year}")]
        public IActionResult getBudget(int? month=3, int? year=2018)
        {
            budget b = new budget();
            b.id = 1;
            b.month = month;
            b.year = year;
            b.totalIncome = 50000;
            b.totalSpent = 7000;
            return new JsonResult(b, new JsonSerializerSettings() { Formatting = Formatting.Indented });    
        }
            }
}

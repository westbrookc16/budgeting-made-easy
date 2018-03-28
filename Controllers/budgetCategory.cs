using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using budgetmanagementAngular.viewModels;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace budgetmanagementAngular.Controllers
{
    [Route("api/[controller]")]
    public class budgetCategoryController : Controller
    {
        // GET: api/<controller>
        [HttpGet("getAll/{budgetID}")]
        public JsonResult getAll(int budgetID)
        {
            var categories = new List<budgetCategoryViewModel>();
            for (int i = 0; i < 5; i++)
            {
                budgetCategoryViewModel cat = new budgetCategoryViewModel();
                cat.name = "test " + i.ToString();
                cat.amount = 4 * i;
                cat.budgetCategoryID = i;
                cat.budgetID = budgetID;
                categories.Add(cat);
            }
            return new JsonResult(categories, new JsonSerializerSettings() { Formatting = Formatting.Indented });

        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using budgetmanagementAngular.viewModels;
using budgetmanagementAngular.data;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace budgetmanagementAngular.Controllers
{
    [Route("api/[controller]")]
    public class budgetCategoryController : Controller
    {
        private budgetContext db;
        public budgetCategoryController(budgetContext context)
            {
            db = context;

            }
    // GET: api/<controller>
        [HttpGet("getAll/{budgetID}")]
        public JsonResult getAll(int budgetID)
        {
            var categories = new List<budgetCategoryViewModel>();
            var q = from c in db.budgetCategories where c.budgetID == budgetID select c;
            return new JsonResult(q.ToList(), new JsonSerializerSettings() { Formatting = Formatting.Indented });
        }
    }
}

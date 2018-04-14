using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Newtonsoft.Json;

using budgetmanagementAngular.data;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace budgetmanagementAngular.Controllers
{
    [Route("api/[controller]")]
    public class budgetCategoryController : BaseApiController
    {
        
        public budgetCategoryController(budgetContext db,RoleManager<IdentityRole> roleManager, UserManager<applicationUser> userManager, IConfiguration configuration):base(db,roleManager,userManager,configuration)
            {
            

            }
        [HttpPut("delete")]
        [Authorize]
        public JsonResult delete([FromBody] budgetCategory cat)
        {

            DbContext.budgetCategories.Attach(cat);
            DbContext.budgetCategories.Remove(cat);
           DbContext.SaveChanges();
            return new JsonResult(cat, new JsonSerializerSettings() { Formatting = Formatting.Indented });
        }
        [HttpPost("add")]

        [Authorize]
            public JsonResult add([FromBody]budgetCategory c) {
            if (c.budgetCategoryID == -1) {
                budgetCategory newCat = new budgetCategory();
                newCat.name = c.name;
                newCat.amount = c.amount;
                newCat.budgetID = c.budgetID;
                DbContext.budgetCategories.Add(newCat);
                DbContext.SaveChanges();
                return new JsonResult(newCat, new JsonSerializerSettings() { Formatting = Formatting.Indented });
            }
            else
            {
                //do an update
                var q = from i in DbContext.budgetCategories select i;
                var updatedCat = q.Single();
                updatedCat.amount = c.amount;
                updatedCat.name = c.name;
                DbContext.SaveChanges();
                return new JsonResult(updatedCat, new JsonSerializerSettings() { Formatting = Formatting.Indented });
            }
        }
        [HttpGet("getAll/{budgetID}")]
        [Authorize]
        public JsonResult getAll(int budgetID)
        {
            
            var q = from c in DbContext.budgetCategories where c.budgetID == budgetID select c;
            return new JsonResult(q.ToList(), new JsonSerializerSettings() { Formatting = Formatting.Indented });
        }
    }
}

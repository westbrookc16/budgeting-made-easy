using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
namespace budgetmanagementAngular.viewModels
{
    [JsonObject(MemberSerialization.OptOut)]
    public class budgetCategoryViewModel
    {
        public int? id { get; set; }
        public string name { get; set; }
        public decimal amount { get; set; }
        public int? budgetID { get; set; }
    }
}

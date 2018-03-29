using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using Newtonsoft.Json;
namespace budgetmanagementAngular.viewModels
{
    [JsonObject(MemberSerialization.OptOut)]
    public class budgetViewModel
    {
        public int? budgetID { get; set; }
        public int? month { get; set; }
        
        public int? year { get; set; }
        
        public decimal totalIncome { get; set; }
        public decimal totalSpent { get; set; }
        
    }
}

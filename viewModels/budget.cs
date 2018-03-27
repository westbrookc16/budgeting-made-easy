using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using Newtonsoft.Json;
namespace budgetmanagementAngular.viewModels
{
    [JsonObject(MemberSerialization.OptOut)]
    public class budget
    {
        public int? id { get; set; }
        public int? month { get; set; }
        
        public int? year { get; set; }
        public decimal totalSpent { get; set; }
        public decimal totalIncome { get; set; }
        [JsonIgnore]
        public string userName { get; set; }
    }
}

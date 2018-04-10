using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetmanagementAngular.data
{
    public class budgetCategory
    {
        public int budgetCategoryID { get; set; }
        public int budgetID { get; set; }
        public budget budget { get; set; }
        public string name { get; set; }
        public decimal amount { get; set; }
        public bool isRecurring { get; set; }
    }
}

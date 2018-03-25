using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetmanagementAngular.models
{
    public class budgetCategory
    {
        public int budgetCategoryID { get; set; }
        
        public int budgetID { get; set; }
     //public budget budget { get; set; }   
        public int categoryID { get; set; }
        //public category category { get; set; }
        public decimal income { get; set; }
    }
}

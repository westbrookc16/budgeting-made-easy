using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Design;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetmanagementAngular.data
{
    public class budget
    {
        public int budgetID { get; set; }
        public List<budgetCategory> categories { get; set; }
        public int month { get; set; }
        public int year { get; set; }
        [Column(TypeName="money")]
        public decimal totalIncome { get; set; }
        public DateTime? creationDate { get; set; }
        public string userID { get; set; }
        
    
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.Models
{
    public class BankDetail
    {
        [Key]
        public int BankDetailId { get; set; }
       
        public int SystemUserDetailId { get;set; }
        public SystemUserDetail SystemUserDetail { get; set; }
        [MaxLength(50)]
        public String BranchName { get; set; }
        [MaxLength(20)]
        public String AccountNo { get; set; }
        [MaxLength(20)]
        public String Ifsc { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.Models
{
    public class PassengersDetail
    {
        [Key]
        public int PassengersDetailId { set; get; }
        public int SystemUserDetailId { set; get; }
        public SystemUserDetail SystemUserDetail { set; get; }
        [MaxLength(25)]
        public String FirstName { get; set; }
        [MaxLength(25)]
        public String LastName { get; set; }
        [MaxLength(25)]
        public String Email { get; set; }
        [MaxLength(25)]
        public String Mobile { get; set; }
        [MaxLength(25)]
        public String PassportNo { get; set; }
        [MaxLength(25)]
        public String AadharNo { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.Models
{
    public class SystemUserDetail
    {
        [Key]
        public int SystemUserDetailId { get; set; }
        [MaxLength(25)]
        public String FirstName { get; set; }
        [MaxLength(25)]
        public String LastName { get; set; }
        [MaxLength(25)]
        public String Email { get; set; }
        [MaxLength(25)]
        public String Password { get; set; }
        [MaxLength(25)]
        public String Mobile { get; set; }
        [MaxLength(25)]
        public String Role { get; set; }
        [MaxLength(25)]
        public String PassportDetails { get; set; }
        [MaxLength(25)]
        public String Gender { get; set; }
        [MaxLength(25)]
        public String AadharDetails { get; set; }
     
        public Boolean RegisteredOrNot { get; set; }

        public ICollection<BookingDetail> BookingDetail { get; set; }

        public  BankDetail BankDetail { get; set; }

        public ICollection<PassengersDetail> PassengersDetail { get; set; }

        public String Token { get; set; }

    }
}

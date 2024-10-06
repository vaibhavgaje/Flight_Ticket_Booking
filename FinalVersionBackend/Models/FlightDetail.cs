using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.Models
{
    public class FlightDetail
    {
        [Key]
        public int FlightDetailId { get; set; }
        [Required]
        [MaxLength(50)]
        public String CompanyName { get; set; }
        [Required]
        [MaxLength(50)]
        public String FlightNumber { get; set; }

        public int ClassDetailId { get; set; }
        public ClassDetail ClassDetail { get; set; }
      
        public ICollection<BookingDetail> BookingDetail { get; set; }
        [MaxLength(25)]
        public String From{ get; set; }
        [MaxLength(25)]
        public String To { get; set; }
        [MaxLength(25)]
        public String DepartureTime { get; set; }
        [MaxLength(25)]
        public String ArrivalTime { get; set; }
        [MaxLength(25)]
        public String Distance { get; set; }

    }
}

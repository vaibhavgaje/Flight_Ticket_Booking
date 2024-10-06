using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.Models
{
    public class BookingDetail
    {
        [Key]
        public int BookingDetailId { get; set; }
      
        public int SystemUserDetailId { get; set; }
        public SystemUserDetail SystemUserDetail { get; set; }
        
        public int FlightDetailId { get; set; }
        public FlightDetail FlightDetail { get; set; }
        
        
        [Required]
        [MaxLength(50)]
        public String Date { get; set; }
        [Required]
        [MaxLength(50)]
        public String SelectedClass { get; set; }
        [Required]
        public Double FareDetails { get; set; }
        [MaxLength(10)]
        public String SeatNo { get; set; }

    }
}

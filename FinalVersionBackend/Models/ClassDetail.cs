using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.Models
{
    public class ClassDetail
    {
        [Key]
        public int ClassDetailId { get; set; }
        [Required]
        public int BusinessClassCapacity { get; set; }
        [Required]
        public double BusinessClassPrice { get; set; }
        [Required]
        public int PremiumClassCapacity { get; set; }
        [Required]
        public double PremiumClassPrice { get; set; }
        [Required]
        public int PremiumEconomyClassCapacity { get; set; }
        [Required]
        public double PremiumEconomyClassPrice { get; set; }
        [Required]
        public int EconomyClassCapacity { get; set; }
        [Required]
        public double EconomyClassPrice { get; set; }
        public ICollection<FlightDetail> FlightDetail { get; set; }
    }
}

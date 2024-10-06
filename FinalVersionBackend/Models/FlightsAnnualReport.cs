using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.Models
{
    public class FlightsAnnualReport
    {
        [Key]
        public int FlightsAnnualReportId{get;set;}
        public Double AirIndia { get; set; }
        public Double SpiceJet { get; set; }
        public Double Kingfisher { get; set; }
        public Double IndiGo { get; set; }
        public Double AirAsia { get; set; }
        public Double AllianceAir { get; set; }
    }
}

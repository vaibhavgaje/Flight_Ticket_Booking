using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.DTO
{
    public class TicketDataDTO
    {
        public String From { get; set; }
        public String To { get; set; }
        public String DepartureTime { get; set; }
        public String ArrivalTime { get; set; }
        public Double FareDetails { get; set; }
        public String Name { get; set; }
        public String Gender { get; set; }
        public int NoOfPassengers { get; set; }
        public String PassportNo { get; set; }
        public String Date { get; set; }

        public String SeatNo { get; set; }
    }
}

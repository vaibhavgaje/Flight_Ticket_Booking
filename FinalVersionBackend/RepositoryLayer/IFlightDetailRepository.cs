using BackendOfMajorProject.DTO;
using BackendOfMajorProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.RepositoryLayer
{
    public interface IFlightDetailRepository
    {
        public IEnumerable<FlightDetail> Get();
        public FlightDetail Get(int id);
        public IEnumerable<FlightDetail> GetFlights(FlightSearchDTO flightdata);
        public Boolean Post( FlightDetail value);
        public Boolean Delete(int id);
        public Boolean SeatCapcityUpdate(SeatCountDTO dto);
        public int GetAllFlightCount();
    }
}

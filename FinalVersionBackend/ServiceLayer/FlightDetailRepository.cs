using BackendOfMajorProject.DTO;
using BackendOfMajorProject.Models;
using BackendOfMajorProject.RepositoryLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.ServiceLayer
{
    public class FlightDetailRepository : IFlightDetailRepository
    {


        private readonly DatabaseContext ctx;
        public FlightDetailRepository(DatabaseContext ctx)
        {
            this.ctx = ctx;
        }
        public bool Delete(int id)
        {
            FlightDetail flight= ctx.FlightDetails.Find(id);
            ClassDetail classdetail = ctx.ClassDetails.Find(flight.ClassDetailId);
          

            ctx.ClassDetails.Remove(classdetail);
            ctx.FlightDetails.Remove(flight);

            ctx.SaveChanges();

            if (ctx.FlightDetails.Find(id) != null)
            {
                return false;
            }
            else
            {
                return true;
            }
            

        }

        public IEnumerable<FlightDetail> Get()
        {
            return ctx.FlightDetails.ToList();
        }

        public FlightDetail Get(int id)
        {
            FlightDetail fd= ctx.FlightDetails.Find(id);
            if (fd != null)
            {
                ClassDetail cd = ctx.ClassDetails.Find(fd.ClassDetailId);
            }
            
            
            return fd;
        }

        public int GetAllFlightCount()
        {
            int count = ctx.FlightDetails.Count();
            return count;
        }

        public IEnumerable<FlightDetail> GetFlights(FlightSearchDTO searchflightdata)
        {
            IEnumerable<FlightDetail> AvailableFlights = ctx.FlightDetails.Where(
                Flight => Flight.From.Equals(searchflightdata.From) &&
                Flight.To.Equals(searchflightdata.To));
           
            return AvailableFlights;
        }

        public bool Post(FlightDetail value)
        {
            ctx.FlightDetails.Add(value);
            ctx.SaveChanges();

            FlightDetail flight = ctx.FlightDetails.Find(value.FlightDetailId);
            if (flight != null)
            {
                return true;
            }
            else
            {
                return false;  
            }
        }

        public bool SeatCapcityUpdate(SeatCountDTO dto)
        {
            FlightDetail flight = ctx.FlightDetails.Find(dto.FlightId);
            ClassDetail classD = ctx.ClassDetails.Find(flight.ClassDetailId);
            if(dto.ClassName == "BusinessClass")
            {
                classD.BusinessClassCapacity = dto.UpdatedCount;
                ctx.SaveChanges();
                return true;
            }else if(dto.ClassName == "PremiumClass")
            {
                classD.PremiumClassCapacity = dto.UpdatedCount;
                ctx.SaveChanges();
                return true;
            }
            else if(dto.ClassName == "PremiumEconomyClass")
            {
                classD.PremiumEconomyClassCapacity = dto.UpdatedCount;
                ctx.SaveChanges();
                return true;

            }
            else if(dto.ClassName == "EconomyClass")
            {
                classD.EconomyClassCapacity = dto.UpdatedCount;
                ctx.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
           
        }
    }
}

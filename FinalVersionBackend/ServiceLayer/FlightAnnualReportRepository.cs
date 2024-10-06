using BackendOfMajorProject.Models;
using BackendOfMajorProject.RepositoryLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.ServiceLayer
{
    public class FlightAnnualReportRepository : IFlightAnnualReportRepository
    {
        private readonly DatabaseContext ctx;
        public FlightAnnualReportRepository(DatabaseContext ctx)
        {
            this.ctx = ctx;
        }

        public FlightsAnnualReport GetReportData(int id)
        {
            return ctx.flightsAnnualReports.Find(id);
        }

        public bool PostReportData(FlightsAnnualReport value)
        {
            ctx.flightsAnnualReports.Add(value);
            ctx.SaveChanges();
            return true;
        }
    }
}

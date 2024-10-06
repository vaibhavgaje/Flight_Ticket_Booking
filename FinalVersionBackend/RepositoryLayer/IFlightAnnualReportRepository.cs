using BackendOfMajorProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.RepositoryLayer
{
    public interface IFlightAnnualReportRepository
    {
        public FlightsAnnualReport GetReportData(int id);

        public Boolean PostReportData(FlightsAnnualReport value);
    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.Models
{
    public class DatabaseContext: DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }
        public DbSet<SystemUserDetail> SystemUserDetails { get; set; }
        public DbSet<BankDetail> BankDetails { get; set; }
        public DbSet<ClassDetail> ClassDetails { get; set; }
        public DbSet<FlightDetail> FlightDetails { get; set; }
        public DbSet<PassengersDetail> PassengersDetails { get; set; }
        public DbSet<BookingDetail> BookingDetails { get; set; }

        public DbSet<FlightsAnnualReport> flightsAnnualReports { get; set; }
    }
}

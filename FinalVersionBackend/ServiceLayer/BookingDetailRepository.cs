using BackendOfMajorProject.DTO;
using BackendOfMajorProject.Models;
using BackendOfMajorProject.RepositoryLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.ServiceLayer
{
    public class BookingDetailRepository : IBookingDetailRepository
    {
        private readonly DatabaseContext ctx;
        public BookingDetailRepository(DatabaseContext ctx)
        {
            this.ctx = ctx;
        }
        public bool Delete(int id)
        {
            BookingDetail BD= ctx.BookingDetails.Find(id);
          
                ctx.BookingDetails.Remove(BD);
                ctx.SaveChanges();
            
            BookingDetail Confirmation= ctx.BookingDetails.Find(id);
            if (Confirmation != null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public IEnumerable<BookingDetail> Get()
        {
            return ctx.BookingDetails.ToList();
        }

        public BookingDetail Get(int id)
        {
            BookingDetail BD= ctx.BookingDetails.Find(id);
            SystemUserDetail SYD = ctx.SystemUserDetails.Find(BD.SystemUserDetailId);
            FlightDetail FD = ctx.FlightDetails.Find(BD.FlightDetailId);
            return BD;
        }

  /*      public IEnumerable<BookedSeatDTO> GetBookedSeat()
        {
            *//*    IEnumerable<BookingDetail> bookingd = ctx.BookingDetails.Where(flight =>
                 flight.SystemUserDetailId.Equals(id));*//*

           // IEnumerable<BookingDetail> bookingd = ctx.BookingDetails.ToList();

            IEnumerable<BookedSeatDTO> seats =(IEnumerable<BookedSeatDTO>)ctx.BookingDetails.Select(x => x.SeatNo);
            *//* var count = ctx.BookingDetails.Count(me => me.BookingDetailId > 0);
             for (int i = 0; i <= count; i++)
             {
                 seats = 
             }*//*
            //db.Items.Where(x=> x.userid == user_ID).Select(x=>x.Id).Distinct();
            return seats;
        }*/

        public bool Post(BookingDetail BookingDet)
        {

            try
            {
                BookingDetail bDetail = BookingDet;

                FlightDetail fDetail = ctx.FlightDetails.Find(bDetail.FlightDetailId);
                ClassDetail cDetail = ctx.ClassDetails.Find(fDetail.ClassDetailId);
                //--------------------------------------
                //To Generate annual flights report


                FlightsAnnualReport annualReport = ctx.flightsAnnualReports.Find(1);

                if (fDetail.CompanyName.Equals("AirIndia"))
                {
                    Double airIndia = bDetail.FareDetails;
                    annualReport.AirIndia = annualReport.AirIndia + airIndia;
                    ctx.SaveChanges();
                }
                else if (fDetail.CompanyName.Equals("SpiceJet"))
                {
                    Double spiceJet = bDetail.FareDetails;
                    annualReport.SpiceJet = annualReport.SpiceJet + spiceJet;
                    ctx.SaveChanges();
                }
                else if (fDetail.CompanyName.Equals("Kingfisher"))
                {
                    Double kingFisher = bDetail.FareDetails;
                    annualReport.Kingfisher = annualReport.Kingfisher + kingFisher;
                    ctx.SaveChanges();
                }
                else if (fDetail.CompanyName.Equals("IndiGo"))
                {
                    Double indiaGo = bDetail.FareDetails;
                    annualReport.IndiGo = annualReport.IndiGo + indiaGo;
                    ctx.SaveChanges();
                }
                else if (fDetail.CompanyName.Equals("AirAsia"))
                {
                    Double airAsia = bDetail.FareDetails;
                    annualReport.AirAsia = annualReport.AirAsia + airAsia;
                    ctx.SaveChanges();
                }
                else if (fDetail.CompanyName.Equals("AllianceAir"))
                {
                    Double allianceAir = bDetail.FareDetails;
                    annualReport.AllianceAir = annualReport.AllianceAir + allianceAir;
                    ctx.SaveChanges();
                }

                //--------------------------------------
                //SeatNo AutoGeneration
                int remainingSeats;
                if (bDetail.SelectedClass == "BusinessClass")
                {
                    remainingSeats = cDetail.BusinessClassCapacity;
                    String seat = remainingSeats + "BC";
                    bDetail.SeatNo = seat;
                    ctx.BookingDetails.Add(bDetail);
                    ctx.SaveChanges();
                    return true;
                }
                else if (bDetail.SelectedClass == "PremiumClass")
                {
                    remainingSeats = cDetail.PremiumClassCapacity;
                    String seat = remainingSeats + "PC";
                    bDetail.SeatNo = seat;
                    ctx.BookingDetails.Add(bDetail);
                    ctx.SaveChanges();
                    return true;
                }
                else if (bDetail.SelectedClass == "PremiumEconomyClass")
                {
                    remainingSeats = cDetail.PremiumEconomyClassCapacity;
                    String seat = remainingSeats + "PEC";
                    bDetail.SeatNo = seat;
                    ctx.BookingDetails.Add(bDetail);
                    ctx.SaveChanges();
                    return true;
                }
                else if (bDetail.SelectedClass == "EconomyClass")
                {
                    remainingSeats = cDetail.EconomyClassCapacity;
                    String seat = remainingSeats + "EC";
                    bDetail.SeatNo = seat;
                    ctx.BookingDetails.Add(bDetail);
                    ctx.SaveChanges();
                    return true;
                }
                
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured \n Check All foreign key tables are available in database or not\nException::"+e);
            }
            return false;
       
        }

        public TicketDataDTO GetTicketData(int userid)
        {
            BookingDetail Bdetail = ctx.BookingDetails.FirstOrDefault(x => x.SystemUserDetailId.Equals(userid));
            FlightDetail fdetail = ctx.FlightDetails.Find(Bdetail.FlightDetailId);
            ClassDetail cdetail = ctx.ClassDetails.Find(fdetail.ClassDetailId);
            SystemUserDetail sdetail = ctx.SystemUserDetails.Find(userid);

            int passengerCount = ctx.PassengersDetails.Count(x => x.SystemUserDetailId == userid);

            TicketDataDTO dto = new TicketDataDTO
            {
                Date = Bdetail.Date,
                From = fdetail.From,
                To = fdetail.To,
                ArrivalTime = fdetail.ArrivalTime,
                DepartureTime = fdetail.DepartureTime,
                FareDetails = Bdetail.FareDetails,
                Name = sdetail.FirstName + " " + sdetail.LastName,
                Gender = sdetail.Gender,
                PassportNo = sdetail.PassportDetails,
                NoOfPassengers = passengerCount,
                SeatNo = Bdetail.SeatNo 
                
            };
               
               

            return dto;
        }

        public IEnumerable<BookingDetail> GetBookingHistory(int userid)
        {
            IEnumerable<BookingDetail> bdetail = ctx.BookingDetails.Where(x => x.SystemUserDetailId == userid);
           
            return bdetail;
        }


    }
}

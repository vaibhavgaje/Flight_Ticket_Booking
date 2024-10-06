using BackendOfMajorProject.Models;
using BackendOfMajorProject.RepositoryLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.ServiceLayer
{
    public class PassengerDetailRepository : IPassengerDetailRepository
    {
        private readonly DatabaseContext ctx;
        public PassengerDetailRepository(DatabaseContext ctx)
        {
            this.ctx = ctx;
        }
        public bool Delete(int id)
        {
            PassengersDetail PD= ctx.PassengersDetails.Find(id);
            if (PD != null)
            {
                ctx.PassengersDetails.Remove(PD);
                ctx.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

        public PassengersDetail Get(int id)
        {
            PassengersDetail pd= ctx.PassengersDetails.Find(id);
            SystemUserDetail sud = ctx.SystemUserDetails.Find(pd.SystemUserDetailId);
            return pd;
        }

        public IEnumerable<PassengersDetail> GetAll()
        {
            return ctx.PassengersDetails.ToList();
        }

        public bool Post(PassengersDetail Passenger)
        {
            ctx.PassengersDetails.Add(Passenger);
            ctx.SaveChanges();

            PassengersDetail pd = ctx.PassengersDetails.Find(Passenger.PassengersDetailId);
            if (pd != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool Put(int id ,PassengersDetail Passenger)
        {
            PassengersDetail pd = ctx.PassengersDetails.Find(id);
          
            if (pd != null)
            {
                pd.FirstName = Passenger.FirstName;
                pd.LastName = Passenger.LastName;
                pd.AadharNo = Passenger.AadharNo;
                pd.Email = Passenger.Email;
                pd.Mobile = Passenger.Mobile;             
                pd.PassportNo = Passenger.PassportNo;

                ctx.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

        // multiple passenger details for one user
     /*   public IEnumerable<PassengersDetail> passengers (int userid)
        {
            return ctx.PassengersDetails.Where(x => x.SystemUserDetailId == userid);
        }*/
    }
}

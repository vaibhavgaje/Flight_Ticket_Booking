using BackendOfMajorProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.RepositoryLayer
{
   public interface IPassengerDetailRepository
    {
        public Boolean Delete(int id);
        public IEnumerable<PassengersDetail> GetAll();
        public PassengersDetail Get(int id);
        public Boolean Post(PassengersDetail Passenger);
        public Boolean Put(int id,PassengersDetail Passenger);
       // public IEnumerable<PassengersDetail> passengers(int userid);


    }
}

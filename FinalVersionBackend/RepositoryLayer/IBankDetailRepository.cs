using BackendOfMajorProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.RepositoryLayer
{
    public interface IBankDetailRepository
    {
        public Boolean Delete(int id);
        public Boolean Post(BankDetail bd);
        public BankDetail GetById(int id);
        public Boolean Update(int id, BankDetail bd);
        public IEnumerable<BankDetail> GetAll();
    }
}

using BackendOfMajorProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.RepositoryLayer
{
   public interface ISystemUserRepository
    {
        public IEnumerable<SystemUserDetail> Get();
        public SystemUserDetail Get(int id);
        public Boolean Post(SystemUserDetail NewUser);
        public Boolean Put(int id, SystemUserDetail User);
        public Boolean Delete(int id);
        public int GetAllUserCount();
        public SystemUserDetail PostVisitorData(SystemUserDetail NewUser);
    }
}

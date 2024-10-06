using BackendOfMajorProject.DTO;
using BackendOfMajorProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.RepositoryLayer
{
    public interface ILoginRepository
    {
        public SystemUserDetail Login(UserLoginDTO dto);
    }
}

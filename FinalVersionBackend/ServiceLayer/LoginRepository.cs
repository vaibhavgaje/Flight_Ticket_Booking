using BackendOfMajorProject.DTO;
using BackendOfMajorProject.Models;
using BackendOfMajorProject.RepositoryLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.ServiceLayer
{
    public class LoginRepository : ILoginRepository
    {
        private readonly DatabaseContext ctx;
        public LoginRepository(DatabaseContext ctx)
        {
            this.ctx = ctx;
        }
        public SystemUserDetail Login(UserLoginDTO dto)
        {
            SystemUserDetail PresentUser = ctx.SystemUserDetails.FirstOrDefault(x => x.Email == dto.email);

            return PresentUser;
            
        }
    }
}

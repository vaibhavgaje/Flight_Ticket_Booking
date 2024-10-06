using BackendOfMajorProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.RepositoryLayer
{
    public class SystemUserRepository : ISystemUserRepository
    {
        private readonly DatabaseContext ctx;

        public SystemUserRepository(DatabaseContext ctx)
        {
            this.ctx = ctx;
        }

        public Boolean Delete(int id)
        {
            SystemUserDetail User = ctx.SystemUserDetails.Find(id);
           
            if (User != null)
            {
                ctx.SystemUserDetails.Remove(User);
                ctx.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
            
        }

        public IEnumerable<SystemUserDetail> Get()
        {
            return ctx.SystemUserDetails.ToList();          
        }

        public SystemUserDetail Get(int id)
        {
            return ctx.SystemUserDetails.Find(id);      
        }

        public int GetAllUserCount()
        {
            int count = ctx.SystemUserDetails.Count();
            return count;
        }

        public Boolean Post(SystemUserDetail NewUser)
        {
            ctx.SystemUserDetails.Add(NewUser);
            ctx.SaveChanges();
            SystemUserDetail SystemUser = ctx.SystemUserDetails.Find(NewUser.SystemUserDetailId);
            if (SystemUser != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public Boolean Put(int id, SystemUserDetail User)
        {
           SystemUserDetail UserToBeUpdated = ctx.SystemUserDetails.Find(id);
            if (UserToBeUpdated != null)
            {
                UserToBeUpdated.FirstName = User.FirstName;
                UserToBeUpdated.LastName = User.LastName;
                UserToBeUpdated.Mobile = User.Mobile;
                UserToBeUpdated.Password = User.Password;
                UserToBeUpdated.Role = "User";
                UserToBeUpdated.Email = User.Email;
                UserToBeUpdated.PassportDetails = User.PassportDetails;
                UserToBeUpdated.Gender = User.Gender;
                UserToBeUpdated.AadharDetails = User.AadharDetails;
                UserToBeUpdated.RegisteredOrNot = UserToBeUpdated.RegisteredOrNot;

                ctx.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

        public SystemUserDetail PostVisitorData(SystemUserDetail NewUser)
        {
            NewUser.RegisteredOrNot = false;
            NewUser.Password = "NA";
            ctx.SystemUserDetails.Add(NewUser);
            ctx.SaveChanges();
            SystemUserDetail SystemUser = ctx.SystemUserDetails.Find(NewUser.SystemUserDetailId);
            if (SystemUser != null)
            {
                return SystemUser;
            }
            else
            {
                return null;
            }
        }
    }
}

using BackendOfMajorProject.Models;
using BackendOfMajorProject.RepositoryLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.ServiceLayer
{
    public class BankDetailRepository : IBankDetailRepository
    {
        private readonly DatabaseContext ctx;
        public BankDetailRepository(DatabaseContext ctx)
        {
            this.ctx = ctx;
        }
        public bool Delete(int id)
        {
            BankDetail bd = ctx.BankDetails.Find(id);
            if (bd != null)
            {
                ctx.BankDetails.Remove(bd);
                ctx.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

        public IEnumerable<BankDetail> GetAll()
        {
            return ctx.BankDetails.ToList();
        }

        public BankDetail GetById(int id)
        {
            BankDetail bd= ctx.BankDetails.Find(id);
            SystemUserDetail sud = ctx.SystemUserDetails.Find(bd.SystemUserDetailId);
            return bd;

        }

        public bool Post(BankDetail bd)
        {
            ctx.BankDetails.Add(bd);
            ctx.SaveChanges();

            BankDetail Bankd = ctx.BankDetails.Find(bd.BankDetailId);
            if (Bankd != null)
            {
                return true;
            }
            else
            {
                return false;
            }

        }

        public bool Update(int id, BankDetail bd)
        {
            BankDetail Bankd = ctx.BankDetails.Find(id);
            if (Bankd != null)
            {
                Bankd.AccountNo = bd.AccountNo;
                Bankd.BranchName = bd.BranchName;
                Bankd.Ifsc = bd.Ifsc;
                ctx.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}

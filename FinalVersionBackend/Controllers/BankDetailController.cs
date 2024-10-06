using BackendOfMajorProject.Models;
using BackendOfMajorProject.RepositoryLayer;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendOfMajorProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BankDetailController : ControllerBase
    {
        private readonly IBankDetailRepository BankRepository;
        public BankDetailController(IBankDetailRepository BankRepository)
        {
            this.BankRepository = BankRepository;
        }
   
        /// <summary>
        /// Get Bank details for a selected User through this function 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // GET api/<BankDetailController>/{id}
        [HttpGet("{id}")]
        public BankDetail Get(int id)
        {
            return BankRepository.GetById(id);
        }
        [HttpGet]
        public IEnumerable<BankDetail> Get()
        {
            return BankRepository.GetAll();
        }

        /// <summary>
        /// User can add bank details in our databasae through this function
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        // POST api/<BankDetailController>
        [HttpPost]
        public IActionResult Post([FromBody] BankDetail value)
        {
            try
            {
                Boolean IsTrue = BankRepository.Post(value);
                if (IsTrue)
                {
                    return Ok("Data Posted Successfully");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured while inserting data in bank \nException::"+e);
            }  
            return BadRequest("Post Operation Failed");         
        }


        /// <summary>
        /// User can update his bank details through this function
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        // PUT api/BankDetailController/{id}
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] BankDetail value)
        {
            try
            {
                Boolean IsTrue = BankRepository.Update(id, value);
                if (IsTrue)
                {
                    return Ok("Data Updated Successfully");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured While updating bank Details \n+Exception::"+e);
            }           
            return BadRequest("Update Operation Failed");            
        }

        /// <summary>
        /// User Can delete his bank account data through this function
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // DELETE api/BankDetailController/{id}
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                Boolean IsTrue = BankRepository.Delete(id);
                if (IsTrue)
                {
                    return Ok("Data Updated Successfully");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured While Deleting bank Detail \n+Exception::" + e);
            }        
            return BadRequest("Update Operation Failed");           
        }
    }
}

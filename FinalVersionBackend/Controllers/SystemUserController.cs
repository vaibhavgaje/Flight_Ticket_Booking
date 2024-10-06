using BackendOfMajorProject.Models;
using BackendOfMajorProject.RepositoryLayer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendOfMajorProject.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class SystemUserController : ControllerBase
    {
        private readonly ISystemUserRepository UserRepository;

        public SystemUserController(ISystemUserRepository UserRepository)
        {
            this.UserRepository = UserRepository;
        }

        /// <summary>
        /// This function is available for admin to view all the available system users
        /// </summary>
        /// <returns></returns>
        // GET: api/<SystemUserController>
        [HttpGet]
        public IEnumerable<SystemUserDetail> Get()
        {
            try
            {
                return UserRepository.Get();
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception occured while performing get operation in System user Detail \n+ Exception::"+e);
            }
            return null;
        }

        /// <summary>
        /// Get By userid function displays all the data of the foreign keys which is available in database
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // GET api/<SystemUserController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                SystemUserDetail SystemUser = UserRepository.Get(id);
                if (SystemUser != null)
                {
                    return Ok(SystemUser);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception occured while performing get operation in System user Detail \n+ Exception::" + e);
            }           
           return BadRequest("User with this Id is not present");
            
        }

        /// <summary>
        /// This Function helps for registration
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        // POST api/<SystemUserController>
        [HttpPost]
        public IActionResult Post([FromBody] SystemUserDetail value)
        {
            try
            {
                Boolean IfTrue = UserRepository.Post(value);
                if (IfTrue)
                {
                    return Ok("Data Posted Successfully");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception occured while performing Post operation in System user Detail \n+ Exception::" + e);
                return Ok("Post Opeartion Failed");
            }
            finally
            {
                Console.WriteLine("Check your database for credentials");

            }
            return Ok("Failed");

        }

        /// <summary>
        /// After Login with OTP this function helps to take
        /// required data from user
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("postvisitor")]
        public IActionResult PostVisitor([FromBody] SystemUserDetail value)
        {
            try
            {
                SystemUserDetail User = UserRepository.PostVisitorData(value);
                if (User!=null)
                {
                    return Ok(User);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception occured while performing Post operation in System user Detail \n+ Exception::" + e);
            }    
           return BadRequest("Post Opeartion Failed");
            
        }


        /// <summary>
        /// This function helps user to update his own profile
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        // PUT api/<SystemUserController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] SystemUserDetail value)
        {
            try
            {
                Boolean IsTrue = UserRepository.Put(id, value);
                if (IsTrue)
                {
                    return Ok("System User Updated Successfully");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception occured while performing Update operation in System user Detail \n+ Exception::" + e);
            }         
            return BadRequest("Updation Failed");
            
        }

        /// <summary>
        /// this function Delete User is available only for admin
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // DELETE api/<SystemUserController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                Boolean IsTrue = UserRepository.Delete(id);
                if (IsTrue == true)
                {
                    return Ok("success");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception occured while performing Delete operation in System user Detail \n+ Exception::" + e);
            }
            return BadRequest("System user delete Operation failed");
            
        }
        /// <summary>
        /// Get Count of All Users Available in our system
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("countallusers")]
        public int GetUsersCount()
        {
            try
            {
                return UserRepository.GetAllUserCount();
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception occured while performing Count operation in System user Detail \n+ Exception::" + e);
            }
            return 0;
        }
    }
}

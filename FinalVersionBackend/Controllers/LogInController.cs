using BackendOfMajorProject.DTO;
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
    public class LogInController : ControllerBase
    {
        private readonly ILoginRepository LoginRepository;
        public LogInController(ILoginRepository LoginRepository)
        {
            this.LoginRepository = LoginRepository;
        }

        /// <summary>
        /// This is Normal LogIn Method wihtout JWT 
        /// JWT authentication controller already created but not in use
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        // POST api/<LogInController>
        [HttpPost]
        public IActionResult Post([FromBody] UserLoginDTO value)
        {
            SystemUserDetail user = LoginRepository.Login(value);
            try
            {               
                if (user.Email == value.email && user.Password == value.password)
                {
                    return Ok(user);
                }           
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured while Login Error is::"+e);
                return Ok();
                
            }finally{
                Console.WriteLine("Check your database for credentials");
                
            }
            return Ok("Invalid Credentials"); 
        }

       
        
    }
}

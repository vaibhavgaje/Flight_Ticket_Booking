using BackendOfMajorProject.DTO;
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
    /// <summary>
    /// JWT(JSON WEB TOKEN) 
    /// </summary>
    
   // [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private IAuthenticateRepository authenticateRepository;
        public AuthenticationController(IAuthenticateRepository authenticateRepository)
        {
            this.authenticateRepository = authenticateRepository;
        }


        /// <summary>
        /// this controller generates token which secures our API's during
        ///  frontend and backend communication
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        // POST api/<AuthenticationController>
        [HttpPost]
        public IActionResult Authenticate([FromBody] UserCredentialDTO dto)
        {
            var user = authenticateRepository.Authenticate(dto);
            if (user == null)
            {
                return BadRequest(new { message = "Username and Password is not Correct" });
            }
            else
            {
                return Ok(user);
            }
            
        }
         
        
    }
}

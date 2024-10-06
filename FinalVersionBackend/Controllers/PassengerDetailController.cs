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
    public class PassengerDetailController : ControllerBase
    {
        private readonly IPassengerDetailRepository passengerRepository;

        public PassengerDetailController(IPassengerDetailRepository PassengerRepository)
        {
            this.passengerRepository = PassengerRepository;
        }

        /// <summary>
        /// Get All Passengers list from the database
        /// </summary>
        /// <returns></returns>
        // GET: api/<PassengerDetailController>
        [HttpGet]
        public IEnumerable<PassengersDetail> Get()
        {
            try
            {
                return passengerRepository.GetAll();
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured while fetching all Passenger Details \nException::"+e);
            }
            return null;
        }

        /// <summary>
        /// Get particular Passenger details 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>

        // GET api/<PassengerDetailController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                PassengersDetail passenger = passengerRepository.Get(id);
                if (passenger != null)
                {
                    return Ok(passenger);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured while fetching all Passenger Details \nException::" + e);
            }         
            return BadRequest("Not Found in database");
            
        }


        /// <summary>
        /// Add Passenger details with reference to user
        /// One to many relationship
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        // POST api/<PassengerDetailController>
        [HttpPost]
        public IActionResult Post([FromBody] PassengersDetail value)
        {
            try
            {
                Boolean IsTrue = passengerRepository.Post(value);
                if (IsTrue)
                {
                    return Ok("Passenger Details Posted Successfully");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured while Adding Passenger Details \nException::" + e);
            }          
                return BadRequest("Failed to post successfully"); 
            
          
        }

        /// <summary>
        /// Update method for passenger
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        /// <returns></returns>

        // PUT api/<PassengerDetailController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] PassengersDetail value)
        {
            try
            {
                Boolean IsTrue = passengerRepository.Put(id, value);
                if (IsTrue)
                {
                    return Ok("Passenger Details Updated Successfully");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured while Updating Passenger Details \nException::" + e);
            }         
            return BadRequest("Failed to Update");
            
        }

        /// <summary>
        /// Delete Method for Passenger
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // DELETE api/<PassengerDetailController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                Boolean IsTrue = passengerRepository.Delete(id);
                if (IsTrue)
                {
                    return Ok("Passenger Details Deleted Successfully");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured while Deleting Passenger Details \nException::" + e);
            }
                return BadRequest("Failed to Delete");
            
        }
    }
}

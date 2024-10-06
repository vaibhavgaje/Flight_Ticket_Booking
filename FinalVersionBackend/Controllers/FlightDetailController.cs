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
    public class FlightDetailController : ControllerBase
    {
        private readonly IFlightDetailRepository FlightRepository;
        public FlightDetailController(IFlightDetailRepository FlightRepository)
        {
            this.FlightRepository = FlightRepository;
        }

        // GET: api/<FlightDetailController>
        [HttpGet]
        public IEnumerable<FlightDetail> Get()
        {
            try
            {
                return FlightRepository.Get();
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured while Fetching Flight details related to user in Flight table \nException::" + e);
            }
            return null;
        }

        // GET api/<FlightDetailController>/5
        [HttpGet("{id}")]
        public FlightDetail Get(int id)
        {
            try
            {
                return FlightRepository.Get(id);
            }
            catch (Exception e)
            {

                Console.WriteLine("Exception Occured while Fetching particular Flight details related to user in flight table \nException::" + e);
            }
            return null;
       
        }

      /// <summary>
      /// Function to search all available flights on that route 
      /// accepts From and To parameter through dto and returns list of flight
      /// </summary>
      /// <param name="dto"></param>
      /// <returns></returns>

 
        [HttpPost]
        [Route("search")]
        public IEnumerable<FlightDetail> SearchFlight([FromBody] FlightSearchDTO dto)
        {
            try
            {
                return FlightRepository.GetFlights(dto);
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured while Searching flights for flight table \nException::" + e);
            }
            return null;
        }

        /// <summary>
        /// Get count of all available flights
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("getflightcount")]
        public int GetFlightCount()
        {
            return FlightRepository.GetAllFlightCount();
        }

        /// <summary>
        /// Seat Capacity function update the capacity of 
        /// available seats in our backend,It will help to 
        /// maintain the count of available seats
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("seatcapacity")]
        public IActionResult SeactCapacity([FromBody] SeatCountDTO dto)
        {
           Boolean IsTrue= FlightRepository.SeatCapcityUpdate(dto);
            if (IsTrue)
            {
                return Ok("Seat Capacity Updated Successfully");
            }
            else
            {
                return BadRequest("Opeartion Failed");
            }
            
        }

        /// <summary>
        /// This function is written for admin
        /// admin can add data related to flights
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>

        // POST api/<FlightDetailController>
        [HttpPost]
        public IActionResult Post([FromBody] FlightDetail value)
        {
            try
            {
                Boolean IsTrue = FlightRepository.Post(value);
                if (IsTrue)
                {
                    return Ok("Flight Data Inserted Successfully");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured while Adding flight data in flight table \nException::" + e);
            }
           
           return BadRequest("Post Operation Failed");
           
        }

     /// <summary>
     /// delete opearation for flight 
     /// </summary>
     /// <param name="id"></param>
     /// <returns></returns>

        // DELETE api/<FlightDetailController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                Boolean IsTrue = FlightRepository.Delete(id);
                if (IsTrue)
                {
                    return Ok("success");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured while deleting flight data from flight table \nException::" + e);
            }
            return BadRequest("Delete operation failed");
            
        }
    }
}

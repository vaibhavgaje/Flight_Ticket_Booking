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
    public class BookingDetailController : ControllerBase
    {
        private readonly IBookingDetailRepository BookingRepository;
        
        public BookingDetailController(IBookingDetailRepository BookingRepository)
        {
            this.BookingRepository = BookingRepository;
        }

        /// <summary>
        /// Fetch all users booking data which is available in database
        /// </summary>
        /// <returns></returns>
        // GET: api/<BookingDetailController>
        [HttpGet]
        public IEnumerable<BookingDetail> Get()
        {
            try
            {
                return BookingRepository.Get();
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured while fetching data from booking table \nException::"+e);
            }
            return null;
        }

        /// <summary>
        /// This function returns booking detail for a particular user
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // GET api/<BookingDetailController/getbookingbyid/{id:int}        
        [HttpGet]
        [Route("getbookingbyid/{id:int}")]
        public BookingDetail Get(int id)
        {
            try
            {
                return BookingRepository.Get(id);
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured while fetching data for a single user from booking table \nException::" + e);
            }
            return null;
        }

        /// <summary>
        /// This function helps to add the booking data in database
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        // POST api/<BookingDetailController>
        [HttpPost]
        public IActionResult Post([FromBody] BookingDetail value)
        {
            try
            {
                Boolean IsTrue = BookingRepository.Post(value);
                if (IsTrue)
                {
                    return Ok("data Posted Successfully");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured while Adding Booking details related to user in booking table \nException::" + e);
            }          
            return BadRequest("Post Operation Failed");
            
        }
        /// <summary>
        /// Delete booking detail by user ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // DELETE api/<BookingDetailController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                Boolean IsTrue = BookingRepository.Delete(id);
                if (IsTrue)
                {
                    return Ok("Booking Detail deleted");
                }
            }
            catch (Exception e)
            {
                 Console.WriteLine("Exception Occured while Adding Booking details related to user in booking table \nException::" + e);
            }        
            return BadRequest("Booking Detail Delete Operation Failed");
            
        }

        /// <summary>
        /// Get Booking history of the user 
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("bookinghistory/{userid:int}")]
        public IEnumerable<BookingDetail> GetBookingHistory(int userid)
        {
            try
            {
                return BookingRepository.GetBookingHistory(userid);
            }
            catch (Exception e)
            {

                Console.WriteLine("Exception Occured while Fetching Booking History through booking table \nException::" + e);
            }
            return null;
        }

    }
}

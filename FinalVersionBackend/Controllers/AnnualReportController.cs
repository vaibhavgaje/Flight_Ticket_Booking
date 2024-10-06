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
    public class AnnualReportController : ControllerBase
    {
        private readonly IFlightAnnualReportRepository reportRepository;

        public AnnualReportController(IFlightAnnualReportRepository reportRepository)
        {
            this.reportRepository = reportRepository;
        }
       

        /// <summary>
        ///This function helps to generate the graph for annual financial
        ///turnover with respected to the company , this function sends addition of all
        ///the transactions which are done by user
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public FlightsAnnualReport Get(int id)
        {
            try
            {
                return reportRepository.GetReportData(id);
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception occured while fetching Annual Report data\n Exception::"+e);
            }
            return null;
        }



        /// <summary>
        /// To set initial values to 0 of all entities in our database we 
        /// have created this function, This function is not included at frontend
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        // POST api/<AnnualReportController>
        [HttpPost]
        public IActionResult ResetAnnualReport([FromBody] FlightsAnnualReport value)
        {
            try
            {
                Boolean IsTrue = reportRepository.PostReportData(value);
                if (IsTrue)
                {
                    return Ok("Annual Data Reset to Zero");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Occured from Annual report controller \n Exception::"+e);     
            }        
            return BadRequest("Operation Failed");
            
        }

   
    }
}

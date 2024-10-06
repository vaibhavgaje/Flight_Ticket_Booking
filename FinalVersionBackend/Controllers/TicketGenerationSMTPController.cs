using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Mail;
using BackendOfMajorProject.DTO;
using BackendOfMajorProject.RepositoryLayer;
using BackendOfMajorProject.Models;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendOfMajorProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketGenerationSMTPController : ControllerBase
    {
       
        private readonly IBookingDetailRepository TicketRepo;

        public TicketGenerationSMTPController(IBookingDetailRepository TicketRepo)
        {
            this.TicketRepo = TicketRepo;
        }
       

        public string GetTicketData(int userid)
        {
            TicketDataDTO bookingd = TicketRepo.GetTicketData(userid);

             String Date = bookingd.Date;
             String DepartureTime = bookingd.DepartureTime;
             String ArrivalTime = bookingd.ArrivalTime;
             String From = bookingd.From;
             String To = bookingd.To;
             String Seat = bookingd.SeatNo;
             Double Fare = bookingd.FareDetails;
             String Name = bookingd.Name;
             String Gender = bookingd.Gender;

            int NoOfPassengers = bookingd.NoOfPassengers;
            String PassportNo = bookingd.PassportNo;



            /*  String MailBody = "<html>" +
                                            "<body >" +
                                                    "<center>" +
                                                      " <h1> WelCome to FlyEarly</h1>" +
                                                    "</center>" +
                                                    "<center>" +
                                                     "<table style=\"background-color:#DBD6D5;border:10px solid #7A7573;border-radius:20px;width:350px;padding:10px\" >" +

                                                      "<tr>" +
                                                       " <td style = \"font-weight: bold;\" > Arrival Time:" + ArrivalTime + "</td>" +
                                                      " <td style = \"font-weight: bold;\" > Departure Time:" + DepartureTime + "</td>" +                                                  
                                                      "</tr>" +
                                                       "<tr>" +
                                                      " <td style = \"font-weight: bold;\" > Date:" + Date + "</td>" +
                                                      "</tr>" +
                                                      " <tr>" +
                                                      "<td style = \"font-weight: bold;\" > From:" + From + "</td>" +
                                                      "<td style = \"font-weight: bold;\" > To:" + To + "</td>" +
                                                      "</tr>" +
                                                       "<tr>" +
                                                      "<td style = \"font-weight: bold;\" > Name:" + Name + "</td>" +
                                                      "</tr>" +
                                                      "<tr>" +
                                                      "<td style = \"font-weight: bold;\" > Seat No:" + Seat + "</td> " +
                                                      "<td style = \"font-weight: bold;\" > Fare:" + Fare + "</td>" +
                                                      "</tr>" +
                                                      "<tr>" +
                                                      "<td style = \"font-weight: bold;\" > Gender:" + Gender + "</td>" +
                                                      "</tr>" +
                                                      "<tr>" +
                                                      "<td style = \"font-weight: bold;\" > Passport No:" + PassportNo + "</td> " +
                                                      "<td style = \"font-weight: bold;\" > No of Passengers:" + NoOfPassengers + "</td>" +
                                                      "</tr>" +
                                                 "</table>" +
                                                "</center>" +
                                             "</body>"
                                     + "</html>";*/

            String MailBody = "<html>" +
                                       "<body>" +
                                               "<center>" +
                                                 " <h1> WelCome to FlyEarly</h1>" +
                                               "</center>" +
                                               "<center>" +
                                                "<table style=\"border:1px solid black;border-radius:2px;width:350px;padding:10px;\" >" +
                                                 "<tr>" +
                                                       " <td style = \"font-weight: bold;\" > Arrival Time:" + ArrivalTime + "</td>" +
                                                      " <td style = \"font-weight: bold;\" > Departure Time:" + DepartureTime + "</td>" +
                                                      "</tr>" +
                                                       "<tr>" +
                                                      " <td style = \"font-weight: bold;\" > Date:" + Date + "</td>" +
                                                      "</tr>" +
                                                      " <tr>" +
                                                      "<td style = \"font-weight: bold;\" > From:" + From + "</td>" +
                                                      "<td style = \"font-weight: bold;\" > To:" + To + "</td>" +
                                                      "</tr>" +
                                                       "<tr>" +
                                                      "<td style = \"font-weight: bold;\" > Name:" + Name + "</td>" +
                                                      "</tr>" +
                                                      "<tr>" +
                                                      "<td style = \"font-weight: bold;\" > Seat No:" + Seat + "</td> " +
                                                      "<td style = \"font-weight: bold;\" > Fare:" + Fare + "</td>" +
                                                      "</tr>" +
                                                      "<tr>" +
                                                      "<td style = \"font-weight: bold;\" > Gender:" + Gender + "</td>" +
                                                      "</tr>" +
                                                      "<tr>" +
                                                      "<td style = \"font-weight: bold;\" > Passport No:" + PassportNo + "</td> " +
                                                      "<td style = \"font-weight: bold;\" > No of Passengers:" + NoOfPassengers + "</td>" +
                                                      "</tr>" +
                                            "</table>" +
                                           "</center>" +
                                        "</body>"
                                + "</html>";


            return MailBody;

        }


        string subject = "Welcome to FlyEarly";
        string mailTitle = "Email from .Net Core App";
        string fromEmail = "Trng2@evolvingsols.com";
        string fromEmailPassword = "Cybage@#123";




        // POST api/<TicketGenerationSMTPController>
        [HttpPost]
        public IActionResult Post([FromBody] EmailDTO toEmail)
        {
            //Email & Content
            MailMessage messaage = new MailMessage(new MailAddress(fromEmail, mailTitle), new MailAddress(toEmail.emailDTO));
            messaage.Subject = subject;
            messaage.Body = GetTicketData(toEmail.UserId);
            messaage.IsBodyHtml = true;

            //Server Details
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "webmail.evolvingsols.com";
            smtp.Port = 25;
            smtp.EnableSsl = false;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;

            //Credentials
            System.Net.NetworkCredential credentials = new System.Net.NetworkCredential();
            credentials.UserName = fromEmail;
            credentials.Password = fromEmailPassword;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = credentials;

            smtp.Send(messaage);

            return Ok("Email Send Successfully");

          
        }

       
    }
}

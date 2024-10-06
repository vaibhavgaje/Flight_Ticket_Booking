using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Mail;
using BackendOfMajorProject.DTO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendOfMajorProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OtpEmailLoginSMTPController : ControllerBase
    {
        static string OTP = CreateRandomPassword();
        
        /// <summary>
        /// Creats Random Password
        /// </summary>
        /// <param name="length"></param>
        /// <returns></returns>
       private static String CreateRandomPassword(int length = 6)
       {
           // Create a string of characters, numbers, special characters that allowed in the password  
           string validChars = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?_-";
           Random random = new Random();

           // Select one random character at a time from the string  
           // and create an array of chars  
           char[] chars = new char[length];
           for (int i = 0; i < length; i++)
           {
               chars[i] = validChars[random.Next(0, validChars.Length)];
           }
           return new string(chars);
       } 
     
       static string MailBody = "<html>" +
                                       "<body >" +
                                               "<center>" +
                                                 " <h1> WelCome to FlyEarly</h1>" +
                                               "</center>" +
                                                "<h1>OTP:"+OTP+"</h1>"+
                                        "</body>"
                                + "</html>";



        string subject = "Welcome to FlyEarly";
        string mailTitle = "Email from .Net Core App";
        string fromEmail = "Trng2@evolvingsols.com";
        string fromEmailPassword = "Cybage@#123";


        /// <summary>
        /// SMTP implementation code
        /// Post function takes Email and userid and sends email on the entered email
        /// </summary>
        /// <param name="toEmail"></param>
        /// <returns></returns>

        // POST api/<TicketGenerationSMTPController>
        [HttpPost]
        public IActionResult Post([FromBody] EmailDTO toEmail)
        {
            //Email & Content
            MailMessage messaage = new MailMessage(new MailAddress(fromEmail, mailTitle), new MailAddress(toEmail.emailDTO));
            messaage.Subject = subject;
            messaage.Body = MailBody;
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

            return Ok(OTP);


        }


    }
}

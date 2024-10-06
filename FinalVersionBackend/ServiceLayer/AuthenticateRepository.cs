using BackendOfMajorProject.DTO;
using BackendOfMajorProject.Models;
using BackendOfMajorProject.RepositoryLayer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BackendOfMajorProject.ServiceLayer
{
    public class AuthenticateRepository : IAuthenticateRepository
    {
        private readonly DatabaseContext ctx;
        private readonly AppSettings _appSettings;
        public AuthenticateRepository(IOptions<AppSettings> appSettings,DatabaseContext ctx)
        {
            this.ctx = ctx;
            _appSettings = appSettings.Value;
        }

        public SystemUserDetail Authenticate(UserCredentialDTO dto)
        {
            SystemUserDetail user = ctx.SystemUserDetails.FirstOrDefault(x => 
            x.Email == dto.Email && x.Password == dto.Password);

            if (user == null)
            {
                return null;
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Key);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new System.Security.Claims.ClaimsIdentity(new Claim[]{
                    new Claim(ClaimTypes.Name,user.SystemUserDetailId.ToString()),
                    new Claim(ClaimTypes.Role,"Admin"),
                    new Claim(ClaimTypes.Version,"V3.1")
                }),
                Expires = DateTime.UtcNow.AddDays(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            user.Password = null;

            return user;
        }
    }
}

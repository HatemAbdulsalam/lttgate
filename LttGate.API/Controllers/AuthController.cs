using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using LttGate.API.Data;
using LttGate.API.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace LttGate.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]


    public class AuthController : ControllerBase
    {

        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository Repo, IConfiguration config)
        {
            _repo = Repo;
            _config = config;
        }
            [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> login(UserForLoginDto userForLoginDto)
        {
             var UserFromRepo = await _repo.Login(userForLoginDto.UserName.Trim(), userForLoginDto.Password.Trim());
            if (UserFromRepo == null)
                return Unauthorized();
            var claims = new[]{
                new Claim(ClaimTypes.NameIdentifier,UserFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name,UserFromRepo.UserName)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);
            var tokenDescripror = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(30),
                SigningCredentials = creds
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescripror);
            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });
        }



        [AllowAnonymous]
        [HttpPost("checkpass")]
        public ActionResult checkpass(UserForLoginDto userForLoginDto)
        {
            var chekpassinldap = _repo.Testuserpassinldap(userForLoginDto.UserName, userForLoginDto.Password);
            if (chekpassinldap)
                return Ok();
            return NotFound();    
    }
    }
}
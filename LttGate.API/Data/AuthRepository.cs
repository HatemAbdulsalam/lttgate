using System;
using System.DirectoryServices;
using System.DirectoryServices.AccountManagement;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using LttGate.API.Models;
using Microsoft.EntityFrameworkCore;

namespace LttGate.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            _context = context;
        }

         public async Task<Aemployee> Login(string Username, string Password)
        {
            var user = await _context.Aemployee.FirstOrDefaultAsync(x => x.UserName == Username);
            if (user == null)
                return null;
            if (VertyPasswordInDomain(Password, Username))
                return user;
                return null;
        }

    

        private  Boolean VertyPasswordInDomain(string password, string username)
        {
         
            using (var c = new HttpClient())
            {
                DTO.UserForLoginDto usertst = new DTO.UserForLoginDto();
                usertst.UserName = username;
                usertst.Password = password;
                c.BaseAddress = new Uri("http://172.19.19.154:2019/api/Auth/checkpass");
                c.DefaultRequestHeaders.Accept.Clear();
                c.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = c.PostAsJsonAsync("", usertst).Result;
                if (response.IsSuccessStatusCode)
                {
                    return true ;
                }
                return false;

            }

        }


        public    Boolean  Testuserpassinldap(string Username, string Password)
        {
           PrincipalContext adContext =    new PrincipalContext(ContextType.Domain , "network.ltt.ly" , "DC=network,DC=ltt,DC=ly");

                 using (  adContext)
            {
                   if(  adContext.ValidateCredentials(Username, Password))
                  {
                      return true;
                  }
                  else{

                    return false;

                  }
                

            }        }
        
    }



}

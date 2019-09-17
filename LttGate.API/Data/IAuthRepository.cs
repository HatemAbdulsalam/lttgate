using System.Threading.Tasks;
using LttGate.API.Models;

namespace LttGate.API.Data
{
    public interface IAuthRepository
    {
         Task<Aemployee> Login(string Username , string Password);
        bool Testuserpassinldap(string Username , string Password);


    }
}
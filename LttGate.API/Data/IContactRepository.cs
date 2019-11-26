using System.Collections.Generic;
using System.Threading.Tasks;
using LttGate.API.Helper;
using LttGate.API.Models;


namespace LttGate.API.Data
{
    public interface IContactRepository
    {
      Task<PagedList<Contact>> GetDataAsync( contactParams contactParams);
    }
}
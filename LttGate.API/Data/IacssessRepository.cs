using System.Collections.Generic;
using System.Threading.Tasks;
using LttGate.API.Helper;
using LttGate.API.Models;

namespace LttGate.API.Data
{
    public interface IacssessRepository
      {
      Task<PagedList<AccessLog>> GetDataAsync( acssessParams acssessParams);

 
      Task<EmployeeViewModel> GetDataByIdAsync(int id);

    }
}
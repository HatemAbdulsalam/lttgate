using System.Collections.Generic;
using System.Threading.Tasks;
  using LttGate.API.Models;

namespace LttGate.API.Data
{
    public interface IacssessRepository
      {
      Task<AccessLog> GetDataAsync ( );

      Task<IEnumerable<EmployeeViewModel>> GetDataByIdAsync(int id);

    }
}
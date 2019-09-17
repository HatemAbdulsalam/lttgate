using System.Collections.Generic;
using System.Threading.Tasks;
using LttGate.API.Models;
 
namespace LttGate.API.Data
{
    public interface IvacationRepository
    {
              Task<IEnumerable<Furlough>> GetDataByIdAsync(int id);

    }
}
using System.Collections.Generic;
using System.Threading.Tasks;
using LttGate.API.Models;
 
namespace LttGate.API.Data
{
    public interface IvacationRepository
    {
         Task<Furlough> GetDataByIdAsync(int id);

    }
}
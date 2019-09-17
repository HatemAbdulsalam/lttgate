using System.Collections.Generic;
using System.Threading.Tasks;
using LttGate.API.Models;

namespace LttGate.API.Data
{
    public interface IlogDataVacationRepository
    {
         Task<IEnumerable<LogDate>> GetLogDateByIdAsync(int id);

                  Task<IEnumerable<LogDate>> GetLogDateEFByIdAsync(int id);

    }

    
}
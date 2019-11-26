using System.Collections.Generic;
using System.Threading.Tasks;
using LttGate.API.Helper;
using LttGate.API.Models;

namespace LttGate.API.Data
{
    public interface IlogDataVacationRepository
    {
            

        Task<PagedList<LogDate>> GetLogDateByIdAsync( logdataParams logdataParams);
        Task<PagedList<LogDate>> GetLogDateEFByIdAsync( logdataParams logdataParams);


    }

    
}
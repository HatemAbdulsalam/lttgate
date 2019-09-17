using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LttGate.API.Models;
using Microsoft.EntityFrameworkCore;

namespace LttGate.API.Data
{
    public class vacationRepository : IvacationRepository
    {
        private readonly DataContext _context;
        public vacationRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Furlough>> GetDataByIdAsync(int id)
        {
             var vacationData = await _context.Furlough.Where(x => x.Eid == getEidUserByid(id)).ToListAsync() ;

                   return vacationData;
        }

          public string getEidUserByid(int id)
        {
            var Eid = _context.Aemployee.Where(x => x.Id == id).Select(x => x.Eid).FirstOrDefault();
            return Eid;
        }

       
    }
}
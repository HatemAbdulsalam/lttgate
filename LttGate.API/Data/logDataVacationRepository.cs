using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LttGate.API.Models;
using Microsoft.EntityFrameworkCore;

namespace LttGate.API.Data
{
    public class logDataVacationRepository : IlogDataVacationRepository
    {
        private readonly DataContext _context;
        public logDataVacationRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<IEnumerable<LogDate>> GetLogDateByIdAsync(int id)
        {
            var ToDey = DateTime.Now.ToString("yyyy");
            var vacationData = await _context.LogDate.Where(x => x.Eeid == getEidUserByid(id) && x.DateInter.Value.Year.ToString() == ToDey && x.Amount != null).ToListAsync();
            return vacationData;
        }
        public string getEidUserByid(int id)
        {
            var Eid = _context.Aemployee.Where(x => x.Id == id).Select(x => x.Eid).FirstOrDefault();
            return Eid;
        }

        public async Task<IEnumerable<LogDate>> GetLogDateEFByIdAsync(int id)
        {
              var ToDey = DateTime.Now.ToString("yyyy");
            var vacationData = await _context.LogDate.Where(x => x.Eeid == getEidUserByid(id) && x.DateInter.Value.Year.ToString() == ToDey && x.AmountEf != null).ToListAsync();
            return vacationData;
          }
    }
}
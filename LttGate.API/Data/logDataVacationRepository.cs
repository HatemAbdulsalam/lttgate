using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LttGate.API.Helper;
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


        public async Task<PagedList<LogDate>> GetLogDateByIdAsync(logdataParams logdataParams)
        {
            var vacationData = _context.LogDate.OrderByDescending(x=>x.Id).Where(x => x.Eeid == getEidUserByid(logdataParams.id) && x.Amount != null).AsQueryable();
            return await PagedList<LogDate>.CreateAsync(vacationData, logdataParams.PageNumber, logdataParams.PageSize);
        }

        public async Task<PagedList<LogDate>> GetLogDateEFByIdAsync(logdataParams logdataParams)
        {
            var vacationData = _context.LogDate.OrderByDescending(x=>x.Id).Where
            (x => x.Eeid == getEidUserByid(logdataParams.id) && x.AmountEf != null).AsQueryable();
            return await PagedList<LogDate>.CreateAsync(vacationData, logdataParams.PageNumber, logdataParams.PageSize);
        }

        public string getEidUserByid(int id)
        {
            var Eid = _context.Aemployee.Where(x => x.Id == id).Select(x => x.Eid).FirstOrDefault();
            return Eid;
        }
    }
}
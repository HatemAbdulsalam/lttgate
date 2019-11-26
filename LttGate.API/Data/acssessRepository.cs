using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LttGate.API.Helper;
using LttGate.API.Models;
using Microsoft.EntityFrameworkCore;

namespace LttGate.API.Data
{
    public class acssessRepository : IacssessRepository
    {
        private readonly DataContext _context;
        public acssessRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<PagedList<AccessLog>> GetDataAsync(acssessParams acssessParams)
        {
            var AcssessData = _context.AccessLog.OrderByDescending(x => x.LogDate).AsQueryable(); ;
            AcssessData = AcssessData.Where(x => x.EmployeeId == getEniUserByid(acssessParams.id));
            return await PagedList<AccessLog>.CreateAsync(AcssessData, acssessParams.PageNumber, acssessParams.PageSize);
        }
        public async Task<EmployeeViewModel> GetDataByIdAsync(int id)
        {
            var ToDey = DateTime.Now.ToString("MM/dd/yyyy");
            TimeSpan? outemp = new TimeSpan();
            TimeSpan? inemp = new TimeSpan();
            EmployeeViewModel _emp;
            inemp = await _context.AccessLog.Where(x => x.InOut == "IN" && x.LogDate.ToString("MM/dd/yyyy") == ToDey
           && x.EmployeeId == getEniUserByid(id)).Select(x => x.LogTime).FirstOrDefaultAsync();
            if (inemp == new TimeSpan(0, 0, 0))
            {
                  _emp = await _context.Aemployee.Join(_context.AccessLog, e => e.Eni, s => s.EmployeeId,
                               (e, s) => new EmployeeViewModel
                               {
                                   Ename = e.Ename,
                                   Mg = e.Mg,
                                   eid = e.Eid,
                                   UserName = e.UserName,
                                   eni = e.Eni,
                                   LogDate = null,
                                   SupposedTimeOut = null,
                                   LogTime = null,
                                   TimeOut = null,
                                   InOut = s.InOut
                               }).Where(x => x.eni == getEniUserByid(id)).FirstOrDefaultAsync();
            }
            else
            {
               outemp = await _context.AccessLog.Where(x => x.InOut == "OUT" && x.LogDate.ToString("MM/dd/yyyy") == ToDey
               && x.EmployeeId == getEniUserByid(id)).Select(x => x.LogTime).FirstOrDefaultAsync();
                if (outemp == new TimeSpan(0, 0, 0))
                {
                    outemp = null;
                }
                  _emp = await _context.Aemployee.Join(_context.AccessLog, e => e.Eni, s => s.EmployeeId,
                   (e, s) => new EmployeeViewModel
                   {
                       Ename = e.Ename,
                       Mg = e.Mg,
                       eid = e.Eid,
                       UserName = e.UserName,
                       eni = e.Eni,
                       LogDate = s.LogDate.ToString("MM/dd/yyyy"),
                       SupposedTimeOut = getSupposedTimeOut(s.LogTime),
                       LogTime = s.LogTime,
                       TimeOut = outemp,
                       InOut = s.InOut
                   }).Where(x => x.eni == getEniUserByid(id) && x.LogDate == ToDey && x.InOut == "IN").FirstOrDefaultAsync();
            }

            return _emp;
        }

        public TimeSpan getSupposedTimeOut(TimeSpan LogTime)
        {
            TimeSpan suptime = new TimeSpan(15, 0, 0);
            TimeSpan start = new TimeSpan(09, 0, 0);
            TimeSpan dwam = new TimeSpan(06, 0, 0);
            TimeSpan end = new TimeSpan(10, 0, 0);
            if (LogTime > start && LogTime < end)
            {
                suptime = LogTime.Add(dwam);
            }

            if (LogTime > end)
            {
                suptime = new TimeSpan(16, 0, 0);
            }

            if (LogTime < start)
            {
                suptime = new TimeSpan(15, 0, 0);
            }


            return suptime;
        }

        public string getEniUserByid(int id)
        {
            var Eni = _context.Aemployee.Where(x => x.Id == id).Select(x => x.Eni).FirstOrDefault();
            return Eni;
        }


    }
}
using System;
using System.Linq;
using System.Threading.Tasks;
using LttGate.API.Helper;
using LttGate.API.Models;

namespace LttGate.API.Data
{
    public class CardRepository : ICardRepository
    {
         private readonly DataContext _context;
         private readonly DataContextt _contextt;
        public CardRepository(DataContext context , DataContextt contextt )
        {
            _contextt = contextt;
            _context = context;
        }
  
        public async Task<PagedList<TEvtEvent>> GetDataAsync(cardParams cardParams)
        {
             var AcssessData = _contextt.T_Evt_Event.Where(x => x.CardNo == getcardByid(cardParams.id)).OrderByDescending(x => x.EventTime).AsQueryable(); ;
             return await PagedList<TEvtEvent>.CreateAsync(AcssessData, cardParams.PageNumber, cardParams.PageSize);        }

        private string getcardByid(int id)
        {
           var Ecd = _context.Idetecktb.Where(x => x.Eid == getEniUserByid(id)).Select(x => x.Psccardno).FirstOrDefault();
             return Ecd.Substring(Ecd.Length - 8, 8);
         }

          public string getEniUserByid(int id)
        {
            var eid = _context.Aemployee.Where(x => x.Id == id).Select(x => x.Eid).FirstOrDefault();
            return eid;
        }
    }
}
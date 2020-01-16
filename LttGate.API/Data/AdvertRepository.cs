using System;
using System.Linq;
 using System.Threading.Tasks;
using LttGate.API.Helper;
using LttGate.API.Models;

namespace LttGate.API.Data
{
    public class AdvertRepository : IAdvertRepository
    {
         private readonly DataContext _context;
        public AdvertRepository(DataContext context)
        {
            _context = context;

        }
 
        public async Task<PagedList<Advert>> GetDataAsync(advertParams advertParams)
        {
             var advertData = _context.Advert.OrderByDescending(x=>x.Date).AsQueryable()  ;
              return await PagedList<Advert>.CreateAsync(advertData,advertParams.PageNumber,advertParams.PageSize)  ;

         }
    }
}
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LttGate.API.Helper;
using LttGate.API.Models;
using Microsoft.EntityFrameworkCore;

namespace LttGate.API.Data
{
    public class ContactRepository : IContactRepository
    {
        private readonly DataContext _context;
        public ContactRepository(DataContext context)
        {
            _context = context;

        }
 

        public async Task<PagedList<Contact>> GetDataAsync( contactParams contactParams)
        {
            var contactData =   _context.Contact.Where(x=>x.Moblie != null).OrderBy(x=>x.emp_N).AsQueryable(); ;
            if(contactParams.searchTerm != "")
            {
              contactData = contactData.Where(x=> x.emp_N.Contains( contactParams.searchTerm));
            }
            return await PagedList<Contact>.CreateAsync(contactData,contactParams.PageNumber,contactParams.PageSize)  ;

        }
    }
}
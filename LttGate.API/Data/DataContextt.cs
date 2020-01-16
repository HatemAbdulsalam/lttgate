using LttGate.API.Models;
using Microsoft.EntityFrameworkCore;

namespace LttGate.API.Data
{
    public class DataContextt: DbContext

    {
                public DataContextt(DbContextOptions<DataContextt> options) : base(options) { }

                        public DbSet<TEvtEvent> T_Evt_Event { get; set; }


    }
}
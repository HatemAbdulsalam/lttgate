using LttGate.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace LttGate.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
   
        public DbSet<AccessLog> AccessLog { get; set; }
        public DbSet<Aemployee> Aemployee { get; set; }
        public DbSet<Furlough> Furlough { get; set; }
        public DbSet<LogDate> LogDate { get; set; }
        public DbSet<Contact> Contact { get; set; }
         public DbSet<Advert> Advert { get; set; }

    }
}
using System.Threading.Tasks;
using LttGate.API.Helper;
using LttGate.API.Models;

namespace LttGate.API.Data
{
    public interface IAdvertRepository
    {
               Task<PagedList<Advert>> GetDataAsync( advertParams advertParams);

    }
}
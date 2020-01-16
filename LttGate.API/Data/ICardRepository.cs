using System.Threading.Tasks;
using LttGate.API.Helper;
using LttGate.API.Models;

namespace LttGate.API.Data
{
    public interface ICardRepository
    {
             Task<PagedList<TEvtEvent>> GetDataAsync( cardParams cardParams);
  
    }
}
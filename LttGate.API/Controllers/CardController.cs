using System.Threading.Tasks;
using LttGate.API.Data;
using LttGate.API.Helper;
using Microsoft.AspNetCore.Mvc;
namespace LttGate.API.Controllers
{  [Route("api/[controller]")]
    [ApiController]
    public class CardController : ControllerBase
     {
         private readonly ICardRepository _repo;

        public CardController(ICardRepository Repo)
        {
            _repo = Repo;
        }


        [HttpGet]
        public async Task<IActionResult> getdata([FromQuery]cardParams cardParams)
        {
            var acssessdata = await _repo.GetDataAsync(cardParams);
              Response.AddPagination(acssessdata.CurrentPage, acssessdata.PageSize, acssessdata.TotalCount, acssessdata.TotalPages);

            return Ok(acssessdata);

        }
    }
}
using System.Threading.Tasks;
using LttGate.API.Data;
using LttGate.API.Helper;
using Microsoft.AspNetCore.Mvc;

namespace LttGate.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AdvertController : ControllerBase
    {
        private readonly IAdvertRepository _repo;

        public AdvertController(IAdvertRepository Repo)
        {
            _repo = Repo;
        }


        [HttpGet]
        public async Task<IActionResult> getdata([FromQuery]advertParams advertParams)
        {
           var advertData = await _repo.GetDataAsync(advertParams);
              Response.AddPagination(advertData.CurrentPage, advertData.PageSize, advertData.TotalCount, advertData.TotalPages);
            return Ok(advertData);

        }
    }
}
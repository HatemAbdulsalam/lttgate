using System.Threading.Tasks;
using LttGate.API.Data;
using LttGate.API.Helper;
using Microsoft.AspNetCore.Mvc;

namespace LttGate.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IacssessRepository _repo;

        public HomeController(IacssessRepository Repo)
        {
            _repo = Repo;
        }

        [HttpGet]
 
        public async Task<IActionResult> getdata([FromQuery]acssessParams acssessParams)
        {
            var acssessdata = await _repo.GetDataAsync(acssessParams);
              Response.AddPagination(acssessdata.CurrentPage, acssessdata.PageSize, acssessdata.TotalCount, acssessdata.TotalPages);

            return Ok(acssessdata);

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> getdataByID(int id)
        {
            var acssessdata = await _repo.GetDataByIdAsync(id);
            return Ok(acssessdata);

        }


    }
}
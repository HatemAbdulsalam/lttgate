using System.Threading.Tasks;
using LttGate.API.Data;
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
        public async Task<IActionResult> getdata()
        {
            var acssessdata = await _repo.GetDataAsync();
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
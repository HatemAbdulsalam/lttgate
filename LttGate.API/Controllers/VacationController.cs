using System.Threading.Tasks;
using LttGate.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace LttGate.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class VacationController : ControllerBase
    {
          private readonly IvacationRepository _repo;
 
        public VacationController(IvacationRepository Repo   )
        {
                      _repo = Repo;
        }


         [HttpGet("{id}")]
        public async Task<IActionResult> getdataByID(int id)
        {
           var Vacationdata = await _repo.GetDataByIdAsync(id);
            return Ok(Vacationdata);

        }

    }
}
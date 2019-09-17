using System.Threading.Tasks;
using LttGate.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace LttGate.API.Controllers
{ 
    
    [Route("api/[controller]")]
    [ApiController]
    public class logDataVacationController:ControllerBase
    {
                private readonly IlogDataVacationRepository _repo;
 
        public logDataVacationController(IlogDataVacationRepository Repo   )
        {
                      _repo = Repo;
        }

     [HttpGet("{id}")]
        public async Task<IActionResult> getdataByID(int id)
        {
           var Vacationdata = await _repo.GetLogDateByIdAsync(id);
            return Ok(Vacationdata);

        }
         [HttpGet("EF/{id}")]
        public async Task<IActionResult> getefdataByID(int id)
        {
           var Vacationdata = await _repo.GetLogDateEFByIdAsync(id);
            return Ok(Vacationdata);

        }

    }
}
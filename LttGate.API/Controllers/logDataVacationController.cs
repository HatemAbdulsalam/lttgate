using System.Threading.Tasks;
using LttGate.API.Data;
using LttGate.API.Helper;
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

     [HttpGet]
        public async Task<IActionResult> getdataByID([FromQuery]logdataParams logdataParams)
        {
             
 
           var Vacationdata = await _repo.GetLogDateByIdAsync(logdataParams);
           Response.AddPagination(Vacationdata.CurrentPage, Vacationdata.PageSize, Vacationdata.TotalCount, Vacationdata.TotalPages);
            return Ok(Vacationdata);

        }
         [HttpGet("EF")]
        public async Task<IActionResult> getefdataByID([FromQuery]logdataParams logdataParams)
        {
             var Vacationdata = await _repo.GetLogDateEFByIdAsync(logdataParams);
           Response.AddPagination(Vacationdata.CurrentPage, Vacationdata.PageSize, Vacationdata.TotalCount, Vacationdata.TotalPages);
            return Ok(Vacationdata);
        }

    }
}
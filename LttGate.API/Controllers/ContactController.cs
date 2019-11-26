using System.Threading.Tasks;
using LttGate.API.Data;
using LttGate.API.Helper;
using Microsoft.AspNetCore.Mvc;

namespace LttGate.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContactRepository _repo;

        public ContactController(IContactRepository Repo)
        {
            _repo = Repo;
        }


        [HttpGet]
        public async Task<IActionResult> getdata([FromQuery]contactParams contactParams)
        {
           var ContactData = await _repo.GetDataAsync(contactParams);
              Response.AddPagination(ContactData.CurrentPage, ContactData.PageSize, ContactData.TotalCount, ContactData.TotalPages);
            return Ok(ContactData);

        }
    }
}
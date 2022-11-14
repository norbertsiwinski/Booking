using Microsoft.AspNetCore.Mvc;
using BookingApp.Entities;
using System.Linq;
using BookingApp.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using BookingApp.Services;

namespace BookingApp.Controllers
{
    [Route("api/accomodation")]
    public class AccomodationController : ControllerBase
    {
        private readonly IAccomodationService _accomodationService;


        public AccomodationController(IAccomodationService accomodationService)
        {
            _accomodationService = accomodationService;
        }

        public ActionResult<IEnumerable<AccomodationDto>> GetAll()
        {
            var accomodationsDtos = _accomodationService.GetAll();

            return Ok(accomodationsDtos);
        }


        [HttpGet("id/{id}")]
        public ActionResult<AccomodationDto> GetById([FromRoute] int id)
        {
            var accomodation = _accomodationService.GetById(id);

            if (accomodation is null)
            {
                return NotFound();
            }
            return accomodation;

        }


        [HttpGet("name/{name}")]
        public ActionResult<AccomodationDto> GetByName([FromRoute] string name)
        {
            var accomodation = _accomodationService.GetByName(name);

            if (accomodation is null)
            {
                return NotFound();
            }
            return accomodation;

        }

        [HttpGet("{id}/reservation")]
        public Object GetReservationsDates(int id)
        {
            var accomodation = _accomodationService.GetReservationsDates(id);

            if (accomodation is null)
            {
                return NotFound("no reservations");
            }
            return accomodation;
        }

        [HttpPost]
        public ActionResult CreateAccomodation([FromBody] CreateAccomodationDto dto) 
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var id = _accomodationService.CreateAccomodation(dto);
            return Created($"/api/accomodation/{id}", null);
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using BookingApp.Entities;
using System.Linq;
using BookingApp.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using BookingApp.Services;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace BookingApp.Controllers
{

    [Route("api/reservation")]
    public class ReservationController : ControllerBase
    {
        private readonly IReservationService _reservationService;

        public ReservationController(IReservationService reservationService)
        {
            _reservationService = reservationService;
        }


        [HttpGet("id/{id}")]
        public ActionResult<IEnumerable<ReservationDto>> GetById([FromRoute] int id)
       
        {
            var reservationDtos = _reservationService.GetById(id);

            return Ok(reservationDtos);
        }

        [HttpPost]
        [Authorize]
        public ActionResult CreateReservation([FromBody] CreateReservationDto dto)
        {
            var userId =int.Parse(User.FindFirst(c => c.Type == "id").Value);
            var id = _reservationService.CreateReservation(dto, userId);
            return Created($"/api/reservation/{id}", null);
        }

    }

}
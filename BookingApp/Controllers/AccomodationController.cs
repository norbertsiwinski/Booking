﻿using Microsoft.AspNetCore.Mvc;
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


        [HttpGet("{id}")]
        public ActionResult<AccomodationDto> Get([FromRoute] int id)
        {
            var accomodation = _accomodationService.GetById(id);

            if (accomodation is null)
            {
                return NotFound();
            }
            return accomodation;

        }
    }
}
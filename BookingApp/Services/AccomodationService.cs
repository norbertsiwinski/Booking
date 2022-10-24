﻿using AutoMapper;
using BookingApp.Models;
using Microsoft.EntityFrameworkCore;

namespace BookingApp.Services
{
    public class AccomodationService : IAccomodationService
    {
        private readonly AccomodationDbContext _dbContext;
        private readonly IMapper _mapper;

        public AccomodationService(AccomodationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public AccomodationDto GetById(int id)
        {

            var accomodation = _dbContext
              .Accomodations
              .Include(r => r.Address)
              .Include(r => r.Reservations)
              .FirstOrDefault(r => r.Id == id);

            if (accomodation is null)
            {
                return null;
            }

            var result = _mapper.Map<AccomodationDto>(accomodation);
            return result;
        }

        public IEnumerable<AccomodationDto> GetAll()
        {
            var accomodations = _dbContext
               .Accomodations
               .Include(r => r.Address)
               .Include(r => r.Reservations)
               .ToList();

            var result = _mapper.Map<List<AccomodationDto>>(accomodations);

            return result;
        }
    }
}

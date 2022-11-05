using AutoMapper;
using BookingApp.Models;
using Microsoft.EntityFrameworkCore;


namespace BookingApp.Services
{
    public class ReservationService : IReservationService
    {
        private readonly AccomodationDbContext _dbContext;
        private readonly IMapper _mapper;



        public ReservationService(AccomodationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public ReservationDto GetById(int id)
        {

            var reservation = _dbContext.Reservations.FirstOrDefault(r => r.Id == id);

            if (reservation is null)
            {
                return null;
            }

            var result = _mapper.Map<ReservationDto>(reservation);
            return result;

        }


    }
}

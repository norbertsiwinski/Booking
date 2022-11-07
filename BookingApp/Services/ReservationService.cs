using AutoMapper;
using BookingApp.Models;
using BookingApp.Services;
using Microsoft.EntityFrameworkCore;


namespace BookingApp.Services
{
    public class ReservationService : IReservationService
    {
        private readonly AccomodationDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IAccomodationService _service;

        public ReservationService(AccomodationDbContext dbContext, IMapper mapper, IAccomodationService service)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _service = service;

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

        public int CreateReservation(CreateReservationDto dto)
        {
            var reservation = _mapper.Map<Reservation>(dto);
            _dbContext.Reservations.Add(reservation);
            _dbContext.SaveChanges();
            return reservation.Id;
        }

    }
}

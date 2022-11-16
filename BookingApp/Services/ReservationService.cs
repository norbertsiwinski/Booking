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

        public int CreateReservation(CreateReservationDto dto, int userId)
        {
            var reservation = _mapper.Map<Reservation>(dto);
            reservation.CreatedById = userId;
            _dbContext.Reservations.Add(reservation);
            _dbContext.SaveChanges();
            return reservation.Id;
        }
        public void DeleteReservation(int id)
        {
            var reservation = _dbContext
                .Reservations
                .FirstOrDefault(r => r.Id == id);

            _dbContext.Reservations.Remove(reservation);
            _dbContext.SaveChanges();
        }

        public IEnumerable<ReservationDto> GetByUserId(int id)
        {

            //var reservation = _dbContext.Reservations.FirstOrDefault(r => r.CreatedById == id);

            var reservation = _dbContext.Reservations.Where(r => r.CreatedById == id).ToList();

            if (reservation is null)
            {
                return null;
            }

            var result = _mapper.Map<List<ReservationDto>>(reservation);
            return result;

        }


    }
}

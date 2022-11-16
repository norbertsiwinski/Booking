using BookingApp.Models;

namespace BookingApp.Services
{
    public interface IReservationService
    {
        ReservationDto GetById(int id);
        int CreateReservation(CreateReservationDto dto, int userId);

        public IEnumerable<ReservationDto> GetByUserId(int id);
        public void DeleteReservation(int id);
    }

}
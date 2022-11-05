using BookingApp.Models;

namespace BookingApp.Services
{
    public interface IReservationService
    {
        ReservationDto GetById(int id);
    }

}
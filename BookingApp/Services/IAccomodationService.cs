using BookingApp.Models;

namespace BookingApp.Services
{
    public interface IAccomodationService
    {
        IEnumerable<AccomodationDto> GetAll();
        AccomodationDto GetById(int id);
    }
}
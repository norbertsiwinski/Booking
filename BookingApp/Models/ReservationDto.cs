namespace BookingApp.Models
{
    public class ReservationDto
    {
        public int Id { get; set; }
        public int AccomodationId { get; set; }
        public int CreatedById { get; set; }
        public virtual User CreatedBy { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}

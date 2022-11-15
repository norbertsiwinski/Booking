namespace BookingApp.Models
{
    public class CreateReservationDto
    {
  
        public int AccomodationId { get; set; }
        public int CreatedById { get; set; }
        public virtual User CreatedBy { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}

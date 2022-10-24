namespace BookingApp.Models
{
    public class AccomodationDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public AccomodationTypes AccomodationType { get; set; }
        public int Place { get; set; }

        public decimal Price { get; set; }
        public string ContantEmail { get; set; }
        public string ContantNumber { get; set; }

        public string City { get; set; }
        public string Street { get; set; }
        public string PostalCode { get; set; }
        public List<ReservationDto> Reservations { get; set; }
    }
}

namespace BookingApp.Entities
{
    public enum AccomodationTypes
    {
        Apartment, Hotel, Guesthouse, Homestay, Chalets
    }

    public class Accomodation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public AccomodationTypes AccomodationType { get; set; }
        public int Place { get; set; }
        
        public decimal Price { get; set; }
        public string ContantEmail { get; set; }
        public string ContantNumber { get; set; }
        public int AddressId { get; set; }
        public  virtual Address Address { get; set; }
        public virtual List<Reservation> Reservations { get; set; } 
    }
}

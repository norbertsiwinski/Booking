using AutoMapper;
using BookingApp.Entities;
using BookingApp.Models;

namespace BookingApp
{
    public class AccomodationMappingProfile : Profile
    {
        public AccomodationMappingProfile() 
        {
            CreateMap<Accomodation, AccomodationDto>()
                .ForMember(m => m.City, c => c.MapFrom(s => s.Address.City))
                .ForMember(m => m.Street, c => c.MapFrom(s => s.Address.Street))
                .ForMember(m => m.PostalCode, c => c.MapFrom(s => s.Address.PostalCode));
            CreateMap<Reservation, ReservationDto>();
            CreateMap<CreateReservationDto, Reservation>();
            CreateMap<CreateAccomodationDto, Accomodation>()
                .ForMember(m => m.Address, c => c.MapFrom(dto => new Address() { City = dto.City, PostalCode = dto.PostalCode, Street = dto.Street }));
        }
    }
}

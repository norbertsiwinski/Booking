using Microsoft.EntityFrameworkCore;

namespace BookingApp.Entities
{
    public class AccomodationDbContext : DbContext
    {
        private String _connectionString =
            "Server=(localdb)\\mssqllocaldb;Database=BookingDb;Trusted_Connection=True;";

        public DbSet<Accomodation> Accomodations { get; set; }
        public DbSet<Address> Address { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Accomodation>()
               .Property(r => r.Name)
               .IsRequired()
               .HasMaxLength(100);

            modelBuilder.Entity<Accomodation>()
                .Property(p => p.Price)
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<User>()
                .Property(r => r.Email)
                .IsRequired();


            modelBuilder.Entity<Role>()
                .Property(r => r.Name)
                .IsRequired();

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }
}

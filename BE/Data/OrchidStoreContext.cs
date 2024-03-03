using Microsoft.EntityFrameworkCore;

namespace BE.Data
{
    public class OrchidStoreContext : DbContext
    {
        public OrchidStoreContext(DbContextOptions<OrchidStoreContext> options) : base(options)
        {
             
        }

        #region DbSet 
        public DbSet<Orchid>? Orchids { get; set; }
        public DbSet<Genus> ? Genera { get; set; }
        public DbSet<User> ? Users { get; set; } 
        #endregion
    }
}

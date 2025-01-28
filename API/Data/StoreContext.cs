
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }
    public required DbSet<Basket> Baskets { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
            .HasData(
                new IdentityRole { Id = "46909480-34a3-441a-8104-549a3d8f2271", Name = "Member", NormalizedName = "MEMBER" },
                new IdentityRole { Id = "afe961eb-d27f-4bbf-92d4-3efb45453ba5", Name = "Admin", NormalizedName = "ADMIN" }
            );
    }
}



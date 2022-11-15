using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookingApp.Migrations
{
    public partial class restaurantuserid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
    

    
            migrationBuilder.CreateIndex(
                name: "IX_Reservations_CreatedById",
                table: "Reservations",
                column: "CreatedById");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_Users_CreatedById",
                table: "Reservations",
                column: "CreatedById",
                principalTable: "Users",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Users_CreatedById",
                table: "Reservations");

            migrationBuilder.DropIndex(
                name: "IX_Reservations_CreatedById",
                table: "Reservations");

            migrationBuilder.DropColumn(
                name: "CreateadById",
                table: "Reservations");

            migrationBuilder.DropColumn(
                name: "CreatedById",
                table: "Reservations");

            migrationBuilder.AddColumn<int>(
                name: "LastName",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}

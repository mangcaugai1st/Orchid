using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BE.Migrations
{
    public partial class add_genus_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "genus1",
                table: "Orchid",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Genus",
                columns: table => new
                {
                    genus = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    image = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Genus", x => x.genus);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Orchid_genus1",
                table: "Orchid",
                column: "genus1");

            migrationBuilder.AddForeignKey(
                name: "FK_Orchid_Genus_genus1",
                table: "Orchid",
                column: "genus1",
                principalTable: "Genus",
                principalColumn: "genus");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orchid_Genus_genus1",
                table: "Orchid");

            migrationBuilder.DropTable(
                name: "Genus");

            migrationBuilder.DropIndex(
                name: "IX_Orchid_genus1",
                table: "Orchid");

            migrationBuilder.DropColumn(
                name: "genus1",
                table: "Orchid");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BE.Migrations
{
    public partial class DbInit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Orchid",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    species = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    genus = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    family = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    discount = table.Column<byte>(type: "tinyint", nullable: false),
                    quantity = table.Column<int>(type: "int", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    image0 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    image1 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    image2 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    image3 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    image4 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    image5 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orchid", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orchid");
        }
    }
}

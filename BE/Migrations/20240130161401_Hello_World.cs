using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BE.Migrations
{
    public partial class Hello_World : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Genus",
                columns: table => new
                {
                    genus_name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    image = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Genus", x => x.genus_name);
                });

            migrationBuilder.CreateTable(
                name: "Orchid",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    species = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    family_name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    discount = table.Column<byte>(type: "tinyint", nullable: false),
                    quantity = table.Column<int>(type: "int", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    image0 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    image1 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    image2 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    image3 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    image4 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    image5 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    genus_name = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orchid", x => x.id);
                    table.ForeignKey(
                        name: "FK_Orchid_Genus_genus_name",
                        column: x => x.genus_name,
                        principalTable: "Genus",
                        principalColumn: "genus_name");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Orchid_genus_name",
                table: "Orchid",
                column: "genus_name");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orchid");

            migrationBuilder.DropTable(
                name: "Genus");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace BackendOfMajorProject.Migrations
{
    public partial class ftb1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClassDetails",
                columns: table => new
                {
                    ClassDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BusinessClassCapacity = table.Column<int>(type: "int", nullable: false),
                    BusinessClassPrice = table.Column<double>(type: "float", nullable: false),
                    PremiumClassCapacity = table.Column<int>(type: "int", nullable: false),
                    PremiumClassPrice = table.Column<double>(type: "float", nullable: false),
                    PremiumEconomyClassCapacity = table.Column<int>(type: "int", nullable: false),
                    PremiumEconomyClassPrice = table.Column<double>(type: "float", nullable: false),
                    EconomyClassCapacity = table.Column<int>(type: "int", nullable: false),
                    EconomyClassPrice = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassDetails", x => x.ClassDetailId);
                });

            migrationBuilder.CreateTable(
                name: "flightsAnnualReports",
                columns: table => new
                {
                    FlightsAnnualReportId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AirIndia = table.Column<double>(type: "float", nullable: false),
                    SpiceJet = table.Column<double>(type: "float", nullable: false),
                    Kingfisher = table.Column<double>(type: "float", nullable: false),
                    IndiGo = table.Column<double>(type: "float", nullable: false),
                    AirAsia = table.Column<double>(type: "float", nullable: false),
                    AllianceAir = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_flightsAnnualReports", x => x.FlightsAnnualReportId);
                });

            migrationBuilder.CreateTable(
                name: "SystemUserDetails",
                columns: table => new
                {
                    SystemUserDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    Password = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    Mobile = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    Role = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    PassportDetails = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    AadharDetails = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    RegisteredOrNot = table.Column<bool>(type: "bit", nullable: false),
                    Token = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SystemUserDetails", x => x.SystemUserDetailId);
                });

            migrationBuilder.CreateTable(
                name: "FlightDetails",
                columns: table => new
                {
                    FlightDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    FlightNumber = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ClassDetailId = table.Column<int>(type: "int", nullable: false),
                    From = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    To = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    DepartureTime = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    ArrivalTime = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    Distance = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlightDetails", x => x.FlightDetailId);
                    table.ForeignKey(
                        name: "FK_FlightDetails_ClassDetails_ClassDetailId",
                        column: x => x.ClassDetailId,
                        principalTable: "ClassDetails",
                        principalColumn: "ClassDetailId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BankDetails",
                columns: table => new
                {
                    BankDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SystemUserDetailId = table.Column<int>(type: "int", nullable: false),
                    BranchName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    AccountNo = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Ifsc = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BankDetails", x => x.BankDetailId);
                    table.ForeignKey(
                        name: "FK_BankDetails_SystemUserDetails_SystemUserDetailId",
                        column: x => x.SystemUserDetailId,
                        principalTable: "SystemUserDetails",
                        principalColumn: "SystemUserDetailId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PassengersDetails",
                columns: table => new
                {
                    PassengersDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SystemUserDetailId = table.Column<int>(type: "int", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    Mobile = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    PassportNo = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    AadharNo = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassengersDetails", x => x.PassengersDetailId);
                    table.ForeignKey(
                        name: "FK_PassengersDetails_SystemUserDetails_SystemUserDetailId",
                        column: x => x.SystemUserDetailId,
                        principalTable: "SystemUserDetails",
                        principalColumn: "SystemUserDetailId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BookingDetails",
                columns: table => new
                {
                    BookingDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SystemUserDetailId = table.Column<int>(type: "int", nullable: false),
                    FlightDetailId = table.Column<int>(type: "int", nullable: false),
                    Date = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    SelectedClass = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    FareDetails = table.Column<double>(type: "float", nullable: false),
                    SeatNo = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookingDetails", x => x.BookingDetailId);
                    table.ForeignKey(
                        name: "FK_BookingDetails_FlightDetails_FlightDetailId",
                        column: x => x.FlightDetailId,
                        principalTable: "FlightDetails",
                        principalColumn: "FlightDetailId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BookingDetails_SystemUserDetails_SystemUserDetailId",
                        column: x => x.SystemUserDetailId,
                        principalTable: "SystemUserDetails",
                        principalColumn: "SystemUserDetailId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BankDetails_SystemUserDetailId",
                table: "BankDetails",
                column: "SystemUserDetailId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BookingDetails_FlightDetailId",
                table: "BookingDetails",
                column: "FlightDetailId");

            migrationBuilder.CreateIndex(
                name: "IX_BookingDetails_SystemUserDetailId",
                table: "BookingDetails",
                column: "SystemUserDetailId");

            migrationBuilder.CreateIndex(
                name: "IX_FlightDetails_ClassDetailId",
                table: "FlightDetails",
                column: "ClassDetailId");

            migrationBuilder.CreateIndex(
                name: "IX_PassengersDetails_SystemUserDetailId",
                table: "PassengersDetails",
                column: "SystemUserDetailId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BankDetails");

            migrationBuilder.DropTable(
                name: "BookingDetails");

            migrationBuilder.DropTable(
                name: "flightsAnnualReports");

            migrationBuilder.DropTable(
                name: "PassengersDetails");

            migrationBuilder.DropTable(
                name: "FlightDetails");

            migrationBuilder.DropTable(
                name: "SystemUserDetails");

            migrationBuilder.DropTable(
                name: "ClassDetails");
        }
    }
}

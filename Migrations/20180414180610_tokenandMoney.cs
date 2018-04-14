using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace budgetmanagementAngular.Migrations
{
    public partial class tokenandMoney : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "totalIncome",
                table: "budgets",
                type: "money",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<decimal>(
                name: "amount",
                table: "budgetCategories",
                type: "money",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.CreateTable(
                name: "tokens",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClientId = table.Column<string>(nullable: false),
                    Type = table.Column<int>(nullable: false),
                    Value = table.Column<string>(nullable: false),
                    UserId = table.Column<string>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    LastModifiedDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tokens", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tokens_UserId",
                table: "tokens",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tokens");

            migrationBuilder.AlterColumn<decimal>(
                name: "totalIncome",
                table: "budgets",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "money");

            migrationBuilder.AlterColumn<decimal>(
                name: "amount",
                table: "budgetCategories",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "money");
        }
    }
}

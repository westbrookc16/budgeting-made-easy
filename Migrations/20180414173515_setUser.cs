using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace budgetmanagementAngular.Migrations
{
    public partial class setUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumns: new[] { "Id", "ConcurrencyStamp" },
                keyValues: new object[] { "ab6fd72a-3157-4c8f-bafc-33d795b4f642", "523887e3-e23e-4b39-a381-f53a6bf3c5f5" });

            migrationBuilder.DeleteData(
                table: "budgets",
                keyColumn: "budgetID",
                keyValue: 1);

            migrationBuilder.AddColumn<string>(
                name: "userID",
                table: "budgets",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_budgets_userID",
                table: "budgets",
                column: "userID");

            migrationBuilder.AddForeignKey(
                name: "FK_budgets_AspNetUsers_userID",
                table: "budgets",
                column: "userID",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_budgets_AspNetUsers_userID",
                table: "budgets");

            migrationBuilder.DropIndex(
                name: "IX_budgets_userID",
                table: "budgets");

            migrationBuilder.DropColumn(
                name: "userID",
                table: "budgets");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "CreatedDate", "DisplayName", "Email", "EmailConfirmed", "Flags", "LastModifiedDate", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "Notes", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "Type", "UserName" },
                values: new object[] { "ab6fd72a-3157-4c8f-bafc-33d795b4f642", 0, "523887e3-e23e-4b39-a381-f53a6bf3c5f5", new DateTime(2018, 4, 12, 21, 2, 17, 462, DateTimeKind.Local), "admin", null, false, 0, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), false, null, null, null, null, null, null, false, null, false, 0, "admin" });

            migrationBuilder.InsertData(
                table: "budgets",
                columns: new[] { "budgetID", "creationDate", "month", "totalIncome", "year" },
                values: new object[] { 1, new DateTime(2018, 4, 12, 21, 2, 17, 460, DateTimeKind.Local), 3, 5000m, 2018 });
        }
    }
}

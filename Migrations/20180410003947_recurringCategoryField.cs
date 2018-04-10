using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace budgetmanagementAngular.Migrations
{
    public partial class recurringCategoryField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isRecurring",
                table: "budgetCategories",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isRecurring",
                table: "budgetCategories");
        }
    }
}

﻿using System;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using budgetmanagementAngular.data;

using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace budgetmanagementAngular.Controllers

{
    [Route("api/[controller]")]
    public class BaseApiController : Controller
    {
        #region Constructor
        public BaseApiController(
            budgetContext context,
            
            IConfiguration configuration
            )
        {
            // Instantiate the required classes through DI
            DbContext = context;

            Configuration = configuration;

            // Instantiate a single JsonSerializerSettings object
            // that can be reused multiple times.
            JsonSettings = new JsonSerializerSettings()
            {
                Formatting = Formatting.Indented
            };

        }
        #endregion
        
        #region Shared Properties
        protected budgetContext DbContext { get; private set; }
        protected IConfiguration Configuration { get; private set; }
        protected JsonSerializerSettings JsonSettings
        {
            get; private
set;
        }
        public string userID {
            get {
                return  User.Claims.FirstOrDefault(u => u.Type == ClaimTypes.NameIdentifier).Value;
            }
        }
        #endregion
    }
}
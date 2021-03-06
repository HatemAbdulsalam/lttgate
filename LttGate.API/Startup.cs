﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using LttGate.API.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

using System.Net;

using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;

using Microsoft.IdentityModel.Logging;
using LttGate.API.Helper;

namespace LttGate.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var ConnectionString = Configuration.GetConnectionString("MbkDbConstr");
            services.AddDbContext<DataContext>(options => options.UseSqlServer(ConnectionString, builder =>   builder.UseRowNumberForPaging()));
           var ConnectionString2 = Configuration.GetConnectionString("MbkDbConstr2");
            services.AddDbContext<DataContextt>(options => options.UseSqlServer(ConnectionString2, builder => builder.UseRowNumberForPaging()));

            services.AddMvc();
            services.AddCors();
            services.AddScoped<IacssessRepository, acssessRepository>();
            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddScoped<IvacationRepository, vacationRepository>();
            services.AddScoped<IlogDataVacationRepository, logDataVacationRepository>();
            services.AddScoped<IContactRepository, ContactRepository>();
            services.AddScoped<IAdvertRepository, AdvertRepository>();
            services.AddScoped<ICardRepository, CardRepository>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)

.AddJwtBearer(Options =>
{
    Options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
        ValidateIssuer = false,
        ValidateAudience = false

    };
});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler(BuilderExtensions =>
              {
                  BuilderExtensions.Run(async context =>
                  {
                      context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                      var error = context.Features.Get<IExceptionHandlerFeature>();
                      if (error != null)
                      {
                          context.Response.AddApplicationError(error.Error.Message);

                          await context.Response.WriteAsync(error.Error.Message);
                      }
                  });
              });
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                // app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowCredentials().AllowAnyHeader());
            app.UseAuthentication();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}

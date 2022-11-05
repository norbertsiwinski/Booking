global using BookingApp.Entities;
using BookingApp.Services;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext <AccomodationDbContext>();
builder.Services.AddAutoMapper(typeof(Program).Assembly);
builder.Services.AddScoped<IAccomodationService, AccomodationService>();
builder.Services.AddScoped<IReservationService, ReservationService>();
builder.Services.AddCors();




var app = builder.Build();
app.UseCors(builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());


app.MapGet("/", () => "Hello World!");
// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

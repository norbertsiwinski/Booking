using BookingApp.Exeptions;

namespace BookingApp.Middleware
{
    public class ErrorHandlingMiddleware : IMiddleware
    {
        private readonly ILogger<ErrorHandlingMiddleware> _logger;

        public ErrorHandlingMiddleware(ILogger<ErrorHandlingMiddleware> logger)
        {

            _logger = logger;
        }
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try 
            {
                await next.Invoke(context);

            }
            catch (BadRequestExeption bad)
            {
                context.Response.StatusCode = 404;
                await context.Response.WriteAsync(bad.Message);
            }
            catch (Exception) 
            {  
                context.Response.StatusCode = 500;
                await context.Response.WriteAsync("Something went wrong");
            }
        }
    }
}

using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace VuePractice
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder
#if Release
                    .UseUrls("http://*:7022")
#endif
                    .UseStartup<Startup>();
                });
    }
}

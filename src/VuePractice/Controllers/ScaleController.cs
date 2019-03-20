using Microsoft.AspNetCore.Mvc;

namespace VuePractice.Controllers
{
    public class ScaleController : Controller
    {
        [Route("/Scale")]
        [Route("/Scale/Route")]
        public IActionResult Route() => View();
    }
}

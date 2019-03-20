using Microsoft.AspNetCore.Mvc;

namespace VuePractice.Controllers
{
    public class ToolController : Controller
    {
        public IActionResult Index() => View();
    }
}

using Microsoft.AspNetCore.Mvc;

namespace VuePractice.Areas.VueRouter.Controllers
{
    [Area("VueRouter")]
    public class AdvancedController : Controller
    {
        public IActionResult Index() => View();
    }
}

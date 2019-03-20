using Microsoft.AspNetCore.Mvc;

namespace VuePractice.Areas.VueRouter.Controllers
{
    [Area("VueRouter")]
    public class EssentialsController : Controller
    {
        public IActionResult Index() => View();
    }
}

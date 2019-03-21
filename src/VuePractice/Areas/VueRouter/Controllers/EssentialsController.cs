using Microsoft.AspNetCore.Mvc;

namespace VuePractice.Areas.VueRouter.Controllers
{
    [Area("VueRouter")]
    public class EssentialsController : Controller
    {
        [Route("/VueRouter")]
        [Route("/Essentials")]
        public IActionResult Index() => View();

        [Route("/Essentials/NestedRoutes")]
        public IActionResult NestedRoutes() => View();

        [Route("/Essentials/NamedViews")]
        public IActionResult NamedViews()=>View();
    }
}

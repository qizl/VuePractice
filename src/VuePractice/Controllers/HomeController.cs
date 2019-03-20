using Microsoft.AspNetCore.Mvc;

namespace VuePractice.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View();

        [Route("/Base/Instance")]
        public IActionResult Instance() => View();

        [Route("/Base/Syntax")]
        public IActionResult Syntax() => View();

        [Route("/Base/Computed")]
        public IActionResult Computed() => View();

        [Route("/Base/ClassAndStyle")]
        public IActionResult ClassAndStyle() => View();

        [Route("/Base/Conditional")]
        public IActionResult Conditional() => View();

        [Route("/Base/List")]
        public IActionResult List() => View();

        [Route("/Base/Events")]
        public IActionResult Events() => View();

        [Route("/Base/Forms")]
        public IActionResult Forms() => View();

        [Route("/Base/Components")]
        public IActionResult Components() => View();
    }
}

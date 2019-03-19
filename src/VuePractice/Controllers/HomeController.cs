using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VuePractice.Models;

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
    }
}

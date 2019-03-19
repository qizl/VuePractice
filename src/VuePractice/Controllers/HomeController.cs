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
        public IActionResult Computed()=>View();

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

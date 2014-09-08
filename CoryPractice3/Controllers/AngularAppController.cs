using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CoryPractice3.Controllers
{
    public class AngularAppController : Controller
    {
        //public AngularAppController()
        //{
        //    //Globals.Environment.OpenPageConnection();
        //    //e_automate.RemoteTechWS.InternalUtils.ReAuthenticate(); //update the license
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        Globals.Environment.ClosePageConnection();
        //    }
        //    base.Dispose(disposing);
        //}

        public ActionResult Index()
        {
            return RedirectToAction("Main", "Admin");
        }

        public ActionResult AppRoot()
        {
            return View("index");
        }

        //public PartialViewResult GetTemplate(string template)
        //{
        //    var templateName = template.Replace(".html", "");

        //    // We should really load rights at this point and populate them into the view model,
        //    // but for now we're going to assume that each partial will ask for the rights it cares about
        //    //var model = new TemplateModel { Name = templateName };

        //    return PartialView(templateName);
        //    //return PartialView(templateName, model);
        //}
    }
}
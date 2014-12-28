using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.Web.Mvc;
using JVB.Services;
using JVB.Domains;
using JVB.Interface.Repositories;
using JVB.Interface.Services;
namespace JVB.WebUI.Controllers
{
    public class PropertyController : Controller
    {
        private IPropertyService propertyService;

        public ActionResult Index()
        {
            return View();
        }

        //TODO: have this search search on either groups or an id.

        public ActionResult PropertyList()
        {
            IEnumerable<Property> properties = propertyService.GetContributors();

            return Json(properties, JsonRequestBehavior.AllowGet);
        }

    }
}

using System.Web.Mvc;

namespace CoryPractice3
{
    public class CbTemplateViewEngine : RazorViewEngine
    {
        public CbTemplateViewEngine()
        {
            var viewLocations = new[] {
                "~/angular-app/{0}.cshtml"
            };

            this.PartialViewLocationFormats = viewLocations;
            this.ViewLocationFormats = viewLocations;
        }
    }
}
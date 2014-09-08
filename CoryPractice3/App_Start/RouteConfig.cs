using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace CoryPractice3
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //routes.MapRoute(
            //    name: "AngularAppTemplates",
            //    url: "angular-app/{*template}",
            //    defaults: new { controller = "AngularApp", action = "GetTemplate" }
            //);

            //routes.MapRoute(
            //    name: "AngularAppRoot",
            //    url: "CallDetails",
            //    defaults: new { controller = "AngularApp", action = "AppRoot" }
            //);

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "AngularApp", action = "AppRoot", id = UrlParameter.Optional }
            );
        }
    }
}
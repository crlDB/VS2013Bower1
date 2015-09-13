using System.Web;
using System.Web.Optimization;

namespace VS2013Bower4
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/bowerjs")
                // bower:js
                
                
                
                
                
                
                
                
                
                
                
                .Include("~/Content/bower_components/jquery/dist/jquery.js")
                .Include("~/Content/bower_components/zeroclipboard/dist/ZeroClipboard.js")
                .Include("~/Content/bower_components/moment/moment.js")
                .Include("~/Content/bower_components/pikaday/pikaday.js")
                .Include("~/Content/bower_components/handsontable/dist/handsontable.full.js")
                .Include("~/Content/bower_components/bootstrap/dist/js/bootstrap.js")
                .Include("~/Content/bower_components/respond/dest/respond.src.js")
                .Include("~/Content/bower_components/jquery-validate/dist/jquery.validate.js")
                .Include("~/Content/bower_components/jquery-ui/jquery-ui.js")
                .Include("~/Content/bower_components/jspanel/source/jquery.jspanel.js")
                .Include("~/Content/bower_components/alertifyjs/dist/js/alertify.js")
                .Include("~/Content/bower_components/underscore/underscore.js")
                .Include("~/Content/bower_components/chartjs/Chart.js")
                .Include("~/Content/bower_components/select2/select2.js")
                // endbower
                );

            bundles.Add(new StyleBundle("~/bundles/bowercss")
                // bower:css
                
                
                
                
                
                
                .Include("~/Content/bower_components/pikaday/css/pikaday.css")
                .Include("~/Content/bower_components/handsontable/dist/handsontable.full.css")
                .Include("~/Content/bower_components/bootstrap/dist/css/bootstrap.css")
                .Include("~/Content/bower_components/animate.css/animate.css")
                .Include("~/Content/bower_components/jspanel/source/jquery.jspanel.css")
                .Include("~/Content/bower_components/select2/select2.css")
                // endbower
                );




            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/carl").Include(
                      "~/Scripts/Test1.js"));


            //bundles.Add(new StyleBundle("~/Content/css").Include(
            //          "~/Content/site.css"));
        }
    }
}

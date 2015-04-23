using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(VS2013Bower3.Startup))]
namespace VS2013Bower3
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

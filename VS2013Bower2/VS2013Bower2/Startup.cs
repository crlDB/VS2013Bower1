using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(VS2013Bower2.Startup))]
namespace VS2013Bower2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

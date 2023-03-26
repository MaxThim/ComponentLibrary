using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewEngines;

namespace ComponentLibrary.Views.Shared.Components.Dropdown
{
    public class DropdownViewComponent : ViewComponent
    {
        public DropdownViewComponent()
        {

        }

        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}

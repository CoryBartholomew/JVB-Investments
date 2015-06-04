using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JVB.Domains;

namespace JVB.Interface.Services
{
    public interface IPropertyService
    {
        IEnumerable<Property> GetProperties(int customerID);
    }
}

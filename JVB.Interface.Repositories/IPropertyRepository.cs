using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JVB.Interface.Repositories;
using JVB.Domains;
namespace JVB.Interface.Repositories
{
    public interface IPropertyRepository
    {
        IEnumerable<Property> GetProperties(int customerID);
    }
}

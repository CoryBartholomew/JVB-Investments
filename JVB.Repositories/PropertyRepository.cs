using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JVB.Interface.Repositories;
using JVB.Domains;
namespace JVB.Repositories
{
    public class PropertyRepository : IPropertyRepository
    {
        public IEnumerable<Property> GetContributors()
        {
            List<Property> properties = new List<Property>();
            return properties;
            // TODO: insert code here
        }        
    }
}

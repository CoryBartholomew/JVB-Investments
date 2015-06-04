using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JVB.Interface.Services;
using JVB.Interface.Repositories;
using JVB.Domains;
namespace JVB.Services
{
    public class PropertyService : IPropertyService
    {
        private IPropertyRepository propertyRepository;

        public PropertyService(IPropertyRepository repository)
		{
            propertyRepository = repository;
		}

        public IEnumerable<Property> GetProperties(int customerID)
        {
            return propertyRepository.GetProperties(customerID);
        }
    }
}

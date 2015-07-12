using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JVB.Domains
{
    public class Property
    {
        public virtual int ID { get; set; }
        public virtual string Address { get; set;}
        public virtual string City { get; set; }
        public virtual string State { get; set; }
        public virtual string Name { get; set; }
        public virtual int PurchasedAt { get; set; }

    }
}

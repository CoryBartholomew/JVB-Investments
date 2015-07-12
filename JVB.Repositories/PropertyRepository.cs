using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using JVB.Interface.Repositories;
using JVB.Domains;
namespace JVB.Repositories
{
    public class PropertyRepository: IPropertyRepository
    {
        public string _ConnectionString = string.Empty;
        public string _CompanyID = string.Empty;

        public PropertyRepository()
        {
            _ConnectionString = "Server=(local);DataBase=dbname1;Integrated Security=SSPI";
        }

        public IEnumerable<Property> GetProperties(int customerID)
        {
            var properties = new List<Property>();
            string connect = @"Data Source=localhost\cbart;Integrated Security=SSPI;Initial Catalog=dbname1;Trusted_Connection=Yes;";
            using (SqlConnection conn = new SqlConnection(connect))
            {
                var cmd = new SqlCommand("JVB_GetProperties", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandTimeout = 100;
                conn.Open();
                cmd.ExecuteNonQuery();
                SqlDataReader reader = cmd.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        var property = new Property()
                        {
                            ID = reader.GetInt32(reader.GetOrdinal("property_id")),
                            Name = reader.GetString(reader.GetOrdinal("property_name")).Trim(),
                            Address = reader.GetString(reader.GetOrdinal("_address")).Trim(),
                            City = reader.GetString(reader.GetOrdinal("_city")).Trim(),
                            State = reader.GetString(reader.GetOrdinal("_state")).Trim(),
                            PurchasedAt = reader.GetInt32(reader.GetOrdinal("purchase_price"))
                        };

                        properties.Add(property);
                    }
                }

            }

            return properties;
        }

        public Property GetProperty(int propertyID)
        {
            string connect = @"Data Source=localhost\cbart;Integrated Security=SSPI;Initial Catalog=dbname1;Trusted_Connection=Yes;";
            var property = new Property();
            using (SqlConnection conn = new SqlConnection(connect))
            {
                var cmd = new SqlCommand("JVB_GetProperty", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandTimeout = 100;

                var parameter = new SqlParameter("@PropertyID", SqlDbType.Int);
                parameter.Value = propertyID;
                cmd.Parameters.Add(parameter);
                conn.Open();
                cmd.ExecuteNonQuery();
                SqlDataReader reader = cmd.ExecuteReader();
                if (reader.HasRows)
                {
                    reader.Read();

                    {
                        property.ID = reader.GetInt32(reader.GetOrdinal("property_id"));
                        property.Name = reader.GetString(reader.GetOrdinal("property_name")).Trim();
                        property.Address = reader.GetString(reader.GetOrdinal("_address")).Trim();
                        property.City = reader.GetString(reader.GetOrdinal("_city")).Trim();
                        property.State = reader.GetString(reader.GetOrdinal("_state")).Trim();
                        property.PurchasedAt = reader.GetInt32(reader.GetOrdinal("purchase_price"));
                    };
                }

            }
            return property;
        }
    }
}

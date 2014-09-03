using System;
using System.Web;

using System.IO;
using System.Security.Cryptography;
using System.Text;

using System.Data;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Text.RegularExpressions;
namespace Globals
{
    public partial class Constants
    {
        public static void OpenPageConnection()
        {
            OpenPageConnection(false);
        }

        public static void OpenPageConnection(bool bSystem)
        {
            try
            {
                string sDatabase;

                if (bSystem)
                    sDatabase = dbSystemDatabase;
                else
                    sDatabase = dbDatabase;

                if (DG.DB.Connection.IsOpen())
                    DG.DB.Connection.ChangeDatabase(sDatabase);
                else
                    DG.DB.Connection.OpenConnection(dbServer, sDatabase, dbUserID, dbPassword, AppName);
            }
            catch (Exception exp)
            {
                throw new ApplicationException("Unable to open database connection.  " + exp.Message);
            }
        }

    }
}

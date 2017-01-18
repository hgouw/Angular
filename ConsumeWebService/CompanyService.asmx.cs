using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Script.Serialization;

namespace ConsumeWebService
{
    /// <summary>
    /// Summary description for CompanyService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class CompanyService : System.Web.Services.WebService
    {
        [WebMethod]
        public void GetAllCompanies()
        {
            List<Company> companies = new List<Company>();
            var cs = ConfigurationManager.ConnectionStrings["ASX"].ConnectionString;
            using (var connection = new SqlConnection(cs))
            {
                var command = new SqlCommand("select top 10 * from Companies", connection);
                connection.Open();
                var reader = command.ExecuteReader();
                while (reader.Read())
                {
                    var company = new Company
                    {
                        Code = reader["Code"].ToString(),
                        Name = reader["Name"].ToString(),
                        Group = reader["Group"].ToString()
                    };
                    companies.Add(company);
                }
            }
            var js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(companies));
        }
    }
}

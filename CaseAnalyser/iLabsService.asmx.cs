using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace CaseAnalyser
{
    /// <summary>
    /// Summary description for iLabsService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class iLabsService : System.Web.Services.WebService
    {
        [WebMethod]
        public void Search()
        {
            var objects = new iLabsObjects();
            objects.iLabsJudgementDates = new List<iLabsJudgementDate>
            {
                new iLabsJudgementDate { Value = "2016", Count = 1 }
            };
            objects.iLabsPracticeAreas = new List<iLabsPracticeArea>
            {
                new iLabsPracticeArea { Value = "Taxation and revenue", Count = 952 }
            };
            objects.iLabsPracticeSubAreas = new List<iLabsPracticeSubArea>
            {
                new iLabsPracticeSubArea { Value = "Income tax", Count = 323 }
            };
            objects.iLabsJudgeNames = new List<iLabsJudgeName>
            {
                new iLabsJudgeName { Value = "McTiernan", Count = 1711 }
            };
            objects.iLabsRepresentatives = new List<iLabsRepresentative>
            {
                new iLabsRepresentative { Value = "H E Renfree", Count = 328 }
            };
            objects.iLabsApplicationTypes = new List<iLabsApplicationType>
            {
                new iLabsApplicationType { Value = "appeal", Count = 4927 },
                new iLabsApplicationType { Value = "original jurisdiction", Count = 2606 }
            };
            objects.iLabsOutcomeTypes = new List<iLabsOutcomeType>
            {
                new iLabsOutcomeType { Value = "other", Count = 2567 },
                new iLabsOutcomeType { Value = "appeal dismissed", Count = 2538 },
                new iLabsOutcomeType { Value = "appeal allowed", Count = 2394 },
                new iLabsOutcomeType { Value = "appeal allowed in part", Count = 34 }
            };
            objects.iLabsOutcomeSubTypes = new List<iLabsOutcomeSubType>
            {
                new iLabsOutcomeSubType { Value = "appeal dismissed with costs", Count = 1755 },
                new iLabsOutcomeSubType { Value = "appeal allowed with costs", Count = 1755 }
            };
            objects.iLabsCourtsAppealedFrom = new List<iLabsCourtAppealedFrom>
            {
                new iLabsCourtAppealedFrom { Value = "NSWSC", Count = 641 }
            };
            objects.iLabsJudgesAppealedFrom = new List<iLabsJudgeAppealedFrom>
            {
                new iLabsJudgeAppealedFrom { Value = "Street", Count = 180 }
            };
            objects.iLabsWordsPhrases = new List<iLabsWordsPhrase>
            {
                new iLabsWordsPhrase { Value = "appeal", Count = 9 }
            };
            objects.iLabsLegislations = new List<iLabsLegislation>
            {
                new iLabsLegislation { Value = "Commonwealth of Australia Constitution Act", Count = 1202 }
            };
            objects.iLabsPartyNames = new List<iLabsPartyName>
            {
                new iLabsPartyName { Value = "R", Count = 933 }
            };

            var js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(objects));
        }
    }
}
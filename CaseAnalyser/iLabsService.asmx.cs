using System.Collections.Generic;
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
                new iLabsJudgementDate { Value = "2016", Count = 1 },
                new iLabsJudgementDate { Value = "2015", Count = 52 },
                new iLabsJudgementDate { Value = "2014", Count = 50 },
                new iLabsJudgementDate { Value = "2013", Count = 60 },
                new iLabsJudgementDate { Value = "2012", Count = 62 },
                new iLabsJudgementDate { Value = "2011", Count = 54 },
                new iLabsJudgementDate { Value = "2010", Count = 49 },
                new iLabsJudgementDate { Value = "2009", Count = 53 },
                new iLabsJudgementDate { Value = "2008", Count = 59 },
                new iLabsJudgementDate { Value = "2007", Count = 60 },
                new iLabsJudgementDate { Value = "2006", Count = 63 },
                new iLabsJudgementDate { Value = "2005", Count = 81 },
                new iLabsJudgementDate { Value = "2004", Count = 64 },
                new iLabsJudgementDate { Value = "2003", Count = 74 },
                new iLabsJudgementDate { Value = "2002", Count = 60 },
                new iLabsJudgementDate { Value = "2001", Count = 77 },
                new iLabsJudgementDate { Value = "2000", Count = 67 }
            };
            objects.iLabsPracticeAreas = new List<iLabsPracticeArea>
            {
                new iLabsPracticeArea { Value = "Taxation and revenue", Count = 952 },
                new iLabsPracticeArea { Value = "Criminal law", Count = 620 },
                new iLabsPracticeArea { Value = "Constitutional law", Count = 603 },
                new iLabsPracticeArea { Value = "Practice and procedure", Count = 399 },
                new iLabsPracticeArea { Value = "Industrial law", Count = 282 },
                new iLabsPracticeArea { Value = "Negligence", Count = 272 }
            };
            objects.iLabsPracticeSubAreas = new List<iLabsPracticeSubArea>
            {
                new iLabsPracticeSubArea { Value = "Income tax", Count = 323 },
                new iLabsPracticeSubArea { Value = "Offences", Count = 185 },
                new iLabsPracticeSubArea { Value = "Assessment of income", Count = 168 },
                new iLabsPracticeSubArea { Value = "Courts", Count = 167 },
                new iLabsPracticeSubArea { Value = "Assessment", Count = 164 },
                new iLabsPracticeSubArea { Value = "Compensation", Count = 163 }
            };
            objects.iLabsJudgeNames = new List<iLabsJudgeName>
            {
                new iLabsJudgeName { Value = "McTiernan", Count = 1711 },
                new iLabsJudgeName { Value = "Dixon", Count = 1641 },
                new iLabsJudgeName { Value = "Rich", Count = 1479 },
                new iLabsJudgeName { Value = "Starke", Count = 1236 },
                new iLabsJudgeName { Value = "Isaacs", Count = 1216 },
                new iLabsJudgeName { Value = "Mason", Count = 1179 }
            };
            objects.iLabsRepresentatives = new List<iLabsRepresentative>
            {
                new iLabsRepresentative { Value = "H E Renfree", Count = 328 },
                new iLabsRepresentative { Value = "H F E Whitlam", Count = 233 },
                new iLabsRepresentative { Value = "D F Jackson", Count = 207 },
                new iLabsRepresentative { Value = "B W Walker", Count = 154 },
                new iLabsRepresentative { Value = "D M J Bennett", Count = 143 },
                new iLabsRepresentative { Value = "Gordon H Castle", Count = 126 },
                new iLabsRepresentative { Value = "W H Sharwood", Count = 116 },
                new iLabsRepresentative { Value = "D D Bell", Count = 107 }
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
                new iLabsCourtAppealedFrom { Value = "NSWSC", Count = 641 },
                new iLabsCourtAppealedFrom { Value = "NSWCA", Count = 402 },
                new iLabsCourtAppealedFrom { Value = "FCA", Count = 382 },
                new iLabsCourtAppealedFrom { Value = "VSC", Count = 320 },
                new iLabsCourtAppealedFrom { Value = "SASC", Count = 178 },
                new iLabsCourtAppealedFrom { Value = "HCA", Count = 170 },
                new iLabsCourtAppealedFrom { Value = "QSC", Count = 165 },
                new iLabsCourtAppealedFrom { Value = "UKPC", Count = 109 },
                new iLabsCourtAppealedFrom { Value = "NSWCCA", Count = 108 }
            };
            objects.iLabsJudgesAppealedFrom = new List<iLabsJudgeAppealedFrom>
            {
                new iLabsJudgeAppealedFrom { Value = "Street", Count = 180 }
            };
            objects.iLabsWordsPhrases = new List<iLabsWordsPhrase>
            {
                new iLabsWordsPhrase { Value = "appeal", Count = 9 },
                new iLabsWordsPhrase { Value = "institutional integrity", Count = 7 },
                new iLabsWordsPhrase { Value = "matter", Count = 7 },
                new iLabsWordsPhrase { Value = "substantial miscarriage of justice", Count = 7 },
                new iLabsWordsPhrase { Value = "procedural fairness", Count = 6 },
                new iLabsWordsPhrase { Value = "judicial power", Count = 5 },
                new iLabsWordsPhrase { Value = "jurisdiction", Count = 5 },
                new iLabsWordsPhrase { Value = "jurisdictional error", Count = 5 },
                new iLabsWordsPhrase { Value = "just terms", Count = 5 },
                new iLabsWordsPhrase { Value = "property", Count = 5 }
            };
            objects.iLabsLegislations = new List<iLabsLegislation>
            {
                new iLabsLegislation { Value = "Commonwealth of Australia Constitution Act", Count = 1202 },
                new iLabsLegislation { Value = "Judiciary Act 1903 (Cth)", Count = 527 },
                new iLabsLegislation { Value = "Income Tax Assessment Act 1936 (Cth)", Count = 313 },
                new iLabsLegislation { Value = "Conciliation and Arbitration Act 1904 (Cth)", Count = 290 },
                new iLabsLegislation { Value = "Acts Interpretation Act 1901 (Cth)", Count = 162 },
                new iLabsLegislation { Value = "Migration Act 1958 (Cth)", Count = 146 }
            };
            objects.iLabsPartyNames = new List<iLabsPartyName>
            {
                new iLabsPartyName { Value = "R", Count = 933 },
                new iLabsPartyName { Value = "Federal Commissioner of Taxation", Count = 524 },
                new iLabsPartyName { Value = "Commonwealth", Count = 289 },
                new iLabsPartyName { Value = "Smith", Count = 63 },
                new iLabsPartyName { Value = "Commonwealth of Australia", Count = 62 },
                new iLabsPartyName { Value = "Williams", Count = 59 }
            };

            var js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(objects));
        }
    }
}
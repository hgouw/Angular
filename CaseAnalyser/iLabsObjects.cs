using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CaseAnalyser
{
    public class iLabsObjects
    {
        public List<iLabsJudgementDate> iLabsJudgementDates { get; set; }
        public List<iLabsPracticeArea> iLabsPracticeAreas { get; set; }
        public List<iLabsPracticeSubArea> iLabsPracticeSubAreas { get; set; }
        public List<iLabsJudgeName> iLabsJudgeNames { get; set; }
        public List<iLabsRepresentative> iLabsRepresentatives { get; set; }
        public List<iLabsApplicationType> iLabsApplicationTypes { get; set; }
        public List<iLabsOutcomeType> iLabsOutcomeTypes { get; set; }
        public List<iLabsOutcomeSubType> iLabsOutcomeSubTypes { get; set; }
        public List<iLabsCourtAppealedFrom> iLabsCourtsAppealedFrom { get; set; }
        public List<iLabsJudgeAppealedFrom> iLabsJudgesAppealedFrom { get; set; }
        public List<iLabsWordsPhrase> iLabsWordsPhrases { get; set; }
        public List<iLabsLegislation> iLabsLegislations { get; set; }
        public List<iLabsPartyName> iLabsPartyNames { get; set; }
    }

    public class iLabsJudgementDate
    {
        public string Value { get; set; }
        public int Count { get; set; }
    }

    public class iLabsPracticeArea
    {
        public string Value { get; set; }
        public int Count { get; set; }
    }

    public class iLabsPracticeSubArea
    {
        public string Value { get; set; }
        public int Count { get; set; }
    }

    public class iLabsJudgeName
    {
        public string Value { get; set; }
        public int Count { get; set; }
    }

    public class iLabsRepresentative
    {
        public string Value { get; set; }
        public int Count { get; set; }
    }

    public class iLabsApplicationType
    {
        public string Value { get; set; }
        public int Count { get; set; }
    }

    public class iLabsOutcomeType
    {
        public string Value { get; set; }
        public int Count { get; set; }
    }

    public class iLabsOutcomeSubType
    {
        public string Value { get; set; }
        public int Count { get; set; }
    }

    public class iLabsCourtAppealedFrom
    {
        public string Value { get; set; }
        public int Count { get; set; }
    }

    public class iLabsJudgeAppealedFrom
    {
        public string Value { get; set; }
        public int Count { get; set; }
    }

    public class iLabsWordsPhrase
    {
        public string Value { get; set; }
        public int Count { get; set; }
    }

    public class iLabsLegislation
    {
        public string Value { get; set; }
        public int Count { get; set; }
    }

    public class iLabsPartyName
    {
        public string Value { get; set; }
        public int Count { get; set; }
    }
}
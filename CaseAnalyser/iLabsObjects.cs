using System;
using System.Collections.Generic;

namespace CaseAnalyser
{
    public class iLabsObjects
    {
        public List<iLabsDocument> iLabsDocuments { get; set; }
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

    public class iLabsDocument
    {
        public string CaseName { get; set; }
        public DateTime JudgementDate { get; set; }
        public string CasebaseSignal { get; set; }
        public string CourtName { get; set; }
        public int CitationScore { get; set; }
        public string PartyNames { get; set; }
        public string Citations { get; set; }
        public string JudgeNames { get; set; }
        public string ApplicationType { get; set; }
        public string OutcomeType { get; set; }
        public string OutcomeSubType { get; set; }
        public string CourtAppealedFrom { get; set; }
        public string CourtAppealedFromType { get; set; }
        public string PracticeArea { get; set; }
        public string PracticeSubAreas { get; set; }
        public string WordsPhrases { get; set; }
        public string Representatives { get; set; }
        public string Legislation { get; set; }
        public string Order { get; set; }
        public string MostRecentCiting { get; set; }
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
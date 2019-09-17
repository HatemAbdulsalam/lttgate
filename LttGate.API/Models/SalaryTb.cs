using System;
using System.Collections.Generic;

namespace LttGate.API.Models
{
    public partial class SalaryTb
    {
        public string Eid { get; set; }
        public decimal? Esalary { get; set; }
        public DateTime? DateInter { get; set; }
        public int Id { get; set; }
        public string Smonth { get; set; }
        public string EvaPerf { get; set; }
    }
}

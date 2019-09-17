using System;
using System.Collections.Generic;

namespace LttGate.API.Models
{
    public partial class VacApp
    {
        public int IdVac { get; set; }
        public string Eid { get; set; }
        public DateTime? DateEnd { get; set; }
        public short? Count { get; set; }
        public string NamDay { get; set; }
        public DateTime? Sday { get; set; }
        public bool? AnBala { get; set; }
        public bool? Hajj { get; set; }
        public bool? Maria { get; set; }
        public bool? InCountry { get; set; }
        public DateTime? IntDate { get; set; }
        public bool? OutCountry { get; set; }
        public short? IdManag { get; set; }
        public short? IdDep { get; set; }
        public short? IdUnit { get; set; }
        public short? VaState { get; set; }
        public string Note { get; set; }
        public DateTime? Udate { get; set; }
        public string Eeid { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LttGate.API.Models
{
    public partial class LogDate
    {
        [Key]
        public int Id { get; set; }
        public string Eid { get; set; }
        public string Eeid { get; set; }
        public DateTime? DateInter { get; set; }
        public short? PrevBala { get; set; }
        public short? NexBala { get; set; }
        public short? Amount { get; set; }
        public short? PreEf { get; set; }
        public short? NextEf { get; set; }
        public short? AmountEf { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LttGate.API.Models
{
    public partial class Furlough
    {
        public decimal Id { get; set; }
        public string Eid { get; set; }
        public int? FurloughEid { get; set; }
        public short? SubField { get; set; }
        public short? Estate { get; set; }
        public string MothYear { get; set; }
        public short? Ef { get; set; }
        public short? SubEf { get; set; }
        public short? Age { get; set; }
        [Key]
        public int EntityId { get; set; }
    }
}

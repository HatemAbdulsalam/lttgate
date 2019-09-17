using System;
using System.Collections.Generic;

namespace LttGate.API.Models
{
    public partial class DutyTb
    {
        public int Did { get; set; }
        public string Eid { get; set; }
        public int? Gid { get; set; }
        public int? Pid { get; set; }
        public DateTime? Dte { get; set; }
    }
}

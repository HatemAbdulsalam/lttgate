using System;
using System.Collections.Generic;

namespace LttGate.API.Models
{
    public partial class LogContact
    {
        public string Mobile { get; set; }
        public string Eid { get; set; }
        public string Sstate { get; set; }
        public DateTime? Sdate { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LttGate.API.Models
{
    public partial class AccessLog
    {
        [Key]
        public int Rcdid { get; set; }
        public string EmployeeId { get; set; }
        public DateTime LogDate { get; set; }
        public TimeSpan LogTime { get; set; }
        public string TerminalId { get; set; }
        public string InOut { get; set; }
    }
}

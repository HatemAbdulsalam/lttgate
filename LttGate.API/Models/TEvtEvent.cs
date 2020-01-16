using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LttGate.API.Models
{
    public partial class TEvtEvent
    {
        public DateTime EventTime { get; set; }
        public int DeviceIdx { get; set; }
        public string ReaderNo { get; set; }
        public string CardNo { get; set; }
        public byte Ema { get; set; }
        public string EventType { get; set; }
        public string EventStatus { get; set; }
        public string FunctionCd { get; set; }
        public int? Psnid { get; set; }
        public string Description { get; set; }
        public DateTime? SortEventTime { get; set; }
        public int? Vstid { get; set; }
        public int? Cmpid { get; set; }
        
                [Key]
        public int Id { get; set; }
    }
}

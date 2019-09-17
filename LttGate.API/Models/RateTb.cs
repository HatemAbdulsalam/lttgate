using System;
using System.Collections.Generic;

namespace LttGate.API.Models
{
    public partial class RateTb
    {
        public int IdR { get; set; }
        public string Eid { get; set; }
        public string Rdate { get; set; }
        public string Rate { get; set; }
        public string Maneg { get; set; }
        public string NotePositive { get; set; }
        public string NoteNegitive { get; set; }
        public string MothPer { get; set; }
    }
}

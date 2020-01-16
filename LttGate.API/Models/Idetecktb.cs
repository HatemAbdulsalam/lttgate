using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LttGate.API.Models
{
    public partial class Idetecktb
    {
        public string Eid { get; set; }
        public string Psccardno { get; set; }
        public string DateIntry { get; set; }
        public string Ename { get; set; }
        public int? Enid { get; set; }
        public string Descreption { get; set; }
        public string Manage { get; set; }
        public string Cid { get; set; }
        public string Po { get; set; }
        [Key]
        public int Id { get; set; }
    }
}

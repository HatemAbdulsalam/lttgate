using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LttGate.API.Models
{
    public partial class Aemployee
    {
        public string Mg { get; set; }
        public string Eid { get; set; }
        public string Ename { get; set; }
        public string Eni { get; set; }
        public short? Capacity { get; set; }
        public string UserName { get; set; }
        public string Coname { get; set; }
        public short? IdManag { get; set; }
        public short? IdDep { get; set; }
        public short? IdUnit { get; set; }
        public string Hacked { get; set; }
        public int? Gid { get; set; }
        public int? Pid { get; set; }
        [Key]
        public int Id { get; set; }
    }
}

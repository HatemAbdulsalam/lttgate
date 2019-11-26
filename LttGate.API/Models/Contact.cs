using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LttGate.API.Models
{
    public partial class Contact
    {
        public string Eid { get; set; }
        public string Email { get; set; }
        public string emp_N { get; set; }
        public string Moblie { get; set; }
        public double? tel_intrenal { get; set; }
        public string No { get; set; }
        public string emp_P { get; set; }

        [Key]
        public int Id { get; set; }
    }
}

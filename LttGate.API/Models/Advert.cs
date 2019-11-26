using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LttGate.API.Models
{
    public partial class Advert
    {
        [Key]
        public int Id { get; set; }
        public string Address { get; set; }
        public string Path { get; set; }
        public int? It { get; set; }
        public DateTime? Date { get; set; }
        public string Explanation { get; set; }
        public string Cul1 { get; set; }
        public string Cul2 { get; set; }
        public string Cul3 { get; set; }
    }
}

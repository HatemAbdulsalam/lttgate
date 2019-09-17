using System;
using System.Collections.Generic;

namespace LttGate.API.Models
{
    public partial class WiMaxReservation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Eid { get; set; }
        public string NameReservation { get; set; }
        public string NatReservation { get; set; }
        public string Phone { get; set; }
        public string Type { get; set; }
        public DateTime? Date { get; set; }
        public int? Reservation { get; set; }
        public DateTime? DateReservation { get; set; }
        public string Done { get; set; }
    }
}

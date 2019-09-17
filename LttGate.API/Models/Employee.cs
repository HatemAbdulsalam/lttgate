using System;
using System.Collections.Generic;

namespace LttGate.API.Models
{
    public partial class Employee
    {
        public string EmployeeId { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string OtherName { get; set; }
        public string Password { get; set; }
        public int? EmpStatus { get; set; }
        public int? NumMinutiae1 { get; set; }
        public int? NumMinutiae2 { get; set; }
        public string PhotoFile { get; set; }
        public byte[] Minutiae1 { get; set; }
        public byte[] Minutiae2 { get; set; }
        public byte[] Photo { get; set; }
        public string Department { get; set; }
    }
}

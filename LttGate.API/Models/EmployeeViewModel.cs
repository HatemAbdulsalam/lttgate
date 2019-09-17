using System;

namespace LttGate.API.Data
{
    public class EmployeeViewModel
    {
        public string LogDate { get; set; }
        public string eni;
        public string Ename { get; set; }
        public string Mg { get; set; }
        public string eid { get; set; }
        public string UserName { get; set; }
        public TimeSpan LogTime { get; set; }
        public string InOut { get; set; }
        public TimeSpan? TimeOut { get;   set; }
        public TimeSpan SupposedTimeOut { get;   set; }
    }
}
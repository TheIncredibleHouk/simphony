using System;
using System.IO;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Daiz.DataBase;
using SimPhony;

namespace SimphonyTest
{
    [TestClass]
    public class SimphonyTest
    {
        [TestInitialize]
        public void StartUp()
        {
            DbManager.ConnectionString = "Server=DAIZ-PC;Database=SimPhony;Trusted_Connection=Yes;";
        }
    }
}

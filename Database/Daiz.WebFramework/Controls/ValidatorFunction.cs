using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.WebFramework.Controls
{
    public enum ValidatorFunction
    {
        Number,
        PositiveNumber,
        NonnegativeNumber,
        Integer,
        Date,
        FutureDate,
        TodayOrFutureDate,
        AlphaNumeric,
        Currency
    }
}

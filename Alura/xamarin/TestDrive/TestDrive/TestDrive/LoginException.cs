using System;
using System.Collections.Generic;
using System.Text;

namespace TestDrive
{
    public class LoginException : Exception
    {
        public LoginException(string message) : base(message)
        {

        }
    }
}

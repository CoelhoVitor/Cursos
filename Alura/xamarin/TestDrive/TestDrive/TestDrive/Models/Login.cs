﻿using System;
using System.Collections.Generic;
using System.Text;

namespace TestDrive.Models
{
    public class Login
    {
        public string email { get; set; }
        public string senha { get; set; }

        public Login(string email, string senha)
        {
            this.email = email;
            this.senha = senha;
        }
    }
}
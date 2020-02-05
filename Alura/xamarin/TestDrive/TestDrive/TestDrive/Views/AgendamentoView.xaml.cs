﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;

namespace TestDrive.Views
{
    public partial class AgendamentoView : ContentPage
    {
        public Veiculo Veiculo { get; set; }

        public AgendamentoView(Veiculo veiculo)
        {
            InitializeComponent();

            Veiculo = veiculo;
            BindingContext = this;
        }
    }
}
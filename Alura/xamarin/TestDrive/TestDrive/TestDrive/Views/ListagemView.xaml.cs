﻿using System.Collections.Generic;
using Xamarin.Forms;

namespace TestDrive.Views
{

    public class Veiculo
    {
        public string Nome { get; set; }
        public decimal Preco { get; set; }
        public string PrecoFormatado
        {
            get { return string.Format("R$ {0}", Preco); }
        }
    }

    public partial class ListagemView : ContentPage
    {
        public List<Veiculo> Veiculos { get; set; }
        public ListagemView()
        {
            InitializeComponent();

            Veiculos = new List<Veiculo>
            {
                new Veiculo { Nome = "Azera V6", Preco = 60000 },
                new Veiculo { Nome = "Fiesta 2.0", Preco = 50000 },
                new Veiculo { Nome = "HB20 S", Preco = 40000}
            };

            BindingContext = this;

        }

        private void listViewVeiculos_ItemTapped(object sender, ItemTappedEventArgs e)
        {
            var veiculo = (Veiculo)e.Item;

            Navigation.PushAsync(new DetalheView(veiculo));
        }
    }
}
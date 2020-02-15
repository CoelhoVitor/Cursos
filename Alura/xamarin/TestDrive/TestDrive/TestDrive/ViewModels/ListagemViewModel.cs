using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using TestDrive.Models;
using Xamarin.Forms;

namespace TestDrive.ViewModels
{
    public class ListagemViewModel
    {
        private const string URL_GET_VEICULOS = "http://aluracar.herokuapp.com";

        public List<Veiculo> Veiculos { get; set; }
        
        Veiculo veiculoSelecionado;
        public Veiculo VeiculoSelecionado 
        {
            get
            {
                return veiculoSelecionado;
            }

            set
            {
                veiculoSelecionado = value;

                if (value != null)
                {
                    MessagingCenter.Send(veiculoSelecionado, "VeiculoSelecionado");
                }
            }
        }

        public ListagemViewModel()
        {
            this.Veiculos = new List<Veiculo>();
        }

        public async Task GetVeiculos()
        {
            HttpClient cliente = new HttpClient();
            string x = await cliente.GetStringAsync(URL_GET_VEICULOS);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Windows.Input;
using TestDrive.Models;
using Xamarin.Forms;

namespace TestDrive.ViewModels
{
    public class AgendamentoViewModel
    {
        const string URL_POST_AGENTAMENTO = "https://aluracar.herokuapp.com/salvaragendamento";

        public Agendamento Agendamento { get; set; }
        public ICommand AgendarCommand { get; set; }

        public Veiculo Veiculo
        {
            get
            {
                return Agendamento.Veiculo;
            }

            set
            {
                Agendamento.Veiculo = value;
            }
        }

        public string Nome
        {
            get
            {
                return Agendamento.Nome;
            }

            set
            {
                Agendamento.Nome = value;
            }
        }

        public string Fone
        {
            get
            {
                return Agendamento.Fone;
            }

            set
            {
                Agendamento.Fone = value;
            }
        }

        public string Email
        {
            get
            {
                return Agendamento.Email;
            }

            set
            {
                Agendamento.Email = value;
            }
        }

        public DateTime DataAgendamento
        {
            get
            {
                return Agendamento.DataAgendamento;
            }
            set
            {
                Agendamento.DataAgendamento = value;
            }
        }

        public TimeSpan HoraAgendamento
        {
            get
            {
                return Agendamento.HoraAgendamento;
            }
            set
            {
                Agendamento.HoraAgendamento = value;
            }
        }

        public AgendamentoViewModel(Veiculo veiculo)
        {
            this.Agendamento = new Agendamento
            {
                Veiculo = veiculo
            };

            this.AgendarCommand = new Command(() =>
            {
                MessagingCenter.Send(this.Agendamento, "Agendamento");
            });
        }

        public async void SalvarAgendamento()
        {
            HttpClient cliente = new HttpClient();

            StringContent conteudo = new StringContent("", Encoding.UTF8, "application/json");

            HttpResponseMessage resposta = await cliente.PostAsync(URL_POST_AGENTAMENTO, conteudo);

            if (resposta.IsSuccessStatusCode)
            {
                MessagingCenter.Send(this.Agendamento, "SucessoAgendamento");
            }
            else
            {
                MessagingCenter.Send(new ArgumentException(), "FalahaAgendamento");
            }
        }
    }
}

using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Windows.Input;
using TestDrive.Models;
using Xamarin.Forms;

namespace TestDrive.ViewModels
{
    public class AgendamentoViewModel : BaseViewModel
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
                OnPropertyChanged();
                ((Command)AgendarCommand).ChangeCanExecute();
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
                OnPropertyChanged();
                ((Command)AgendarCommand).ChangeCanExecute();
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
                OnPropertyChanged();
                ((Command)AgendarCommand).ChangeCanExecute();
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
            }, () =>
            {
                return !string.IsNullOrEmpty(this.Nome)
                    && !string.IsNullOrEmpty(this.Fone)
                    && !string.IsNullOrEmpty(this.Email);
            });
        }

        public async void SalvarAgendamento()
        {
            HttpClient cliente = new HttpClient();

            DateTime dataHoraAgendamento = new DateTime(
                DataAgendamento.Year, DataAgendamento.Month, DataAgendamento.Day,
                HoraAgendamento.Hours, HoraAgendamento.Minutes, HoraAgendamento.Seconds);

            string json = JsonConvert.SerializeObject(new
            {
                nome = this.Nome,
                fone = this.Fone,
                email = this.Email,
                carro = this.Veiculo.Nome,
                preco = this.Veiculo.Preco,
                dataAgendamento = dataHoraAgendamento
            });

            StringContent conteudo = new StringContent(json, Encoding.UTF8, "application/json");

            HttpResponseMessage resposta = await cliente.PostAsync(URL_POST_AGENTAMENTO, conteudo);

            if (resposta.IsSuccessStatusCode)
            {
                MessagingCenter.Send(this.Agendamento, "SucessoAgendamento");
            }
            else
            {
                MessagingCenter.Send(new ArgumentException(), "FalhaAgendamento");
            }
        }
    }
}

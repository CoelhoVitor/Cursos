using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestDrive.Models;
using TestDrive.ViewModels;
using Xamarin.Forms;

namespace TestDrive.Views
{
    public partial class AgendamentoView : ContentPage
    {
        public AgendamentoViewModel ViewModel { get; set; }

        public AgendamentoView(Veiculo veiculo)
        {
            InitializeComponent();
            this.ViewModel = new AgendamentoViewModel(veiculo);
            this.BindingContext = this.ViewModel;
        }

        protected override void OnAppearing()
        {
            base.OnAppearing();

            MessagingCenter.Subscribe<Agendamento>(this, "Agendamento", async (msg) =>
            {
                bool confirma = await DisplayAlert("Salvar Agendamento",
                "Deseja mesmo enviar o agendamento?",
                "Sim", "Não");

                if (confirma)
                {
                    this.ViewModel.SalvarAgendamento();

                    await DisplayAlert("Agendamento",
                    string.Format(
                    @"Veiculo: {0}
                    Nome: {1}
                    Fone: {2}
                    E-mail: {3}
                    Data Agendamento: {4}
                    Hora Agendamento: {5}",
                    msg.Veiculo.Nome, msg.Nome, msg.Fone,
                    msg.Email, msg.DataAgendamento.ToString("dd/MM/yyy"),
                    msg.HoraAgendamento),
                    "OK");
                }
            });

            MessagingCenter.Subscribe<Agendamento>(this, "SucessoAgendamento", (msg) =>
            {
                DisplayAlert("Agendamento", "Agendamento salvo com sucesso!", "OK");
            });

            MessagingCenter.Subscribe<ArgumentException>(this, "FalhaAgendamento", (msg) =>
            {
                DisplayAlert("Agendamento", "Falha no agendamento!", "OK");
            });
        }

        protected override void OnDisappearing()
        {
            base.OnDisappearing();

            MessagingCenter.Unsubscribe<Agendamento>(this, "Agendamento");
            MessagingCenter.Unsubscribe<Agendamento>(this, "SucessoAgendamento");
            MessagingCenter.Unsubscribe<ArgumentException>(this, "FalhaAgendamento");
        }
    }
}
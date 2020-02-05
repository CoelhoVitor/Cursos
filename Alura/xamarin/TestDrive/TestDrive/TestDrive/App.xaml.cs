using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using TestDrive.Views;

namespace TestDrive
{
    public partial class App : Application
    {

        public App()
        {
            InitializeComponent();

            MainPage = new NavigationPage(new ListagemView());
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}

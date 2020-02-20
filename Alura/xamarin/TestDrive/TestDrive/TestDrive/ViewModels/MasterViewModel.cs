using System.Windows.Input;
using TestDrive.Models;
using Xamarin.Forms;

namespace TestDrive.ViewModels
{
    public class MasterViewModel : BaseViewModel
    {
		private readonly Usuario usuario;

		public string Nome
		{
			get { return this.usuario.nome; }
			set { this.usuario.nome = value; }
		}

		public string Email
		{
			get { return this.usuario.email; }
			set { this.usuario.email = value; }
		}

		public string DataNascimento
		{
			get { return this.usuario.dataNascimento; }
			set { this.usuario.dataNascimento = value; }
		}

		public string Telefone
		{
			get { return this.usuario.telefone; }
			set { this.usuario.telefone = value; }
		}

		private bool editando = false;
		public bool Editando
		{
			get { return this.editando; }
			private set 
			{ 
				this.editando = value;
				OnPropertyChanged(nameof(Editando));
				// ((Command)EditarCommand).ChangeCanExecute();
			}
		}

		public ICommand EditarPerfilCommand { get; private set; }
		public ICommand SalvarCommand { get; private set; }
		public ICommand EditarCommand { get; private set; }


		public MasterViewModel(Usuario usuario)
		{
			this.usuario = usuario;
			this.DefinirComandos();
		}

		private void DefinirComandos()
		{
			EditarPerfilCommand = new Command(() =>
			{
				MessagingCenter.Send<Usuario>(this.usuario, "EditarPerfil");
			});

			SalvarCommand = new Command(() =>
			{
				this.Editando = false;
				MessagingCenter.Send<Usuario>(this.usuario, "SucessoSalvarUsuario");
			});

			EditarCommand = new Command(() =>
			{
				this.Editando = true;
			});
		}
	}
}

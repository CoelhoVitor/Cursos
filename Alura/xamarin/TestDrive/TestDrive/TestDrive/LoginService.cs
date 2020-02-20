using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using TestDrive.Models;
using Xamarin.Forms;

namespace TestDrive
{
    public class LoginService
    {
		public async Task FazerLogin(Login login)
		{
			
			using (HttpClient cliente = new HttpClient())
			{
				HttpContent camposFormulario = new FormUrlEncodedContent(new[]
				{
					new KeyValuePair<string, string>("email", login.email),
					new KeyValuePair<string, string>("senha", login.senha)
				});

				cliente.BaseAddress = new Uri("https://aluracar.herokuapp.com");

				try
				{
					HttpResponseMessage resultado = await cliente.PostAsync("/login", camposFormulario);

					if (resultado.IsSuccessStatusCode)
					{
						string conteudoResultado = await resultado.Content.ReadAsStringAsync();

						ResultadoLogin resultadoLogin = JsonConvert.DeserializeObject<ResultadoLogin>(conteudoResultado);

						MessagingCenter.Send<Usuario>(resultadoLogin.usuario, "SucessoLogin");
					}
					else
					{
						MessagingCenter.Send<LoginException>(new LoginException("Usuário ou senha incorreto"), "FalhaLogin");
					}
				}
				catch (Exception)
				{

					MessagingCenter.Send<LoginException>(new LoginException(@"Ocorreu um erro de comunicação com o servidor. Por favor verifique a sua conexão e tente novamente mais tarde."),
					"FalhaLogin");
				}			
			}			
		}
	}
}

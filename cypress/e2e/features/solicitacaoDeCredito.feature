#language: pt

Funcionalidade: Validação da funcionalidade de aprovação ou reprovação
  Descrição da funcionalidade: Cenários voltados para os caminhos felizes da solicitação de crédito

Contexto: 
  Dado que eu acesse a página de solicitação de crédito

Esquema do Cenário: Análise de crédito para clientes usando perfis da fixture
  Quando eu preencho o formulário com o perfil <Perfil> do arquivo "solicitacaoCredito"
  E eu clico em "Solicitar Crédito"
  Então o sistema irá informar que a solicitação foi <Resultado>

  Exemplos:
    | Perfil            | Resultado  |
    | "usuarioAprovado"   | "APROVADA"   |
    | "usuarioReprovado"  | "REPROVADA"  |

Cenário: Validação dos campos obrigatórios
  Quando eu preencher os campos obrigatórios com dados válidos
  E eu clico em "Solicitar Crédito"
  Então o sistema irá informar que houve uma solicitação

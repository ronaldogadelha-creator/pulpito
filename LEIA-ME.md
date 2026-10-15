# Púlpito — instalar no iPad e funcionar sem internet

Estes arquivos formam o app inteiro. Depois de publicados uma vez, o iPad
guarda tudo e o app abre pelo ícone, mesmo sem sinal.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | o app |
| `jszip.min.js` | leitor dos arquivos `.docx` |
| `sw.js` | o que faz funcionar sem internet |
| `manifest.webmanifest` | nome e ícone do app |
| `icon-*.png` | os ícones |

Mantenha todos juntos, na mesma pasta. Não renomeie nada.

## Publicar no GitHub Pages (uma vez só, de graça)

1. Crie uma conta em **github.com**, se ainda não tiver.
2. Clique em **New repository**. Nome: `pulpito`. Deixe em **Public** e clique em
   **Create repository**.
3. Na página do repositório vazio, clique em **uploading an existing file**.
   Arraste para lá **os arquivos de dentro desta pasta** (não a pasta em si) e
   clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em *Source*, escolha **Deploy from a branch**;
   em *Branch*, escolha **main** e **/ (root)**. Clique em **Save**.
5. Espere um ou dois minutos e atualize a página. Vai aparecer o endereço:
   `https://SEU-USUARIO.github.io/pulpito/`

O repositório é público, então quem tiver o endereço abre o app — mas os
esboços não ficam lá. Eles ficam guardados no aparelho de quem usa.

## Instalar no iPad

1. Abra o endereço no **Safari** (precisa ser o Safari, não o Chrome).
2. Toque no botão **Compartilhar** e escolha **Adicionar à Tela de Início**.
3. Abra o ícone **uma vez com internet**. Nessa primeira abertura o iPad grava
   o app inteiro.
4. Pronto: daí em diante ele abre e funciona sem sinal nenhum.

Mesma coisa no celular Android (Chrome → menu → *Instalar app*) e no computador.

## Levar os esboços de um aparelho para outro

Cada aparelho guarda os seus. Para passar de um para o outro:

- No aparelho que já tem os esboços, toque em **Exportar** — baixa um arquivo
  `esbocos-AAAAMMDD.json`.
- Mande esse arquivo para o outro aparelho (e-mail, AirDrop, WhatsApp) e, lá,
  toque em **Importar** e escolha o arquivo.

A importação soma: nada do que já estava lá é apagado, e um esboço que existe
nos dois fica com a versão mais recente.

## Quando eu mandar uma versão nova

1. Suba o `index.html` novo (e os outros arquivos que mudaram) no mesmo
   repositório, substituindo os antigos.
2. Abra o `sw.js` e troque a linha da versão, por exemplo de
   `const VERSAO = "pulpito-v1";` para `"pulpito-v2"`. É isso que avisa o iPad
   de que há coisa nova.
3. No iPad, abra o app com internet, feche e abra de novo. Ele já está
   atualizado — e os esboços guardados continuam lá.

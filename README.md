# Devocional BPA: página de vendas

Página de vendas do Devocional BPA (Boa, Perfeita e Agradável). É um site estático: um arquivo `index.html` e a pasta `img/`. Não precisa instalar nada nem compilar.

## O que tem aqui

- `index.html`: a página inteira (texto, estilo e scripts).
- `img/capa.webp`: capa do devocional.
- `img/luis.webp`: foto da seção "Quem escreveu".
- `img/og.jpg`: imagem que aparece quando o link é compartilhado (WhatsApp, Instagram).

## Como mudar preço, checkout, Pixel e Google Analytics

Tudo fica num bloco só, perto do topo do `index.html`:

```js
window.BPA = {
  checkout: "https://pay.kiwify.com.br/nKV7OAB",
  precoDe: "49",
  precoPor: "29",
  metaPixelId: "1930502218306155",
  gaId: ""
};
```

- **checkout**: link do checkout da Kiwify. Todos os botões da página vão para ele. As UTMs que chegarem na página (`?utm_source=...`) são repassadas para o checkout.
- **precoDe / precoPor**: o preço riscado e o preço da oferta. Mudam em todos os lugares da página de uma vez. A etiqueta "Economize R$ 20" e o ",00" ficam escritos no texto da seção da oferta: se mudar o preço, procure "Economize" e ajuste também.
- **metaPixelId**: ID do Pixel da Meta, só os números. A página dispara `PageView`, `ViewContent` e, no clique para o checkout, `InitiateCheckout`. O mesmo ID também aparece numa linha `<noscript>` logo depois de `<body>`: se trocar o Pixel, troque nos dois lugares.
- **gaId**: ID do Google Analytics 4 (`G-XXXXXXX`). Vazio = desligado.

## Como publicar na Hostinger

**Opção 1, manual (mais simples):** no hPanel, abra o Gerenciador de Arquivos do domínio `devocionalbpa.com.br`, entre em `public_html` e envie `index.html` e a pasta `img/`, substituindo os arquivos antigos.

**Opção 2, automática pelo GitHub:** no hPanel, vá em Sites > devocionalbpa.com.br > Avançado > Git, conecte este repositório no branch `main` e escolha `public_html` como pasta. Depois disso, cada `git push` atualiza o site.

Antes de trocar o que está no ar, guarde uma cópia do que estava em `public_html` (por exemplo numa pasta `_backup`). Para voltar atrás, é só restaurar essa cópia.

## Testar antes de publicar

Abra o `index.html` direto no navegador ou rode `python3 -m http.server 8000` nesta pasta e acesse `http://localhost:8000`. Confira no computador e no celular (no Chrome: F12 e o ícone de celular).

Feito pela [Seekgrow](https://seekgrow.com.br).

# Instruções para o agente (Codex) neste projeto

Projeto: página de vendas estática do Devocional BPA, de Luís Paulo Gandara. Responda sempre em português do Brasil.

## Como o projeto funciona
- Tudo está em `index.html` (HTML, CSS e JavaScript juntos) e em `img/`. Não há build, framework nem dependências. Não adicione nenhum.
- Preço, link do checkout, Pixel da Meta e Google Analytics ficam no bloco `window.BPA` no topo do `index.html`. Mude sempre por ali, nunca espalhando valores pelo texto.
- O Pixel também está numa linha `<noscript>` logo após `<body>`; ao trocar o ID, troque nos dois lugares.

## Regras de texto e design
- Nunca deixe uma palavra sozinha na última linha de título, subtítulo ou parágrafo. A página já tem `text-wrap: balance/pretty` e um script (`semViuva`) que junta as duas últimas palavras; se reescrever um título, confira no celular (375 px) e no computador (1280 px).
- "R$" sempre colado no número com `&nbsp;`.
- Todo link para fora do site (checkout, Instagram, WhatsApp) abre em nova aba com `target="_blank" rel="noopener noreferrer"`.
- Todos os botões de compra vão direto para o checkout (atributo `data-checkout`). Não volte a usar âncora `#oferta`.
- Paleta: creme `#F6EFE3`/`#FBF7F0`, tinta `#1E1912`, dourado `#A87E3A`/`#C9A15A`, escuro `#1A1611`. Fontes: Playfair Display nos títulos e Manrope no texto.
- As animações respeitam `prefers-reduced-motion`. Mantenha isso em qualquer efeito novo.
- Não invente depoimentos, números ou promessas. Depoimento só entra com print real enviado pelo Luís.
- Foto com marca d'água de IA (estrela do Gemini etc.) não entra.

## Antes de dizer que terminou
- Abra a página localmente (`python3 -m http.server 8000`) e confira em 375 px e 1280 px.
- Confira que nenhum botão ficou sem `data-checkout` e que não sobrou `#oferta`.
- Publicar na Hostinger substitui o que está no ar: só faça quando o Luís pedir.

## Objetivo
Na seção **"Quem criou o método"** (`src/components/landing/Authority.tsx`), substituir o quadro que hoje mostra o logo do Check-in Lotado pela foto enviada (dupla de criadores em ambiente premium, com ícones flutuantes de Meta Ads / WhatsApp / Google / Check-in Lotado).

## Passos

1. **Fazer upload da imagem para o CDN**
   - `lovable-assets create --file /mnt/user-uploads/Portfolio_Solucoes_XPLO_Hospedagens.pdf-2.png --filename authority-creators.png > src/assets/authority-creators.png.asset.json`

2. **Atualizar `src/components/landing/Authority.tsx`**
   - Trocar o import `logo` pelo pointer `authority-creators.png.asset.json`.
   - Substituir o `<img>` do logo por um bloco de imagem em proporção retrato/quadrada, `object-cover`, com moldura fina em ochre (`rgba(230,179,106,0.24)`) coerente com o restante da página.
   - Remover o padding interno branco (o `p-8 sm:p-10`) para a foto ocupar todo o cartão. Manter o selo "Autoridade" no canto inferior direito.
   - Alt text descritivo: "Criadores do Método Check-in Lotado".

## Fora do escopo
- Textos, stats e layout do lado direito permanecem inalterados.
- Nenhuma outra seção é tocada.

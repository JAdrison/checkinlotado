

## Hero: Vídeo como protagonista

Reestruturar o Hero para seguir o layout da referência — headline + subheadline centrados no topo, vídeo grande e centralizado logo abaixo, e os bullets + CTA embaixo do vídeo (em vez do grid lado a lado atual).

### Mudanças em `src/components/landing/Hero.tsx`

**Layout atual**: grid de 2 colunas (vídeo à esquerda, bullets à direita)

**Novo layout**: tudo empilhado verticalmente e centralizado:
1. Label + Headline + Subheadline (mantém como está)
2. Vídeo grande — largura total do container (`max-w-[900px]`), centralizado, sem o texto "Assista à aula de introdução"
3. Bullets em grid 2x2 abaixo do vídeo, mais compactos
4. CTA centralizado abaixo dos bullets

O vídeo passa a ser o elemento dominante da seção, ocupando quase toda a largura disponível, como na referência.

### Arquivo modificado
- `src/components/landing/Hero.tsx`


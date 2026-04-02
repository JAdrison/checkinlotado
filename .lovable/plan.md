

## Plano: Vídeo scroll-driven como fundo da seção Iparaí

### Conceito
Colocar o vídeo MOV da casa Iparaí como fundo da seção "Quem confia no método", onde o progresso do vídeo é controlado pelo scroll da página (scroll para baixo avança, scroll para cima volta). Sem som, sem controles visíveis.

### Mudanças

| Arquivo | Ação |
|---|---|
| `public/videos/iparai-bg.mp4` | Copiar o vídeo MOV do upload para a pasta public (converter para MP4 se necessário via ffmpeg) |
| `src/components/landing/ForWhom.tsx` | Adicionar uma seção dedicada com o vídeo scroll-driven atrás do conteúdo "Quem confia no método" |
| `src/hooks/useScrollVideo.ts` | Criar hook customizado que sincroniza `video.currentTime` com a posição de scroll do container |

### Detalhes técnicos

1. **Conversão do vídeo**: Usar ffmpeg para converter MOV para MP4 (H.264) otimizado para web, com tamanho reduzido.

2. **Hook `useScrollVideo`**: 
   - Usa `IntersectionObserver` para detectar quando a seção está visível
   - Usa evento `scroll` para calcular a porcentagem de scroll dentro do container
   - Mapeia essa porcentagem para `video.currentTime = percentage * video.duration`

3. **Layout na ForWhom.tsx**:
   - Envolver a seção "Quem confia no método" em um container com `position: relative` e altura extra para dar "espaço de scroll"
   - Vídeo como `<video>` com `position: sticky`, `object-fit: cover`, `muted`, `playsInline`, sem `controls`
   - Overlay escuro semi-transparente para manter legibilidade do texto/logos por cima
   - Conteúdo (label + logos) posicionado por cima do vídeo com z-index

### Resultado
- Vídeo ocupa o fundo da seção de logos
- Ao scrollar, o vídeo avança/volta conforme a posição
- Sem som, sem botões de player
- Conteúdo das logos aparece por cima com overlay para contraste


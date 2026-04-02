

## Plano: Substituir 5 imagens no carrossel "Para quem é"

As 5 imagens enviadas serão copiadas para `src/assets/forwhom/`, substituindo as imagens existentes dos seguintes cards:

| Imagem enviada | Card destino | Arquivo substituído |
|---|---|---|
| image-10 (pousada com piscina) | Pousadas | `pousada.jpg` |
| image-11 (studio moderno) | Apartamentos e Studios | `apartamento.jpg` |
| image-12 (entrada de hotel/resort) | Hotéis | `hotel.jpg` |
| image-13 (casa de serra) | Casas de Serra | `casa-serra.jpg` |
| image-14 (casa de praia) | Casas de Praia | `casa-praia.jpg` |

### Alterações

1. Copiar cada imagem de `user-uploads://` para o respectivo arquivo em `src/assets/forwhom/`, sobrescrevendo os existentes.
2. Atualizar as extensões dos imports em `ForWhom.tsx` de `.jpg` para `.png` nos 5 arquivos alterados.

Nenhuma outra alteração de layout ou código necessária.


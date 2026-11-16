# VitalMais — revisão de interface

## Direção

- Produto: consultas, exames e acompanhamento no Centro de Fortaleza
- Caráter: sereno, próximo e criterioso
- Universo: luz natural, madeira e verde dos ambientes VitalMais
- Momentos: imagem de consulta médica no hero e render compacto na seção de estrutura
- Assinatura: sinal de mais discreto nos títulos de seção

Marca, serviços e sequência das seções foram preservados. Os perfis fictícios da rota de especialistas foram retirados com confirmação da proprietária.

## Auditoria e tratamento

1. **Espaçamento.** A página passou a ter uma largura de leitura comum e intervalos consistentes. Serviços usam divisórias e agrupamento em vez de blocos soltos.
2. **Cor.** Branco quente, neutros com leve tom verde e um verde escuro para ações. Removidos brilho, sombras coloridas e mistura de tons de texto sem função.
3. **Ícones.** Ícones rasterizados e a dependência da fonte de símbolos deram lugar a SVGs locais com tamanho e traço consistentes. Serviços usam numeração discreta.
4. **Texto.** Títulos e descrições dizem quais cuidados estão disponíveis. Retiradas promessas genéricas de superioridade tecnológica, o telefone fictício e os perfis de exemplo. Agendamento permanece identificado como futuro.
5. **Tipografia.** Newsreader nos títulos e DM Sans na interface, com pesos de 400 a 500 e ênfase por tamanho. Fontes serifadas e sem serifa de sistema são usadas como alternativas.
6. **Layout.** Hero dividido entre mensagem e imagem de consulta médica; estrutura, localização e rodapé seguem a mesma linha de alinhamento. A rota de especialistas compartilha a identidade e o rodapé.
7. **Detalhes.** Ações com destinos reais, link de contato corrigido, rota no Google Maps, menu com estado acessível e fechamento por Escape, link para pular ao conteúdo e foco visível. Removido o roteador redundante.
8. **Imagens.** Reutilizados os arquivos do projeto, sem geração adicional. Imagens com descrição, dimensões e carregamento diferenciado para hero e conteúdo secundário.
9. **Movimento.** Retiradas animações de entrada de cada cartão e dependência de observação do scroll para mostrar o conteúdo. Uma entrada curta no hero, transições simples e respeito à preferência por movimento reduzido.

## Limites de conteúdo

Agendamento e dados reais dos profissionais ainda precisam ser configurados quando estiverem disponíveis. Endereço, horários e Instagram foram mantidos a partir do conteúdo existente. O mapa incorporado depende do serviço externo do Google; o link de rota funciona como alternativa.

## Crédito

Processo orientado pela skill **unslop**, de Damir Sokolovsky ([@heydamir](https://x.com/heydamir)), licenciada sob [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Implementação específica para a VitalMais.

## Validação

- `npm run build`: compilação de produção concluída
- `CI=true npm test -- --watchAll=false`: dois testes aprovados, cobrindo destinos de navegação e estado/fechamento do menu
- Chrome em 320, 390, 768 e 1440 px: sem excesso horizontal, imagens carregadas e menu móvel funcional
- Rota `/especialistas`: carregamento direto aprovado e ausência de registros fictícios
- Nenhum erro de execução JavaScript durante os testes no navegador
- `git diff --check`: sem problemas de whitespace

## Ajuste após revisão

Restaurada a imagem médica original no hero e utilizada também na página de especialistas. O render do consultório ficou limitado a 400 px no desktop e 320 px no celular, com legenda de imagem ilustrativa. A recepção deixou de ocupar o destaque.

## Segunda rodada — composição editorial

- Hero com proporção assimétrica, foto médica maior, fade lateral mais amplo e continuidade até a faixa inferior, sem legenda
- Consultas e exames de sangue em destaque; demais serviços organizados em um índice compacto, com conteúdo e sequência preservados
- Estrutura em verde profundo, com render limitado às dimensões já aprovadas e identificado como ilustrativo
- Localização em superfície clara e rodapé em tom suave, com título maior, contato separado por uma linha e navegação simplificada
- Entrada do texto em 600 ms e fade da fotografia em 700 ms, uma vez ao carregar, desativados com preferência por movimento reduzido
- Link de especialistas permanece ausente do rodapé

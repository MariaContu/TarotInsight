# 🔮 Tarot Insight

Aplicação front-end desenvolvida em Angular que simula leituras de tarot com foco em experiência do usuário, interatividade e organização de componentes.

---

## ✨ Funcionalidades

* 🔮 Sorteio aleatório de cartas de tarot
* 🔄 Suporte a cartas invertidas com significados diferentes
* 🎴 Filtros por:

  * Arcano (Maior / Menor)
  * Naipe (Copas, Espadas, Paus, Ouros)
  * Tipo de leitura (Geral, Carreira, Saúde, Relacionamentos)
* 🧠 Exibição dinâmica de significados
* 🎨 Interface moderna com animações suaves (flip de carta)
* 📜 Histórico de leituras *(em desenvolvimento)*

---

## 🛠️ Tecnologias Utilizadas

* **Angular (Standalone Components)**
* **TypeScript**
* **SCSS**
* **RxJS (básico)**
* **Angular Animations**

---

## 🧩 Estrutura do Projeto

```bash
src/
 ├── app/
 │   ├── components/
 │   │   ├── card/
 │   │   ├── filters/
 │   │   ├── history/
 │   │   ├── reading/
 │   │
 │   ├── pages/
 │   │   ├── home/
 │   │
 │   ├── services/
 │   │   ├── tarot.service.ts
 │   │
 │   ├── models/
 │   │   ├── card.model.ts
 │
 ├── assets/
 │   ├── data/
 │   │   ├── major.json
 │   │   ├── cups.json
 │   │   ├── swords.json
 │   │   ├── wands.json
 │   │   ├── pentacles.json
```

---

## 🚀 Como executar o projeto

```bash
# instalar dependências
npm install

# rodar aplicação
ng serve
```

A aplicação estará disponível em:
👉 http://localhost:4200

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de:

* Praticar desenvolvimento front-end com Angular
* Aplicar conceitos de componentização e gerenciamento de estado
* Trabalhar com manipulação de dados e interações dinâmicas
* Construir uma interface visualmente agradável com foco em UX

---

## 📌 Próximos passos

* [ ] Implementar histórico persistente (localStorage)
* [ ] Melhorar sistema de filtros (UX e performance)
* [ ] Adicionar animações mais refinadas
* [ ] Completar base de dados com todas as 78 cartas

---

## 👩‍💻 Autora

Maria Eduarda Contu
🔗 LinkedIn
🔗 GitHub

---

## 💡 Observações

Este projeto faz parte do meu portfólio como desenvolvedora Full Stack, com foco em evolução técnica e construção de aplicações interativas.

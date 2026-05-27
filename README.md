# Experiência 4x4 — Site (Landing Page)

Landing page de alta conversão para a **Experiência 4x4 — Expedições Off Road**.
Site estático (HTML, CSS e JavaScript puro), leve e rápido, pronto para subir no **Vercel** a partir do **GitHub**.

## Estrutura

```
experiencia-4x4/
├── index.html              # A página inteira
├── assets/
│   ├── css/styles.css      # Estilos
│   ├── js/main.js          # Interações (menu, FAQ, galeria, animações)
│   └── img/                # Logo, fotos e ícones
│       ├── logo.png
│       ├── hero.jpg        # Imagem de fundo do topo
│       ├── exp-1..5.jpg    # Fotos dos cards de expedição
│       └── galeria-1..6.jpg# Fotos da galeria
├── vercel.json             # Config de cache e segurança
├── robots.txt / sitemap.xml
└── README.md
```

## Como publicar no Vercel (passo a passo)

1. **Crie um repositório no GitHub** (ex.: `experiencia-4x4`) e suba todos estes arquivos.
   - Pela web: New repository → "uploading an existing file" → arraste a pasta.
   - Ou pelo terminal:
     ```
     git init
     git add .
     git commit -m "Site Experiência 4x4"
     git branch -M main
     git remote add origin https://github.com/SEU-USUARIO/experiencia-4x4.git
     git push -u origin main
     ```
2. Acesse **vercel.com** → **Add New… → Project** → conecte sua conta do GitHub.
3. Selecione o repositório `experiencia-4x4` e clique em **Import**.
4. Não precisa configurar nada (Framework Preset: **Other**). Clique em **Deploy**.
5. Em segundos o site estará no ar. A cada `git push`, o Vercel atualiza sozinho.
6. (Opcional) Em **Settings → Domains**, conecte seu domínio próprio (ex.: experiencia4x4.com.br).

## WhatsApp (importante)

Todos os botões já abrem o WhatsApp **(54) 99703-5568** com uma mensagem pré-pronta
que avisa que o cliente **veio pelo site**. Os botões dos cards ainda informam **qual
expedição** a pessoa quer — assim você sabe exatamente de onde veio o contato.

## O que trocar depois

- **Fotos**: as imagens em `assets/img/` (hero, exp-1..5, galeria-1..6) são ilustrativas.
  Basta substituir pelos arquivos reais **mantendo os mesmos nomes** — o site se atualiza sozinho.
- **Números da seção de estatísticas** (em `index.html`, seção "stats"): ajuste para os valores reais.
- **Depoimentos**: troque pelos depoimentos verdadeiros dos clientes.
- **Domínio nas tags de SEO**: troque `experiencia4x4.com.br` pelo seu domínio final em `index.html`, `robots.txt` e `sitemap.xml`.

## Dica de performance

As imagens já estão otimizadas e com `loading="lazy"`. Ao trocar pelas fotos reais,
exporte em JPG com largura próxima de 1920px (hero) / 1200px (cards) para manter o site rápido.

# 📊 Schema Markup - Guia Completo

[![Schema.org](https://img.shields.io/badge/Schema.org-Structured%20Data-blue?style=for-the-badge)](https://schema.org/)

> 📚 Guia completo de dados estruturados com Schema.org - como ajudar os mecanismos de busca a entender seu conteúdo e exibir rich snippets.

---

## 📋 Índice

1. [O que é Schema Markup?](#-o-que-é-schema-markup)
2. [Por que Usar Schema](#-por-que-usar-schema)
3. [Formatos de Implementação](#-formatos-de-implementação)
4. [Schema Básico - Website](#-schema-básico---website)
5. [Schema Organization](#-schema-organization)
6. [Schema Article](#-schema-article)
7. [Schema Product](#-schema-product)
8. [Schema LocalBusiness](#-schema-localbusiness)
9. [Schema FAQ](#-schema-faq)
10. [Schema BreadcrumbList](#-schema-breadcrumblist)
11. [Schema Course](#-schema-course)
12. [Schema Event](#-schema-event)
13. [Schema Recipe](#-schema-recipe)
14. [Schema Review](#-schema-review)
15. [Schema HowTo](#-schema-howto)
16. [Schema VideoObject](#-schema-videoobject)
17. [Múltiplos Schemas](#-múltiplos-schemas)
18. [Validação e Testes](#-validação-e-testes)
19. [Erros Comuns](#-erros-comuns)
20. [Recursos e Documentação](#-recursos-e-documentação)

---

## 🌐 O que é Schema Markup?

**Schema Markup** é um vocabulário de dados estruturados (Schema.org) que você adiciona ao HTML para ajudar os mecanismos de busca a entender melhor o conteúdo da sua página.

### Como Funciona

```
Sem Schema:                    Com Schema:
┌─────────────────┐           ┌─────────────────┐
│ João's Bakery   │           │ 🏪 João's Bakery │
│ 123 Main St     │    →      │ ⭐⭐⭐⭐⭐ 4.8 (150)│
│ Best bread...   │           │ 📍 123 Main St   │
└─────────────────┘           │ 🕐 Aberto agora  │
                              │ 💰 R$ 15-50      │
                              └─────────────────┘
```

### Tipos de Rich Snippets

| Tipo | Aparência | Schema Usado |
|------|-----------|--------------|
| **Review Stars** | ⭐⭐⭐⭐⭐ 4.5 | Review, AggregateRating |
| **FAQ** | Perguntas expansíveis | FAQPage |
| **Recipe** | Foto, tempo, calorias | Recipe |
| **Product** | Preço, disponibilidade | Product |
| **Event** | Data, local, ingressos | Event |
| **How-to** | Passos ilustrados | HowTo |
| **Video** | Thumbnail, duração | VideoObject |
| **Breadcrumb** | Caminho de navegação | BreadcrumbList |

---

## 💡 Por que Usar Schema

### Benefícios Comprovados

| Benefício | Impacto |
|-----------|---------|
| **CTR maior** | Até 30% mais cliques |
| **Destaque visual** | Rich snippets chamam atenção |
| **Melhor compreensão** | Google entende melhor seu conteúdo |
| **Voice Search** | Usado por assistentes virtuais |
| **Knowledge Graph** | Possibilidade de aparecer |

### CTR por Tipo de Snippet

```
Rich Snippet (com Schema):     CTR ~58%
Featured Snippet:              CTR ~42%
Resultado Normal:              CTR ~30%
Resultado Página 2:            CTR ~2%
```

---

## 📝 Formatos de Implementação

### 1. JSON-LD (Recomendado pelo Google) ✅

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Minha Empresa",
    "url": "https://minhaempresa.com"
}
</script>
```

**Vantagens:**
- Fácil de implementar e manter
- Não mistura com HTML
- Pode ser gerado dinamicamente
- Recomendado pelo Google

### 2. Microdata

```html
<div itemscope itemtype="https://schema.org/Organization">
    <span itemprop="name">Minha Empresa</span>
    <a itemprop="url" href="https://minhaempresa.com">Site</a>
</div>
```

**Uso:** Quando dados estão no HTML visível.

### 3. RDFa

```html
<div vocab="https://schema.org/" typeof="Organization">
    <span property="name">Minha Empresa</span>
    <a property="url" href="https://minhaempresa.com">Site</a>
</div>
```

**Uso:** Menos comum, mais em ambientes acadêmicos.

### Comparação

| Formato | Recomendação | Dificuldade | Separação |
|---------|--------------|-------------|-----------|
| **JSON-LD** | ⭐⭐⭐⭐⭐ | Fácil | Separado do HTML |
| **Microdata** | ⭐⭐⭐ | Média | Misturado com HTML |
| **RDFa** | ⭐⭐ | Difícil | Misturado com HTML |

---

## 🌍 Schema Básico - Website

### WebSite

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nome do Site",
    "alternateName": "Nome Alternativo",
    "url": "https://www.seusite.com",
    "description": "Descrição do site",
    "inLanguage": "pt-BR",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.seusite.com/busca?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
}
</script>
```

### WebPage

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Título da Página",
    "description": "Descrição da página",
    "url": "https://www.seusite.com/pagina/",
    "inLanguage": "pt-BR",
    "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.seusite.com/#website"
    },
    "datePublished": "2024-01-01T08:00:00+00:00",
    "dateModified": "2024-01-15T10:30:00+00:00",
    "author": {
        "@type": "Person",
        "name": "Nome do Autor"
    },
    "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.seusite.com/imagem.jpg"
    }
}
</script>
```

---

## 🏢 Schema Organization

### Empresa/Organização

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nome da Empresa",
    "legalName": "Nome Legal da Empresa LTDA",
    "url": "https://www.empresa.com",
    "logo": {
        "@type": "ImageObject",
        "url": "https://www.empresa.com/logo.png",
        "width": 600,
        "height": 60
    },
    "description": "Descrição da empresa",
    "foundingDate": "2010-01-15",
    "founders": [
        {
            "@type": "Person",
            "name": "João Silva"
        }
    ],
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Paulista, 1000",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "01310-100",
        "addressCountry": "BR"
    },
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+55-11-99999-9999",
            "contactType": "customer service",
            "availableLanguage": ["Portuguese", "English"],
            "areaServed": "BR"
        },
        {
            "@type": "ContactPoint",
            "telephone": "+55-11-3333-3333",
            "contactType": "sales",
            "availableLanguage": "Portuguese"
        }
    ],
    "sameAs": [
        "https://www.facebook.com/empresa",
        "https://www.instagram.com/empresa",
        "https://www.linkedin.com/company/empresa",
        "https://twitter.com/empresa",
        "https://www.youtube.com/empresa"
    ],
    "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 50,
        "maxValue": 100
    }
}
</script>
```

### Person (para Autores/Perfis)

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "João Silva",
    "givenName": "João",
    "familyName": "Silva",
    "jobTitle": "Desenvolvedor Full Stack",
    "email": "joao@email.com",
    "telephone": "+55-11-99999-9999",
    "url": "https://joaosilva.com",
    "image": "https://joaosilva.com/foto.jpg",
    "sameAs": [
        "https://linkedin.com/in/joaosilva",
        "https://github.com/joaosilva",
        "https://twitter.com/joaosilva"
    ],
    "worksFor": {
        "@type": "Organization",
        "name": "Empresa XYZ"
    },
    "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Universidade de São Paulo"
    }
}
</script>
```

---

## 📰 Schema Article

### Artigo de Blog

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Título do Artigo com até 110 Caracteres",
    "description": "Descrição breve do artigo",
    "image": [
        "https://seusite.com/imagem-1x1.jpg",
        "https://seusite.com/imagem-4x3.jpg",
        "https://seusite.com/imagem-16x9.jpg"
    ],
    "datePublished": "2024-01-15T08:00:00+00:00",
    "dateModified": "2024-01-20T10:30:00+00:00",
    "author": {
        "@type": "Person",
        "name": "João Silva",
        "url": "https://seusite.com/autor/joao-silva"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Nome do Site",
        "logo": {
            "@type": "ImageObject",
            "url": "https://seusite.com/logo.png",
            "width": 600,
            "height": 60
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://seusite.com/blog/titulo-do-artigo/"
    },
    "articleSection": "Tecnologia",
    "keywords": ["javascript", "programação", "desenvolvimento web"],
    "wordCount": 1500,
    "articleBody": "Texto completo do artigo ou resumo..."
}
</script>
```

### NewsArticle (Notícias)

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Título da Notícia",
    "image": "https://seusite.com/noticia-imagem.jpg",
    "datePublished": "2024-01-15T08:00:00+00:00",
    "dateModified": "2024-01-15T10:00:00+00:00",
    "author": {
        "@type": "Person",
        "name": "Repórter Nome"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Nome do Jornal",
        "logo": {
            "@type": "ImageObject",
            "url": "https://seusite.com/logo.png"
        }
    }
}
</script>
```

### BlogPosting

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Título do Post",
    "image": "https://blog.com/imagem.jpg",
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-20",
    "author": {
        "@type": "Person",
        "name": "Autor do Blog"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Nome do Blog",
        "logo": {
            "@type": "ImageObject",
            "url": "https://blog.com/logo.png"
        }
    },
    "mainEntityOfPage": "https://blog.com/post-url/"
}
</script>
```

---

## 🛒 Schema Product

### Produto Simples

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Nome do Produto",
    "description": "Descrição detalhada do produto",
    "image": [
        "https://loja.com/produto-1.jpg",
        "https://loja.com/produto-2.jpg",
        "https://loja.com/produto-3.jpg"
    ],
    "sku": "SKU123456",
    "mpn": "MPN123456",
    "gtin13": "1234567890123",
    "brand": {
        "@type": "Brand",
        "name": "Nome da Marca"
    },
    "offers": {
        "@type": "Offer",
        "url": "https://loja.com/produto/",
        "priceCurrency": "BRL",
        "price": 199.99,
        "priceValidUntil": "2024-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "seller": {
            "@type": "Organization",
            "name": "Nome da Loja"
        },
        "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
                "@type": "MonetaryAmount",
                "value": 15.00,
                "currency": "BRL"
            },
            "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                    "@type": "QuantitativeValue",
                    "minValue": 1,
                    "maxValue": 2,
                    "unitCode": "DAY"
                },
                "transitTime": {
                    "@type": "QuantitativeValue",
                    "minValue": 3,
                    "maxValue": 7,
                    "unitCode": "DAY"
                }
            },
            "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "BR"
            }
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.5,
        "reviewCount": 150,
        "bestRating": 5,
        "worstRating": 1
    },
    "review": [
        {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": 5,
                "bestRating": 5
            },
            "author": {
                "@type": "Person",
                "name": "Maria Silva"
            },
            "reviewBody": "Excelente produto! Superou minhas expectativas.",
            "datePublished": "2024-01-10"
        }
    ]
}
</script>
```

### Valores de Availability

```javascript
// Disponibilidade do produto
"https://schema.org/InStock"           // Em estoque
"https://schema.org/OutOfStock"        // Esgotado
"https://schema.org/PreOrder"          // Pré-venda
"https://schema.org/BackOrder"         // Sob encomenda
"https://schema.org/LimitedAvailability" // Estoque limitado
"https://schema.org/SoldOut"           // Esgotado definitivamente
"https://schema.org/Discontinued"      // Descontinuado
```

---

## 📍 Schema LocalBusiness

### Negócio Local

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Restaurante Bom Sabor",
    "image": [
        "https://restaurante.com/foto1.jpg",
        "https://restaurante.com/foto2.jpg"
    ],
    "url": "https://restaurante.com",
    "telephone": "+55-11-3333-3333",
    "email": "contato@restaurante.com",
    "priceRange": "$$",
    "servesCuisine": ["Italiana", "Brasileira"],
    "acceptsReservations": true,
    "menu": "https://restaurante.com/cardapio",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua das Flores, 123",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "01234-567",
        "addressCountry": "BR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": -23.5505,
        "longitude": -46.6333
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "11:00",
            "closes": "23:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday"],
            "opens": "12:00",
            "closes": "00:00"
        }
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.7,
        "reviewCount": 523
    },
    "sameAs": [
        "https://facebook.com/restaurante",
        "https://instagram.com/restaurante"
    ]
}
</script>
```

### Tipos de LocalBusiness

| Tipo | Uso |
|------|-----|
| `Restaurant` | Restaurantes |
| `HealthAndBeautyBusiness` | Salões, spas |
| `LegalService` | Escritórios de advocacia |
| `Dentist` | Consultórios odontológicos |
| `MedicalBusiness` | Clínicas médicas |
| `AutoRepair` | Oficinas mecânicas |
| `Store` | Lojas em geral |
| `RealEstateAgent` | Imobiliárias |
| `FinancialService` | Bancos, contabilidade |
| `TravelAgency` | Agências de viagem |

---

## ❓ Schema FAQ

### FAQPage

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Qual é o prazo de entrega?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "O prazo de entrega varia de 3 a 7 dias úteis, dependendo da sua localização. Para capitais e regiões metropolitanas, o prazo é de 3 dias úteis. Para demais regiões, até 7 dias úteis."
            }
        },
        {
            "@type": "Question",
            "name": "Como faço para trocar um produto?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Você pode solicitar a troca em até 30 dias após o recebimento. Basta acessar sua conta, ir em 'Meus Pedidos' e clicar em 'Solicitar Troca'. Nossa equipe entrará em contato para agendar a coleta."
            }
        },
        {
            "@type": "Question",
            "name": "Vocês oferecem frete grátis?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim! Oferecemos frete grátis para compras acima de R$ 200,00 para todo o Brasil. Para compras menores, o frete é calculado com base no CEP de destino."
            }
        },
        {
            "@type": "Question",
            "name": "Quais formas de pagamento são aceitas?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Aceitamos cartões de crédito (Visa, Mastercard, Elo, American Express), boleto bancário, PIX e transferência bancária. Parcelamos em até 12x sem juros no cartão."
            }
        }
    ]
}
</script>
```

### Resultado no Google

```
┌──────────────────────────────────────────────┐
│ Título da Página                             │
│ https://seusite.com/faq                      │
│ Descrição da página...                       │
│                                              │
│ ▼ Qual é o prazo de entrega?                 │
│ ▼ Como faço para trocar um produto?          │
│ ▼ Vocês oferecem frete grátis?               │
│ ▼ Quais formas de pagamento são aceitas?     │
└──────────────────────────────────────────────┘
```

---

## 🍞 Schema BreadcrumbList

### Navegação Estrutural

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://seusite.com/"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Produtos",
            "item": "https://seusite.com/produtos/"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Eletrônicos",
            "item": "https://seusite.com/produtos/eletronicos/"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Smartphones",
            "item": "https://seusite.com/produtos/eletronicos/smartphones/"
        }
    ]
}
</script>

<!-- HTML correspondente -->
<nav aria-label="Breadcrumb">
    <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/produtos/">Produtos</a></li>
        <li><a href="/produtos/eletronicos/">Eletrônicos</a></li>
        <li><span aria-current="page">Smartphones</span></li>
    </ol>
</nav>
```

---

## 📚 Schema Course

### Curso Online

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Desenvolvimento Web Completo",
    "description": "Aprenda HTML, CSS, JavaScript e frameworks modernos do zero ao avançado. Curso completo com projetos práticos.",
    "url": "https://cursoonline.com/desenvolvimento-web/",
    "image": "https://cursoonline.com/curso-imagem.jpg",
    "provider": {
        "@type": "Organization",
        "name": "Academia de Código",
        "url": "https://cursoonline.com",
        "sameAs": "https://facebook.com/academiadeCodigo"
    },
    "instructor": {
        "@type": "Person",
        "name": "Prof. João Silva",
        "description": "Desenvolvedor Full Stack com 15 anos de experiência",
        "image": "https://cursoonline.com/joao-silva.jpg"
    },
    "courseCode": "DEV-WEB-001",
    "educationalCredentialAwarded": "Certificado de Conclusão",
    "coursePrerequisites": "Nenhum conhecimento prévio necessário",
    "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT40H",
        "startDate": "2024-02-01",
        "endDate": "2024-06-30"
    },
    "offers": {
        "@type": "Offer",
        "price": 297.00,
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01",
        "url": "https://cursoonline.com/matricula/"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.9,
        "reviewCount": 1250,
        "bestRating": 5
    },
    "totalHistoricalEnrollment": 15000,
    "numberOfCredits": 40,
    "occupationalCredentialAwarded": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Certificate"
    }
}
</script>
```

---

## 🎉 Schema Event

### Evento

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Conferência de Tecnologia 2024",
    "description": "A maior conferência de tecnologia da América Latina com palestrantes internacionais.",
    "image": "https://evento.com/banner.jpg",
    "url": "https://evento.com/conferencia-2024/",
    "startDate": "2024-06-15T09:00:00-03:00",
    "endDate": "2024-06-17T18:00:00-03:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
        "@type": "Place",
        "name": "Centro de Convenções",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Brasil, 1000",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "01310-100",
            "addressCountry": "BR"
        }
    },
    "performer": [
        {
            "@type": "Person",
            "name": "Palestrante Famoso"
        },
        {
            "@type": "Organization",
            "name": "Grupo Tech"
        }
    ],
    "organizer": {
        "@type": "Organization",
        "name": "TechEvents Brasil",
        "url": "https://techevents.com.br"
    },
    "offers": {
        "@type": "Offer",
        "name": "Ingresso Geral",
        "price": 500.00,
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01T00:00:00-03:00",
        "url": "https://evento.com/ingressos/"
    }
}
</script>
```

### Evento Online

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Webinar: Tendências de IA",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": {
        "@type": "VirtualLocation",
        "url": "https://zoom.us/j/123456789"
    },
    "startDate": "2024-02-15T19:00:00-03:00",
    "endDate": "2024-02-15T21:00:00-03:00",
    "offers": {
        "@type": "Offer",
        "price": 0,
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock"
    }
}
</script>
```

---

## 🍳 Schema Recipe

### Receita

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Bolo de Chocolate Fácil",
    "description": "Receita simples de bolo de chocolate fofinho e delicioso.",
    "image": [
        "https://receitas.com/bolo-chocolate-1x1.jpg",
        "https://receitas.com/bolo-chocolate-4x3.jpg",
        "https://receitas.com/bolo-chocolate-16x9.jpg"
    ],
    "author": {
        "@type": "Person",
        "name": "Chef Maria"
    },
    "datePublished": "2024-01-10",
    "prepTime": "PT20M",
    "cookTime": "PT40M",
    "totalTime": "PT60M",
    "recipeYield": "12 fatias",
    "recipeCategory": "Sobremesa",
    "recipeCuisine": "Brasileira",
    "keywords": "bolo, chocolate, sobremesa, fácil",
    "nutrition": {
        "@type": "NutritionInformation",
        "calories": "250 kcal",
        "fatContent": "12g",
        "carbohydrateContent": "35g",
        "proteinContent": "4g"
    },
    "recipeIngredient": [
        "2 xícaras de farinha de trigo",
        "1 xícara de açúcar",
        "1/2 xícara de chocolate em pó",
        "3 ovos",
        "1/2 xícara de óleo",
        "1 xícara de leite",
        "1 colher de fermento"
    ],
    "recipeInstructions": [
        {
            "@type": "HowToStep",
            "name": "Preparar ingredientes secos",
            "text": "Em uma tigela grande, misture a farinha, o açúcar e o chocolate em pó.",
            "image": "https://receitas.com/passo1.jpg"
        },
        {
            "@type": "HowToStep",
            "name": "Adicionar líquidos",
            "text": "Adicione os ovos, o óleo e o leite. Misture bem até formar uma massa homogênea.",
            "image": "https://receitas.com/passo2.jpg"
        },
        {
            "@type": "HowToStep",
            "name": "Adicionar fermento",
            "text": "Por último, adicione o fermento e misture delicadamente.",
            "image": "https://receitas.com/passo3.jpg"
        },
        {
            "@type": "HowToStep",
            "name": "Assar",
            "text": "Despeje em uma forma untada e leve ao forno preaquecido a 180°C por 40 minutos.",
            "image": "https://receitas.com/passo4.jpg"
        }
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.8,
        "ratingCount": 523
    },
    "video": {
        "@type": "VideoObject",
        "name": "Como Fazer Bolo de Chocolate",
        "description": "Vídeo passo a passo da receita",
        "thumbnailUrl": "https://receitas.com/video-thumb.jpg",
        "contentUrl": "https://receitas.com/video.mp4",
        "uploadDate": "2024-01-10",
        "duration": "PT5M"
    }
}
</script>
```

---

## ⭐ Schema Review

### Review Único

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
        "@type": "Product",
        "name": "Smartphone XYZ",
        "image": "https://loja.com/smartphone.jpg"
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4,
        "bestRating": 5,
        "worstRating": 1
    },
    "author": {
        "@type": "Person",
        "name": "Carlos Reviewer"
    },
    "datePublished": "2024-01-15",
    "reviewBody": "Produto excelente! A câmera é incrível e a bateria dura o dia todo. Único ponto negativo é o preço um pouco alto.",
    "publisher": {
        "@type": "Organization",
        "name": "Tech Reviews Brasil"
    }
}
</script>
```

### Aggregate Rating

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Smartphone XYZ",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.5,
        "reviewCount": 1250,
        "bestRating": 5,
        "worstRating": 1
    }
}
</script>
```

---

## 📝 Schema HowTo

### Tutorial Passo a Passo

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Trocar a Senha do Email",
    "description": "Aprenda a trocar sua senha de email em 5 passos simples.",
    "image": "https://tutorial.com/troca-senha.jpg",
    "totalTime": "PT5M",
    "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "BRL",
        "value": 0
    },
    "supply": [],
    "tool": [
        {
            "@type": "HowToTool",
            "name": "Computador ou smartphone"
        },
        {
            "@type": "HowToTool",
            "name": "Conexão com internet"
        }
    ],
    "step": [
        {
            "@type": "HowToStep",
            "position": 1,
            "name": "Acessar configurações",
            "text": "Abra seu email e clique em 'Configurações' no canto superior direito.",
            "image": "https://tutorial.com/passo1.jpg",
            "url": "https://tutorial.com/troca-senha#passo-1"
        },
        {
            "@type": "HowToStep",
            "position": 2,
            "name": "Ir para segurança",
            "text": "No menu de configurações, selecione a opção 'Segurança'.",
            "image": "https://tutorial.com/passo2.jpg",
            "url": "https://tutorial.com/troca-senha#passo-2"
        },
        {
            "@type": "HowToStep",
            "position": 3,
            "name": "Clicar em alterar senha",
            "text": "Encontre a seção 'Senha' e clique em 'Alterar'.",
            "image": "https://tutorial.com/passo3.jpg",
            "url": "https://tutorial.com/troca-senha#passo-3"
        },
        {
            "@type": "HowToStep",
            "position": 4,
            "name": "Inserir nova senha",
            "text": "Digite sua senha atual, depois a nova senha duas vezes.",
            "image": "https://tutorial.com/passo4.jpg",
            "url": "https://tutorial.com/troca-senha#passo-4"
        },
        {
            "@type": "HowToStep",
            "position": 5,
            "name": "Confirmar alteração",
            "text": "Clique em 'Salvar' para confirmar a alteração.",
            "image": "https://tutorial.com/passo5.jpg",
            "url": "https://tutorial.com/troca-senha#passo-5"
        }
    ]
}
</script>
```

---

## 🎬 Schema VideoObject

### Vídeo

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Como Aprender JavaScript em 2024",
    "description": "Guia completo para iniciantes aprenderem JavaScript do zero.",
    "thumbnailUrl": [
        "https://seusite.com/video-thumb-1x1.jpg",
        "https://seusite.com/video-thumb-4x3.jpg",
        "https://seusite.com/video-thumb-16x9.jpg"
    ],
    "uploadDate": "2024-01-15T08:00:00+00:00",
    "duration": "PT15M30S",
    "contentUrl": "https://seusite.com/videos/javascript-2024.mp4",
    "embedUrl": "https://youtube.com/embed/abc123",
    "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": { "@type": "WatchAction" },
        "userInteractionCount": 50000
    },
    "regionsAllowed": "BR,PT",
    "hasPart": [
        {
            "@type": "Clip",
            "name": "Introdução",
            "startOffset": 0,
            "endOffset": 60,
            "url": "https://youtube.com/watch?v=abc123&t=0"
        },
        {
            "@type": "Clip",
            "name": "Variáveis",
            "startOffset": 60,
            "endOffset": 300,
            "url": "https://youtube.com/watch?v=abc123&t=60"
        }
    ],
    "publication": {
        "@type": "BroadcastEvent",
        "isLiveBroadcast": false,
        "startDate": "2024-01-15T08:00:00+00:00"
    }
}
</script>
```

---

## 🔗 Múltiplos Schemas

### Combinando Schemas na Mesma Página

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": "https://seusite.com/#website",
            "name": "Meu Site",
            "url": "https://seusite.com",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://seusite.com/busca?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@type": "Organization",
            "@id": "https://seusite.com/#organization",
            "name": "Minha Empresa",
            "url": "https://seusite.com",
            "logo": "https://seusite.com/logo.png",
            "sameAs": [
                "https://facebook.com/minhaempresa",
                "https://instagram.com/minhaempresa"
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://seusite.com/pagina/#webpage",
            "url": "https://seusite.com/pagina/",
            "name": "Título da Página",
            "isPartOf": { "@id": "https://seusite.com/#website" },
            "about": { "@id": "https://seusite.com/#organization" }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://seusite.com/pagina/#breadcrumb",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://seusite.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Página",
                    "item": "https://seusite.com/pagina/"
                }
            ]
        }
    ]
}
</script>
```

---

## ✅ Validação e Testes

### Ferramentas de Teste

| Ferramenta | URL | Uso |
|------------|-----|-----|
| Rich Results Test | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) | Verificar eligibilidade para rich snippets |
| Schema Markup Validator | [validator.schema.org](https://validator.schema.org/) | Validar sintaxe Schema.org |
| Google Search Console | [search.google.com/search-console](https://search.google.com/search-console) | Monitorar erros em produção |
| JSON-LD Playground | [json-ld.org/playground](https://json-ld.org/playground/) | Testar e debugar JSON-LD |

### Processo de Validação

```
1. Escreva o Schema
      │
      ▼
2. Valide no Schema Validator
      │
      ▼
3. Teste no Rich Results Test
      │
      ▼
4. Implemente no site
      │
      ▼
5. Monitore no Search Console
```

---

## ❌ Erros Comuns

### Erros de Sintaxe

```javascript
// ❌ Falta vírgula
{
    "@type": "Product"
    "name": "Produto"  // Erro!
}

// ✅ Correto
{
    "@type": "Product",
    "name": "Produto"
}

// ❌ Vírgula extra no final
{
    "@type": "Product",
    "name": "Produto",  // Erro!
}

// ✅ Correto
{
    "@type": "Product",
    "name": "Produto"
}
```

### Erros de Dados

```javascript
// ❌ Preço como string
"price": "199,99"

// ✅ Preço como número
"price": 199.99

// ❌ Data em formato errado
"datePublished": "15/01/2024"

// ✅ Data em ISO 8601
"datePublished": "2024-01-15T08:00:00+00:00"

// ❌ URL relativa
"image": "/imagem.jpg"

// ✅ URL absoluta
"image": "https://seusite.com/imagem.jpg"
```

### Erros de Implementação

| Erro | Problema | Solução |
|------|----------|---------|
| Schema invisível | Dados não correspondem ao conteúdo visível | Alinhar schema com conteúdo |
| Campos obrigatórios faltando | Schema incompleto | Adicionar campos necessários |
| Tipo errado | @type não corresponde ao conteúdo | Usar tipo correto |
| Duplicação | Mesmo schema múltiplas vezes | Usar apenas uma vez |
| Review sem itemReviewed | Rating flutuante | Sempre vincular ao item |

---

## 📚 Recursos e Documentação

### Documentação Oficial

| Recurso | Link |
|---------|------|
| Schema.org | [schema.org](https://schema.org/) |
| Google Structured Data | [developers.google.com/search/docs/appearance/structured-data](https://developers.google.com/search/docs/appearance/structured-data) |
| Rich Results Gallery | [developers.google.com/search/docs/appearance/structured-data/search-gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) |

### Geradores de Schema

| Ferramenta | Link |
|------------|------|
| Merkle Schema Generator | [technicalseo.com/tools/schema-markup-generator](https://technicalseo.com/tools/schema-markup-generator/) |
| Hall Analysis Schema Generator | [hallanalysis.com/json-ld-generator](https://www.hallanalysis.com/json-ld-generator/) |
| Schema.dev | [schema.dev](https://schema.dev/) |

---

## ⏭️ Próximo Passo

Agora aprenda sobre padrões web e as consequências de não segui-los:

➡️ [06-padroes-web.md - Padrões Web e Consequências](06-padroes-web.md)

---

<p align="center">
  <strong>📊 Você completou o guia de Schema Markup!</strong><br>
  <a href="../README.md">← Voltar ao Índice</a>
</p>

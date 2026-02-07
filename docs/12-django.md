# 🎸 Django - Guia Completo

[![Django](https://img.shields.io/badge/Django-5.x-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)

> 📚 Guia completo de Django - Framework web em Python para desenvolvimento rápido e seguro.

---

## 📋 Índice

1. [O que é Django?](#-o-que-é-django)
2. [Por que usar Django?](#-por-que-usar-django)
3. [Configurando o Ambiente](#-configurando-o-ambiente)
4. [Estrutura de Projeto](#-estrutura-de-projeto)
5. [Models (ORM)](#-models-orm)
6. [Views](#-views)
7. [Templates](#-templates)
8. [URLs](#-urls)
9. [Forms](#-forms)
10. [Admin Panel](#-admin-panel)
11. [Autenticação](#-autenticação)
12. [Django REST Framework](#-django-rest-framework)
13. [Static Files](#-static-files)
14. [Migrations](#-migrations)
15. [Testes](#-testes)
16. [Deploy](#-deploy)
17. [Boas Práticas](#-boas-práticas)
18. [Recursos e Documentação](#-recursos-e-documentação)

---

## 🌐 O que é Django?

**Django** é um framework web Python de alto nível que incentiva o desenvolvimento rápido e design limpo e pragmático.

### Características Principais

| Característica | Descrição |
|----------------|-----------|
| **Batteries Included** | Tudo que você precisa incluído |
| **ORM Poderoso** | Banco de dados sem SQL |
| **Admin Automático** | Painel administrativo gerado |
| **Segurança** | Proteção contra CSRF, XSS, SQL Injection |
| **Escalável** | Instagram, Spotify usam Django |
| **MTV Pattern** | Model-Template-View (similar a MVC) |

### Django vs Flask vs FastAPI

| Aspecto | Django | Flask | FastAPI |
|---------|--------|-------|---------|
| Tipo | Full-stack | Microframework | Microframework |
| Curva de Aprendizado | Média | Fácil | Fácil |
| Admin | Incluído | Extensão | Não |
| ORM | Sim (Django ORM) | SQLAlchemy | SQLAlchemy |
| Performance | Boa | Boa | Excelente |
| Async | Parcial | Não | Sim |

---

## 💡 Por que usar Django?

### Vantagens

| Vantagem | Benefício |
|----------|-----------|
| **Desenvolvimento Rápido** | Menos código, mais features |
| **Admin Grátis** | Painel administrativo automático |
| **Segurança Robusta** | Proteções integradas |
| **ORM Completo** | Trabalhe com banco sem SQL |
| **Comunidade Grande** | Milhares de pacotes |
| **Documentação Excelente** | Em português inclusive |

### Empresas que usam Django

- Instagram
- Spotify
- Pinterest
- NASA
- National Geographic
- Mozilla

---

## 🛠️ Configurando o Ambiente

### Instalação

```bash
# Criar ambiente virtual
python -m venv venv

# Ativar (Windows)
venv\Scripts\activate

# Ativar (Linux/macOS)
source venv/bin/activate

# Instalar Django
pip install django

# Verificar instalação
python -m django --version
```

### Criar Projeto

```bash
# Criar projeto
django-admin startproject meu_projeto

# Entrar na pasta
cd meu_projeto

# Criar app
python manage.py startapp blog

# Rodar servidor
python manage.py runserver

# Acesse: http://127.0.0.1:8000
```

---

## 📁 Estrutura de Projeto

```
meu_projeto/
├── manage.py              # CLI do Django
├── meu_projeto/           # Configurações do projeto
│   ├── __init__.py
│   ├── settings.py        # Configurações
│   ├── urls.py            # URLs raiz
│   ├── asgi.py
│   └── wsgi.py
└── blog/                  # App
    ├── migrations/
    ├── __init__.py
    ├── admin.py           # Admin config
    ├── apps.py
    ├── models.py          # Modelos (banco de dados)
    ├── tests.py           # Testes
    └── views.py           # Views (lógica)
```

### Registrar App

```python
# settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'blog',  # Seu app
]
```

---

## 🗄️ Models (ORM)

### Model Básico

```python
# blog/models.py
from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    titulo = models.CharField(max_length=200)
    conteudo = models.TextField()
    autor = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    publicado = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'

    def __str__(self):
        return self.titulo
```

### Tipos de Campos

| Campo | Uso |
|-------|-----|
| `CharField` | Texto curto (max_length obrigatório) |
| `TextField` | Texto longo |
| `IntegerField` | Números inteiros |
| `FloatField` | Números decimais |
| `BooleanField` | True/False |
| `DateField` | Data |
| `DateTimeField` | Data e hora |
| `EmailField` | Email |
| `URLField` | URL |
| `ImageField` | Imagem (precisa Pillow) |
| `FileField` | Arquivo |

### Relacionamentos

```python
# One-to-Many
class Categoria(models.Model):
    nome = models.CharField(max_length=100)

class Produto(models.Model):
    nome = models.CharField(max_length=200)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)

# Many-to-Many
class Aluno(models.Model):
    nome = models.CharField(max_length=100)
    cursos = models.ManyToManyField('Curso')

class Curso(models.Model):
    nome = models.CharField(max_length=100)

# One-to-One
class Perfil(models.Model):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField()
    foto = models.ImageField(upload_to='perfis/')
```

### Queries (ORM)

```python
# CREATE
post = Post.objects.create(
    titulo="Meu Post",
    conteudo="Conteúdo aqui",
    autor=usuario
)

# READ (all)
posts = Post.objects.all()

# READ (filter)
posts_publicados = Post.objects.filter(publicado=True)
posts_usuario = Post.objects.filter(autor__username='joao')

# READ (get um único)
post = Post.objects.get(id=1)
post = Post.objects.get(titulo="Meu Post")

# UPDATE
post = Post.objects.get(id=1)
post.titulo = "Novo Título"
post.save()

# UPDATE (múltiplos)
Post.objects.filter(publicado=False).update(publicado=True)

# DELETE
post = Post.objects.get(id=1)
post.delete()

# DELETE (múltiplos)
Post.objects.filter(created_at__year=2020).delete()

# ORDENAR
Post.objects.all().order_by('-created_at')  # Mais recentes

# LIMITAR
Post.objects.all()[:5]  # Primeiros 5

# CONTAR
Post.objects.filter(publicado=True).count()

# EXISTS
Post.objects.filter(titulo="Test").exists()

# EXCLUDE
Post.objects.exclude(publicado=False)

# VALORES ÚNICOS
Categoria.objects.values_list('nome', flat=True).distinct()
```

---

## 👁️ Views

### Function-Based Views (FBV)

```python
# blog/views.py
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Post

def index(request):
    posts = Post.objects.filter(publicado=True)
    return render(request, 'blog/index.html', {'posts': posts})

def post_detail(request, post_id):
    post = get_object_or_404(Post, id=post_id, publicado=True)
    return render(request, 'blog/post_detail.html', {'post': post})

def criar_post(request):
    if request.method == 'POST':
        titulo = request.POST['titulo']
        conteudo = request.POST['conteudo']
        Post.objects.create(
            titulo=titulo,
            conteudo=conteudo,
            autor=request.user
        )
        return redirect('index')
    return render(request, 'blog/criar_post.html')
```

### Class-Based Views (CBV)

```python
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Post

class PostListView(ListView):
    model = Post
    template_name = 'blog/index.html'
    context_object_name = 'posts'
    paginate_by = 10

    def get_queryset(self):
        return Post.objects.filter(publicado=True)

class PostDetailView(DetailView):
    model = Post
    template_name = 'blog/post_detail.html'
    context_object_name = 'post'

class PostCreateView(CreateView):
    model = Post
    fields = ['titulo', 'conteudo']
    template_name = 'blog/post_form.html'
    success_url = reverse_lazy('post-list')

    def form_valid(self, form):
        form.instance.autor = self.request.user
        return super().form_valid(form)

class PostUpdateView(UpdateView):
    model = Post
    fields = ['titulo', 'conteudo']
    template_name = 'blog/post_form.html'

class PostDeleteView(DeleteView):
    model = Post
    success_url = reverse_lazy('post-list')
```

---

## 🎨 Templates

### Template Básico

```html
<!-- blog/templates/blog/index.html -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Blog</title>
</head>
<body>
    <h1>Posts do Blog</h1>

    {% for post in posts %}
        <article>
            <h2>{{ post.titulo }}</h2>
            <p>Por {{ post.autor.username }} em {{ post.created_at|date:"d/m/Y" }}</p>
            <p>{{ post.conteudo|truncatewords:30 }}</p>
            <a href="{% url 'post-detail' post.id %}">Ler mais</a>
        </article>
    {% empty %}
        <p>Nenhum post disponível.</p>
    {% endfor %}
</body>
</html>
```

### Template Inheritance

```html
<!-- base.html -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}Meu Site{% endblock %}</title>
    {% load static %}
    <link rel="stylesheet" href="{% static 'css/style.css' %}">
</head>
<body>
    <nav>
        <a href="{% url 'index' %}">Home</a>
        <a href="{% url 'sobre' %}">Sobre</a>
    </nav>

    <main>
        {% block content %}
        {% endblock %}
    </main>

    <footer>
        <p>&copy; 2026 Meu Site</p>
    </footer>
</body>
</html>
```

```html
<!-- blog/index.html -->
{% extends 'base.html' %}

{% block title %}Blog - {{ block.super }}{% endblock %}

{% block content %}
    <h1>Posts do Blog</h1>
    {% for post in posts %}
        <article>
            <h2>{{ post.titulo }}</h2>
            <p>{{ post.conteudo|truncatewords:30 }}</p>
        </article>
    {% endfor %}
{% endblock %}
```

### Template Tags e Filters

```django
{# Comentário #}

{# Variáveis #}
{{ variavel }}
{{ post.titulo }}
{{ user.username }}

{# Filters #}
{{ post.created_at|date:"d/m/Y" }}
{{ post.conteudo|truncatewords:30 }}
{{ texto|upper }}
{{ texto|lower }}
{{ texto|title }}
{{ lista|length }}

{# Tags #}
{% if user.is_authenticated %}
    <p>Olá, {{ user.username }}!</p>
{% else %}
    <p>Faça login</p>
{% endif %}

{% for item in lista %}
    {{ item }}
{% empty %}
    <p>Lista vazia</p>
{% endfor %}

{% url 'nome-da-url' %}
{% url 'post-detail' post.id %}

{% load static %}
{% static 'css/style.css' %}

{% include 'partials/header.html' %}
```

---

## 🔗 URLs

### URL Configuration

```python
# meu_projeto/urls.py (raiz)
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),
]
```

```python
# blog/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('post/<int:post_id>/', views.post_detail, name='post-detail'),
    path('criar/', views.criar_post, name='criar-post'),

    # CBV
    path('posts/', views.PostListView.as_view(), name='post-list'),
    path('posts/<int:pk>/', views.PostDetailView.as_view(), name='post-detail'),
    path('posts/novo/', views.PostCreateView.as_view(), name='post-create'),
]
```

---

## 📝 Forms

### Django Forms

```python
# blog/forms.py
from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['titulo', 'conteudo', 'publicado']
        widgets = {
            'titulo': forms.TextInput(attrs={'class': 'form-control'}),
            'conteudo': forms.Textarea(attrs={'class': 'form-control', 'rows': 5}),
        }

    def clean_titulo(self):
        titulo = self.cleaned_data.get('titulo')
        if len(titulo) < 5:
            raise forms.ValidationError("Título muito curto")
        return titulo
```

### View com Form

```python
from django.shortcuts import render, redirect
from .forms import PostForm

def criar_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.autor = request.user
            post.save()
            return redirect('post-detail', post.id)
    else:
        form = PostForm()

    return render(request, 'blog/post_form.html', {'form': form})
```

### Template com Form

```html
<form method="post">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Salvar</button>
</form>

<!-- Ou customizado -->
<form method="post">
    {% csrf_token %}
    <div>
        <label for="{{ form.titulo.id_for_label }}">Título:</label>
        {{ form.titulo }}
        {% if form.titulo.errors %}
            <span class="error">{{ form.titulo.errors }}</span>
        {% endif %}
    </div>
    <button type="submit">Salvar</button>
</form>
```

---

## ⚙️ Admin Panel

### Registrar Model

```python
# blog/admin.py
from django.contrib import admin
from .models import Post, Categoria

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['titulo', 'autor', 'created_at', 'publicado']
    list_filter = ['publicado', 'created_at', 'autor']
    search_fields = ['titulo', 'conteudo']
    prepopulated_fields = {'slug': ('titulo',)}  # Se tiver slug
    date_hierarchy = 'created_at'
    ordering = ['-created_at']

admin.site.register(Categoria)
```

### Criar Superuser

```bash
python manage.py createsuperuser

# Preencha:
# - Username
# - Email
# - Password

# Acesse: http://127.0.0.1:8000/admin/
```

---

## 🔐 Autenticação

### Login/Logout

```python
# urls.py
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]
```

### Registro de Usuário

```python
# views.py
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('index')
    else:
        form = UserCreationForm()
    return render(request, 'register.html', {'form': form})
```

### Proteger Views

```python
from django.contrib.auth.decorators import login_required

@login_required
def criar_post(request):
    # ...
    pass

# CBV
from django.contrib.auth.mixins import LoginRequiredMixin

class PostCreateView(LoginRequiredMixin, CreateView):
    # ...
    pass
```

---

## 🌐 Django REST Framework

### Instalação

```bash
pip install djangorestframework
```

```python
# settings.py
INSTALLED_APPS = [
    # ...
    'rest_framework',
]
```

### Serializer

```python
# blog/serializers.py
from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'titulo', 'conteudo', 'autor', 'created_at']
```

### API View

```python
# blog/views.py
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
```

### URLs

```python
# urls.py
from rest_framework.routers import DefaultRouter
from blog.views import PostViewSet

router = DefaultRouter()
router.register('posts', PostViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
```

---

## 📂 Static Files

### Configuração

```python
# settings.py
STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']
STATIC_ROOT = BASE_DIR / 'staticfiles'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
```

### Usar no Template

```html
{% load static %}

<link rel="stylesheet" href="{% static 'css/style.css' %}">
<img src="{% static 'images/logo.png' %}" alt="Logo">
```

### Coletar Static

```bash
python manage.py collectstatic
```

---

## 🔄 Migrations

```bash
# Criar migrations
python manage.py makemigrations

# Aplicar migrations
python manage.py migrate

# Ver SQL de uma migration
python manage.py sqlmigrate blog 0001

# Mostrar migrations
python manage.py showmigrations

# Reverter migration
python manage.py migrate blog 0002  # Volta para 0002
```

---

## 🧪 Testes

```python
# blog/tests.py
from django.test import TestCase
from django.contrib.auth.models import User
from .models import Post

class PostModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            password='12345'
        )
        self.post = Post.objects.create(
            titulo='Test Post',
            conteudo='Test content',
            autor=self.user
        )

    def test_post_criacao(self):
        self.assertEqual(self.post.titulo, 'Test Post')
        self.assertEqual(self.post.autor.username, 'testuser')

    def test_post_str(self):
        self.assertEqual(str(self.post), 'Test Post')

class PostViewTest(TestCase):
    def test_index_view(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
```

```bash
# Rodar testes
python manage.py test

# Teste específico
python manage.py test blog.tests.PostModelTest
```

---

## 🚀 Deploy

### Preparar para Deploy

```python
# settings.py
DEBUG = False
ALLOWED_HOSTS = ['seudominio.com']

SECRET_KEY = os.environ.get('SECRET_KEY')

# Banco de Dados (PostgreSQL)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mydb',
        'USER': 'myuser',
        'PASSWORD': os.environ.get('DB_PASSWORD'),
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

### requirements.txt

```bash
pip freeze > requirements.txt
```

### Heroku

```bash
# Instalar Heroku CLI
heroku login
heroku create meu-app
git push heroku main
heroku run python manage.py migrate
heroku run python manage.py createsuperuser
```

---

## ✅ Boas Práticas

| Prática | Benefício |
|---------|-----------|
| Use virtual environments | Isolar dependências |
| `.gitignore` para `db.sqlite3` | Não versionar banco |
| Variáveis de ambiente | Segurança |
| Migrations sempre | Rastrear mudanças no banco |
| Testes automáticos | Prevenir regressões |
| CBV quando possível | Menos código |

---

## 📚 Recursos e Documentação

| Recurso | Link |
|---------|------|
| Documentação Oficial | [djangoproject.com](https://www.djangoproject.com/) |
| Django REST Framework | [django-rest-framework.org](https://www.django-rest-framework.org/) |
| Django Packages | [djangopackages.org](https://djangopackages.org/) |
| Awesome Django | [github.com/wsvincent/awesome-django](https://github.com/wsvincent/awesome-django) |

---

## ⏭️ Próximo Passo

Aprenda Flutter para desenvolvimento mobile multiplataforma:

➡️ [13-flutter.md - Guia Completo de Flutter](13-flutter.md)

---

<p align="center">
  <strong>🎸 Você completou o guia de Django!</strong><br>
  <a href="../README.md">← Voltar ao Índice</a>
</p>

# 🦋 Flutter - Guia Completo

[![Flutter](https://img.shields.io/badge/Flutter-3.x-02569B?style=for-the-badge&logo=flutter&logoColor=white)](https://flutter.dev/)

> 📚 Guia completo de Flutter - Framework para criar apps nativos multiplataforma.

---

## 📋 Índice

1. [O que é Flutter?](#-o-que-é-flutter)
2. [Por que usar Flutter?](#-por-que-usar-flutter)
3. [Configurando o Ambiente](#-configurando-o-ambiente)
4. [Estrutura de Projeto](#-estrutura-de-projeto)
5. [Widgets](#-widgets)
6. [Layouts](#-layouts)
7. [State Management](#-state-management)
8. [Navegação](#-navegação)
9. [Formulários](#-formulários)
10. [HTTP e APIs](#-http-e-apis)
11. [Persistência de Dados](#-persistência-de-dados)
12. [Animações](#-animações)
13. [Platform Specific Code](#-platform-specific-code)
14. [Packages Essenciais](#-packages-essenciais)
15. [Testes](#-testes)
16. [Build e Deploy](#-build-e-deploy)
17. [Boas Práticas](#-boas-práticas)
18. [Recursos e Documentação](#-recursos-e-documentação)

---

## 🌐 O que é Flutter?

**Flutter** é um framework UI do Google para criar aplicações nativas compiladas para mobile, web e desktop a partir de uma única base de código.

### Características Principais

| Característica | Descrição |
|----------------|-----------|
| **Cross-platform** | iOS, Android, Web, Desktop |
| **Hot Reload** | Veja mudanças instantaneamente |
| **Widget-based** | Tudo é widget |
| **Performance Nativa** | Não usa ponte JavaScript |
| **Dart** | Linguagem moderna e rápida |
| **Material + Cupertino** | UI para Android e iOS |

### Flutter vs React Native vs Native

| Aspecto | Flutter | React Native | Native |
|---------|---------|--------------|--------|
| Linguagem | Dart | JavaScript | Kotlin/Swift |
| Performance | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Curva de Aprendizado | Média | Fácil | Difícil |
| Hot Reload | ✅ | ✅ | ❌ |
| Multiplataforma | ✅ | ✅ | ❌ |
| UI Customizado | Excelente | Bom | Excelente |

---

## 💡 Por que usar Flutter?

### Vantagens

| Vantagem | Benefício |
|----------|-----------|
| **Uma Codebase** | iOS + Android + Web + Desktop |
| **Performance Nativa** | 60-120 FPS |
| **Hot Reload** | Desenvolvimento rápido |
| **UI Flexível** | Widgets customizáveis |
| **Google Support** | Mantido pelo Google |
| **Comunidade Crescente** | Pacotes e suporte |

### Empresas que usam Flutter

- Google (Google Ads)
- Alibaba
- BMW
- eBay
- Nubank
- iFood

---

## 🛠️ Configurando o Ambiente

### Requisitos

- **Windows**: Windows 10+, 7GB espaço
- **macOS**: macOS 12+, Xcode
- **Linux**: Ubuntu 18.04+

### Instalação

#### Windows

```bash
# 1. Baixar Flutter SDK
# https://docs.flutter.dev/get-started/install/windows

# 2. Extrair para C:\src\flutter

# 3. Adicionar ao PATH
# C:\src\flutter\bin

# 4. Verificar
flutter doctor
```

#### macOS/Linux

```bash
# Baixar e extrair Flutter SDK
cd ~/development
unzip ~/Downloads/flutter_macos_*.zip

# Adicionar ao PATH (~/.zshrc ou ~/.bashrc)
export PATH="$PATH:`pwd`/flutter/bin"

# Verificar
flutter doctor
```

### Verificar Instalação

```bash
flutter doctor

# Instalar dependências faltantes
# - Android Studio
# - Xcode (macOS)
# - VS Code com extensão Flutter
```

### Criar Projeto

```bash
# Criar app
flutter create meu_app

# Entrar na pasta
cd meu_app

# Rodar (escolha dispositivo)
flutter run

# Listar dispositivos
flutter devices
```

---

## 📁 Estrutura de Projeto

```
meu_app/
├── android/           # Código Android nativo
├── ios/               # Código iOS nativo
├── lib/               # Código Dart
│   └── main.dart      # Entry point
├── test/              # Testes
├── pubspec.yaml       # Dependências
└── README.md
```

### pubspec.yaml

```yaml
name: meu_app
description: Meu primeiro app Flutter

dependencies:
  flutter:
    sdk: flutter
  http: ^1.1.0
  provider: ^6.1.1

dev_dependencies:
  flutter_test:
    sdk: flutter

flutter:
  uses-material-design: true
  assets:
    - images/
  fonts:
    - family: Roboto
      fonts:
        - asset: fonts/Roboto-Regular.ttf
```

---

## 🧩 Widgets

### Tudo é Widget

```dart
// lib/main.dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Meu App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home'),
      ),
      body: Center(
        child: Text('Olá, Flutter!'),
      ),
    );
  }
}
```

### Stateless vs Stateful

#### Stateless (Sem Estado)

```dart
class MeuWidget extends StatelessWidget {
  final String titulo;

  MeuWidget({required this.titulo});

  @override
  Widget build(BuildContext context) {
    return Text(titulo);
  }
}
```

#### Stateful (Com Estado)

```dart
class Contador extends StatefulWidget {
  @override
  _ContadorState createState() => _ContadorState();
}

class _ContadorState extends State<Contador> {
  int _contador = 0;

  void _incrementar() {
    setState(() {
      _contador++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Contador: $_contador'),
        ElevatedButton(
          onPressed: _incrementar,
          child: Text('Incrementar'),
        ),
      ],
    );
  }
}
```

### Widgets Comuns

```dart
// Texto
Text('Olá')
Text('Título', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold))

// Botões
ElevatedButton(onPressed: () {}, child: Text('Clique'))
TextButton(onPressed: () {}, child: Text('Texto'))
IconButton(icon: Icon(Icons.add), onPressed: () {})

// Input
TextField(decoration: InputDecoration(labelText: 'Nome'))

// Imagem
Image.network('https://example.com/image.jpg')
Image.asset('images/logo.png')

// Ícone
Icon(Icons.home)
Icon(Icons.star, color: Colors.yellow, size: 30)

// Container
Container(
  width: 100,
  height: 100,
  color: Colors.blue,
  child: Text('Box'),
)

// Card
Card(
  child: Padding(
    padding: EdgeInsets.all(16),
    child: Text('Card'),
  ),
)

// ListView
ListView(
  children: [
    ListTile(title: Text('Item 1')),
    ListTile(title: Text('Item 2')),
  ],
)

// GridView
GridView.count(
  crossAxisCount: 2,
  children: [
    Card(child: Center(child: Text('1'))),
    Card(child: Center(child: Text('2'))),
  ],
)
```

---

## 📐 Layouts

### Column e Row

```dart
// Vertical
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text('Item 1'),
    Text('Item 2'),
    Text('Item 3'),
  ],
)

// Horizontal
Row(
  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  children: [
    Icon(Icons.star),
    Icon(Icons.star),
    Icon(Icons.star),
  ],
)
```

### Stack

```dart
Stack(
  children: [
    Container(width: 200, height: 200, color: Colors.blue),
    Positioned(
      top: 50,
      left: 50,
      child: Text('Sobreposto'),
    ),
  ],
)
```

### Expanded e Flexible

```dart
Row(
  children: [
    Expanded(
      flex: 2,
      child: Container(color: Colors.red, height: 100),
    ),
    Expanded(
      flex: 1,
      child: Container(color: Colors.blue, height: 100),
    ),
  ],
)
```

### Padding e Margin

```dart
Padding(
  padding: EdgeInsets.all(16),
  child: Text('Com padding'),
)

Container(
  margin: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  padding: EdgeInsets.all(16),
  child: Text('Com margin e padding'),
)
```

---

## 🔄 State Management

### setState (Básico)

```dart
class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Text('$_counter');
  }
}
```

### Provider (Recomendado)

```yaml
# pubspec.yaml
dependencies:
  provider: ^6.1.1
```

```dart
// Model
class Contador with ChangeNotifier {
  int _valor = 0;

  int get valor => _valor;

  void incrementar() {
    _valor++;
    notifyListeners();
  }
}

// Main
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => Contador(),
      child: MyApp(),
    ),
  );
}

// Widget consumindo
class ContadorWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Consumer<Contador>(
      builder: (context, contador, child) {
        return Column(
          children: [
            Text('Contador: ${contador.valor}'),
            ElevatedButton(
              onPressed: contador.incrementar,
              child: Text('Incrementar'),
            ),
          ],
        );
      },
    );
  }
}
```

---

## 🧭 Navegação

### Navegação Básica

```dart
// Ir para nova tela
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => SegundaTela()),
);

// Voltar
Navigator.pop(context);

// Push com dados
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => DetalheTela(item: item),
  ),
);
```

### Named Routes

```dart
// main.dart
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => HomePage(),
    '/segunda': (context) => SegundaTela(),
    '/detalhes': (context) => DetalheTela(),
  },
)

// Navegar
Navigator.pushNamed(context, '/segunda');

// Com argumentos
Navigator.pushNamed(
  context,
  '/detalhes',
  arguments: {'id': 123},
);

// Receber argumentos
final args = ModalRoute.of(context)!.settings.arguments as Map;
```

---

## 📝 Formulários

### TextField

```dart
class FormularioPage extends StatefulWidget {
  @override
  _FormularioPageState createState() => _FormularioPageState();
}

class _FormularioPageState extends State<FormularioPage> {
  final _formKey = GlobalKey<FormState>();
  final _nomeController = TextEditingController();
  final _emailController = TextEditingController();

  @override
  void dispose() {
    _nomeController.dispose();
    _emailController.dispose();
    super.dispose();
  }

  void _enviar() {
    if (_formKey.currentState!.validate()) {
      print('Nome: ${_nomeController.text}');
      print('Email: ${_emailController.text}');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          TextFormField(
            controller: _nomeController,
            decoration: InputDecoration(labelText: 'Nome'),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Por favor, insira seu nome';
              }
              return null;
            },
          ),
          TextFormField(
            controller: _emailController,
            decoration: InputDecoration(labelText: 'Email'),
            keyboardType: TextInputType.emailAddress,
            validator: (value) {
              if (value == null || !value.contains('@')) {
                return 'Email inválido';
              }
              return null;
            },
          ),
          ElevatedButton(
            onPressed: _enviar,
            child: Text('Enviar'),
          ),
        ],
      ),
    );
  }
}
```

---

## 🌐 HTTP e APIs

```yaml
# pubspec.yaml
dependencies:
  http: ^1.1.0
```

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

// Model
class Post {
  final int id;
  final String title;
  final String body;

  Post({required this.id, required this.title, required this.body});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      id: json['id'],
      title: json['title'],
      body: json['body'],
    );
  }
}

// Fetch
Future<List<Post>> fetchPosts() async {
  final response = await http.get(
    Uri.parse('https://jsonplaceholder.typicode.com/posts'),
  );

  if (response.statusCode == 200) {
    List jsonResponse = json.decode(response.body);
    return jsonResponse.map((post) => Post.fromJson(post)).toList();
  } else {
    throw Exception('Falha ao carregar posts');
  }
}

// Widget
class PostsPage extends StatefulWidget {
  @override
  _PostsPageState createState() => _PostsPageState();
}

class _PostsPageState extends State<PostsPage> {
  late Future<List<Post>> futurePosts;

  @override
  void initState() {
    super.initState();
    futurePosts = fetchPosts();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Post>>(
      future: futurePosts,
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          return ListView.builder(
            itemCount: snapshot.data!.length,
            itemBuilder: (context, index) {
              return ListTile(
                title: Text(snapshot.data![index].title),
              );
            },
          );
        } else if (snapshot.hasError) {
          return Text('Erro: ${snapshot.error}');
        }
        return CircularProgressIndicator();
      },
    );
  }
}
```

---

## 💾 Persistência de Dados

### SharedPreferences

```yaml
dependencies:
  shared_preferences: ^2.2.2
```

```dart
import 'package:shared_preferences/shared_preferences.dart';

// Salvar
Future<void> salvarDados() async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString('nome', 'João');
  await prefs.setInt('idade', 25);
  await prefs.setBool('logado', true);
}

// Ler
Future<void> lerDados() async {
  final prefs = await SharedPreferences.getInstance();
  String? nome = prefs.getString('nome');
  int? idade = prefs.getInt('idade');
  bool? logado = prefs.getBool('logado');
}

// Remover
Future<void> removerDados() async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.remove('nome');
}
```

### SQLite

```yaml
dependencies:
  sqflite: ^2.3.0
  path: ^1.8.3
```

```dart
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class DatabaseHelper {
  static final DatabaseHelper instance = DatabaseHelper._init();
  static Database? _database;

  DatabaseHelper._init();

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDB('app.db');
    return _database!;
  }

  Future<Database> _initDB(String filePath) async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, filePath);

    return await openDatabase(
      path,
      version: 1,
      onCreate: _createDB,
    );
  }

  Future _createDB(Database db, int version) async {
    await db.execute('''
      CREATE TABLE usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL
      )
    ''');
  }

  Future<int> inserir(Map<String, dynamic> row) async {
    final db = await database;
    return await db.insert('usuarios', row);
  }

  Future<List<Map<String, dynamic>>> listar() async {
    final db = await database;
    return await db.query('usuarios');
  }
}
```

---

## 🎨 Animações

```dart
class AnimacaoPage extends StatefulWidget {
  @override
  _AnimacaoPageState createState() => _AnimacaoPageState();
}

class _AnimacaoPageState extends State<AnimacaoPage>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 2),
      vsync: this,
    );
    _animation = Tween<double>(begin: 0, end: 300).animate(_controller)
      ..addListener(() {
        setState(() {});
      });
    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: _animation.value,
      height: _animation.value,
      color: Colors.blue,
    );
  }
}
```

---

## 📱 Platform Specific Code

```dart
import 'dart:io' show Platform;

if (Platform.isAndroid) {
  // Código Android
} else if (Platform.isIOS) {
  // Código iOS
}
```

---

## 📦 Packages Essenciais

| Package | Uso |
|---------|-----|
| **provider** | State management |
| **http** | HTTP requests |
| **shared_preferences** | Armazenamento local |
| **sqflite** | SQLite database |
| **path_provider** | Caminhos de arquivos |
| **image_picker** | Escolher imagens |
| **url_launcher** | Abrir URLs |
| **firebase_core** | Firebase |

---

## 🧪 Testes

```dart
// test/widget_test.dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('Teste de contador', (WidgetTester tester) async {
    await tester.pumpWidget(MyApp());

    expect(find.text('0'), findsOneWidget);
    expect(find.text('1'), findsNothing);

    await tester.tap(find.byIcon(Icons.add));
    await tester.pump();

    expect(find.text('0'), findsNothing);
    expect(find.text('1'), findsOneWidget);
  });
}
```

```bash
# Rodar testes
flutter test
```

---

## 🚀 Build e Deploy

### Android

```bash
# Build APK
flutter build apk

# Build App Bundle (para Play Store)
flutter build appbundle

# Arquivo gerado em:
# build/app/outputs/flutter-apk/app-release.apk
```

### iOS

```bash
# Build (requer macOS)
flutter build ios

# Abrir no Xcode para fazer deploy
open ios/Runner.xcworkspace
```

---

## ✅ Boas Práticas

| Prática | Benefício |
|---------|-----------|
| Use `const` widgets | Performance |
| Evite `setState` em excesso | Previne rebuilds |
| Use Provider para state | Escalabilidade |
| Organize código em pastas | Manutenibilidade |
| Use named routes | Navegação clara |
| Teste widgets | Qualidade |

---

## 📚 Recursos e Documentação

| Recurso | Link |
|---------|------|
| Documentação Oficial | [flutter.dev](https://flutter.dev/) |
| Pub.dev (Packages) | [pub.dev](https://pub.dev/) |
| Flutter Gallery | [gallery.flutter.dev](https://gallery.flutter.dev/) |
| YouTube - Flutter | [youtube.com/@flutterdev](https://www.youtube.com/@flutterdev) |

---

## ⏭️ Próximo Passo

Aprenda Git para controle de versão:

➡️ [14-git.md - Guia Completo de Git](14-git.md)

---

<p align="center">
  <strong>🦋 Você completou o guia de Flutter!</strong><br>
  <a href="../README.md">← Voltar ao Índice</a>
</p>

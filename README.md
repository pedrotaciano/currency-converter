# Currency Converter
Este repositório contém uma aplicação de conversão de moedas para Real Brasileiro (BRL). As moedas incluídas são:

- Dólar Canadense (CAD)
- Peso Argentino (ARS)
- Libra Esterlina (GBP)

## Sumário
- Pré-requisitos
- Construção da Imagem Docker
- Execução do Container Docker
- Acessando a Aplicação Angular

## Pré-requisitos

Antes de começar, certifique-se de ter o Docker instalado em sua máquina:
- [Docker](https://www.docker.com/get-started)

## Construção da imagem Docker

Para construir a imagem Docker, abra um terminal e navegue até a raiz do projeto e execute o seguinte comando:

```bash
docker build -t currency-converter .
```

## Execução do container Docker
Uma vez que a imagem Docker foi construída, podemos rodá-la com o seguinte comando:

```bash
docker run -p 4201:4200 currency-converter
```

## Acessando a a aplicação
Abra seu navegador e vá ao endereço http://localhost:4201 e acesse a aplicação Angular rodando dentro do container Docker.

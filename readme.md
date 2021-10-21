# Inicio

Será um site completo que apresentará uma empresa americana investidora. uma empresa que procura outras empresas para investir nelas.

# Adendos

O template será feito todo em inglês, classes, id's e nome de arquivos. Com o foco de fazer cada parte utilizavel e responsiva em qualquer lugar do site.

# Exemplos de um bom código

#### Forma correta de se definir variaveis em Javascript


```js
let navMenu = document...
const NAV_MENU = document...
```

> Forma errada

```js
let nav_menu = document...
const navMenu = document...
```
#### Funções sempre sendo um verbo, e com a primeira letra minuscula, o inicio de cada palavra depois da primeira é maiuscula


```js
function makeMoney() {

}

function makeMoneyNow() {

}
```

#### Espaçamentos em blocos de código, if's, loops e functions

exemplo: 

```js
if(monkey.length > 30) {
	console.log("We have a lot of monkeys")
}

if(monkey.length < 30) {
	console.log("We don't have a lot of monkeys")
}

```

>errado: 

```js
if(monkey.length > 30) {
	console.log("We have a lot of monkeys")
}
if(monkey.length < 30) {
	console.log("We don't have a lot of monkeys")
}

```

#### Espaçamento correto no css 

```css

div {
	background-color: #fff;
}

h1 {
	font-size: 10px;
}

```

> errado

```css

div {
	background-color: #fff;
}
h1{
	font-size: 10px;
}
```

#### Id's e Classes html

Id's e classes sempre com hífen separando as palavras. E sempre escritos da forma mais clara e objetiva.


#### Git flow básico

Antes de dar push:

- dar commit
- dar pull
- conferir mudanças no código, se houverem
- push

Quando for fazer um commit com o mesmo nome que o anterior: 

- git add
- git commit --amend -m "mensagem de commit"
- git push ( Caso não funciona git push -f )

# Páginas

| Páginas   |      nome do arquivo      |  url |
|----------|:-------------:|------:|
| home |  index.html | /home |
| blog |    blog.php   |   /blog |


# Seções da home

| Seções   |      Descrição     |
|----------|:-------------:|
| #home |  topo da home, onde terá um destaque com uma imagem e um titulo | 
| #about |    sobre a empresa   |   
| #blog |  seção que introduz o blog e terá um botão que levará para a página /blog  |   
| #portfolio |  fotos dos projetos que a empresa participou | 
| #plans |  seção plans/preços | 
| #contact |   formulario de contato  |   
| #footer |  rodapé que terá informações de localização e logo da empresa | 

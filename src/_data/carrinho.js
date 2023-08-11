import { ref } from 'vue'

const carrinho = ref({
  itens: [],
  total: 0
})
let mostrarFormulario = false;
function atualizaQuantidadeItem(item) {
  
  carrinho.value.total -= item.total
  item.total = item.price * item.quantidade
  carrinho.value.total += item.total
}

function removerItemCarrinho(item) {
  const index = carrinho.value.itens.findIndex((i) => i.id === item.id)
  carrinho.value.total -= item.total
  carrinho.value.itens.splice(index, 1)
};
function adicionarAoCarrinho(livro) {
  const index = carrinho.value.itens.findIndex((item) => item.id === livro.id);
  if (index === -1) {
    carrinho.value.itens.push({
      ...livro,
      quantidade: 1,
      total: livro.price
    });
    carrinho.value.total += livro.price;
  } else {
    carrinho.value.itens[index].quantidade++;
    carrinho.value.itens[index].total += livro.price;
    carrinho.value.total += livro.price;
  }
}


function exibirFormulario(livro) {
  mostrarFormulario = true;
}

function ocultarFormulario(livro) {
  mostrarFormulario = false;
}

function processarPagamento(event) {
  event.preventDefault(mostrarFormulario);

  const formData = ref({
    nome: '',
    email: '',
    senha: '',
    cartao: '',
    cep: ''
  });
  
  setTimeout(() => {
    alert(`compra finalizada!!!`);
    carrinho.value.itens = []; 
    carrinho.value.total = 0; 
  }, 2000); 

  
  event.target.reset(event);
};



export { carrinho, adicionarAoCarrinho, removerItemCarrinho, atualizaQuantidadeItem,processarPagamento, exibirFormulario, ocultarFormulario , };
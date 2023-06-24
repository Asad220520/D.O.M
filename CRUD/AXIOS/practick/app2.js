const block = document.querySelector(".block");
axios(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    console.log(res.data);
  res.data.map((el) => {
    block.innerHTML += `
    <div class="boc">
    <img width='100px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&usqp=CAU" alt="">
      <h1>${el.name}</h1>
      <h1>${el.username}</h1>
    </div>
  `;
  });
});


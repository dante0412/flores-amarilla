onload = () => {
    document.body.classList.remove("container");
  };

  setTimeout(() => {
    const messageBox = document.querySelector('.message-box');
    messageBox.classList.remove('hidden');
    messageBox.classList.add('visible');
  }, 5000); // 5000 ms = 5 segundos
  
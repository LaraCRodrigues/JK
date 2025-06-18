document.querySelector('.container-btn_chat a').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('modalChat').style.display = 'block';
    });

    document.getElementById('fecharModal').addEventListener('click', function () {
      document.getElementById('modalChat').style.display = 'none';
    });
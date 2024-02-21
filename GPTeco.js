function enviarArquivos() {
    var arquivosInput = document.getElementById('arquivosInput');
    var arquivos = arquivosInput.files;
    var progressContainer = document.getElementById('progress-container');

    var formData = new FormData();

    Array.from(arquivos).forEach(function (arquivo, index) {
        formData.append('files[]', arquivo);

        // Cria a barra de progresso para cada arquivo
        var progressDiv = document.createElement('div');
        progressDiv.innerHTML = 'Arquivo ' + (index + 1) + ': <progress></progress>';
        progressContainer.appendChild(progressDiv);

        // Cria o objeto XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // Configura a requisição
        xhr.open('POST', 'sua_url_de_destino', true);

        // Define o evento de progresso
        xhr.upload.onprogress = function (event) {
            if (event.lengthComputable) {
                // Atualiza o valor da barra de progresso
                var progressElement = progressDiv.querySelector('progress');
                progressElement.value = (event.loaded / event.total) * 100;
            }
        };

        // Define o evento de conclusão da requisição
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                // A requisição foi bem-sucedida
                console.log('Arquivo ' + (index + 1) + ' enviado com sucesso!');
            } else {
                // A requisição falhou
                console.error('Erro ao enviar arquivo ' + (index + 1) + '. Código de status:', xhr.status);
            }
        };

        // Envia a requisição com o objeto FormData como payload
        xhr.send(formData);
    });
}
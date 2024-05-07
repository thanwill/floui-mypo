class Utils {
    async alert(message) {
        
        const divElement = document.querySelector('.message');

        if (divElement === null) {
            throw new Error("Nenhum elemento encontrado com o seletor '.message'");
        }
      
        const alert = document.createElement('div');
        alert.className = 'alert alert-warning alert-dismissible fade show mt-4';
        alert.role = 'alert';
        alert.innerHTML = `
              <strong>Ops!</strong> ${message}.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            `;
        div.appendChild(alert);
    }
}

export default Utils;
const subtitulos = document.querySectorAll('h1');
      const topicos = new Array();
      subtitulos.forEach(subtitulo => {
        topicos.push(subtitulo.innerHTML);
      });
      lista = document.querySelector('ol');
      topicos.forEach(topico => {
        const item = document.createElement('li');
        item.innerHTML = topico;
        lista.append(item);
      });  

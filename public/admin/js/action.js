
;(function(document, window) {
    const templateImage = document.querySelector('#tplImage');
    let forms = document.querySelectorAll('.lcUpload__block');
    Array.prototype.forEach.call(forms, function(form) {
        let input        = form.querySelector('input[type="file"]'),
            label        = form.querySelector('label'),
            showFiles    = function(files) {
                // https://developer.mozilla.org/fr/docs/Web/API/File_API/Using_files_from_web_applications#exemple_afficher_les_miniatures_dimages_s%C3%A9lectionn%C3%A9es_par_lutilisateur
                // Liste des nom de fichier
                document.querySelector('#lcUpoadList').innerHTML = '';
                Array.prototype.forEach.call(files, (file) => {
                    if (/^image\//.test(file.type)) {
                        let img = document.createElement("img");
                        img.file = file;   
                        var reader = new FileReader();
                        reader.onload = (function(aImg) { 
                            return function(e) {
                                const clone = templateImage.content.cloneNode(true);
                                clone.querySelector('img').src = e.target.result;
                                clone.querySelector('.alt').value = file.name;
                                clone.querySelector('.alt').name='image_alt['+(document.querySelectorAll('.alt').length+1)+']';
                                clone.querySelector('.title').name='image_title['+(document.querySelectorAll('.title').length+1)+']';
                                clone.querySelector('.order').name='image_order['+(document.querySelectorAll('.order').length+1)+']';
                                clone.querySelector('.order').value=(document.querySelectorAll('.order').length+1);
                                
                                document.querySelector('#lcUpoadList').appendChild(clone);
                            }; 
                        })(img);
                        reader.readAsDataURL(file);
                    }
                });
                label.textContent = files.length > 1 ? ( input.getAttribute('data-multiple-caption') ||'').replace('{count}', files.length ) : files[ 0 ].name;
            };
        input.addEventListener('change', function(e) {
            showFiles(e.target.files);
        }); ['drag','dragstart','dragend','dragover','dragenter','dragleave','drop'].forEach(function(event){
            form.addEventListener(event, function(e) {
                e.preventDefault();
                e.stopPropagation();
            });
        });
        form.addEventListener('drop', function(e) {
            input.files = e.dataTransfer.files;
            showFiles(input.files);
        });
    });
}(document, window));


new Sortable(
    document.querySelector("#lcUpoadList"), {
	animation: 150,
	ghostClass: 'blue-background-class',
    onEnd: function (evt) {
        let i = 1;
        document.querySelectorAll('#lcUpoadList .order').forEach((el) => {
            el.value = i;
            i++;
        });
	},
});
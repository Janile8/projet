/**Declaration et affichage des images */

var prixentre=0;
var categorie=[];
    categorie[0]="Calenques";
    categorie[1]="Dejeuner";
    categorie[2]="Feu d'artifice";
    categorie[3]="Fleurs";
    categorie[4]="Fruits";
    categorie[5]="Legumes";
    categorie[6]="Poissons";
function Affichage(){
var selentre=document.getElementById('categorie');
var  ide=selentre.options[selentre.selectedIndex].index;
AfficheImage(ide) 
}
function AfficheImage(index){
    var image = document.getElementById('img_calenques');
    var image1 = document.getElementById('img_dejeuner');
    var image2 = document.getElementById('img_feu');
    var image3 = document.getElementById('img_fleurs');
    var image4 = document.getElementById('img_fruits')
    var image5 = document.getElementById('img_legumes');
    var image6 = document.getElementById('img_poissons')
    var texte = document.getElementById("description");
    switch(index){
        case 0:
            image.style.display='block';
            image1.style.display='none'; 
            image2.style.display='none';
            image3.style.display='none';
            image4.style.display='none';
            image5.style.display='none';
            image6.style.display='none';
            texte.value = "Beatae sapiente, nulla tenetur neque quaerat voluptatum maiores quam quibusdam, animi, repellat aliquid quas a impedit soluta hic velit inventore labore.";
        break;
        case 1:
            image.style.display='none';
            image1.style.display='block';
            image2.style.display='none';
            image3.style.display='none';
            image4.style.display='none';
            image5.style.display='none';
            image6.style.display='none';
            texte.value = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
        break;
        case 2:
            image.style.display='none';
            image1.style.display='none';
            image2.style.display='block';
            image3.style.display='none';
            image4.style.display='none';
            image5.style.display='none';
            image6.style.display='none';
            texte.value = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, nulla tenetur neque quaerat voluptatum maiores quam quibusdam, animi, repellat aliquid quas a impedit soluta hic velit inventore labore. Cum!";
        break;
        case 3:
            image.style.display='none';
            image1.style.display='none';
            image2.style.display='none';
            image3.style.display='block';
            image4.style.display='none';
            image5.style.display='none';
            image6.style.display='none';
            texte.value = " Beatae sapiente, nulla tenetur neque quaerat voluptatum maiores quam quibusdam, animi, repellat aliquid quas a impedit soluta hic velit inventore labore. Cum!";
        break;
        case 4:
            image.style.display='none';
            image1.style.display='none';
            image2.style.display='none';
            image3.style.display='none';
            image4.style.display='block';
            image5.style.display='none';
            image6.style.display='none';
            texte.value = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, nulla tenetur neque quaerat voluptatum maiores quam quibusdam";
        break;
        case 5:
            image.style.display='none';
            image1.style.display='none';
            image2.style.display='none';
            image3.style.display='none';
            image4.style.display='none';
            image5.style.display='block';
            image6.style.display='none';
            texte.value = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, nulla tenetur ";
        break;
        case 6:
            image.style.display='none';
            image1.style.display='none';
            image2.style.display='none';
            image3.style.display='none';
            image4.style.display='none';
            image5.style.display='none';
            image6.style.display='block';
            texte.value = "animi, repellat aliquid quas a impedit soluta hic velit inventore labore. Cum!";
        break;
    }
}

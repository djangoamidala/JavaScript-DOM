//   1. Affichez une alerte avec le message de votre choix lorsque l'utilisateur clique sur un bouton
const monBouton = document.getElementById('monBouton');
const paragraph = document.getElementById('monParagraphe');
// Affiche une alert quand on click sur le bouton
monBouton.addEventListener('click', function () {
    // alert("Attention") (Désactiver)
    // On modifie le text du paragraphe
    paragraph.textContent = 'Je suis un paragraphe modifié'
})
// 2. Modifiez le style du paragraphe lorsque l'utilisateur passe la souris dessus (la couleur et le font size)

// On modifie les propriétés quand le curseur de souris entre dans la zone du contenu
paragraph.addEventListener("mouseenter", function (event) {
    event.target.style.color = "orange";
    event.target.style.fontSize = "40px"
})
// On rétabli les paramètres d'origines quand le curseur de souris sort de la zone du contenu
paragraph.addEventListener('mouseleave', function (event) {
    event.target.style.color = "";
    event.target.style.fontSize = "";
}
)
// 3. Ajoutez (créer) un nouvel élément HTML à la page lorsque l'utilisateur clique sur un bouton et l'ajouter en tant qu'element enfant de la liste et lui appliqué le texte : 'Nouvel élément'

// On attribu un nouvel element 'li' qui a pour texte : 'Nouvel élément', dans l'element qui porte l'id maListe
monBouton.addEventListener('click', function () {
    let item = document.createElement('li');
    item.innerText = 'Nouvel élément';
    maListe.appendChild(item);
});
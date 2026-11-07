// --- 1. GESTION DE LA NAVIGATION (Les pages) ---
function showPage(pageId, event) {
    // Cacher toutes les pages
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    // Afficher la page cliquée
    document.getElementById(pageId).style.display = 'block';

    // Changer la couleur du menu actif
    let menuItems = document.querySelectorAll('.sidebar li');
    menuItems.forEach(item => item.classList.remove('active'));
    
    // Ajoute la classe active à l'élément cliqué
    event.target.classList.add('active');
}

// --- 2. GESTION DU MODE SOMBRE ---
// On attend que la page soit chargée pour activer le bouton
document.addEventListener("DOMContentLoaded", function() {
    let toggleBtn = document.getElementById('theme-toggle');
    
    toggleBtn.addEventListener('click', function() {
        // On ajoute ou on enlève la classe "dark-mode" au body
        document.body.classList.toggle('dark-mode');
        
        // On change le texte du bouton
        if (document.body.classList.contains('dark-mode')) {
            toggleBtn.textContent = '☀️ Mode Clair';
        } else {
            toggleBtn.textContent = '🌙 Mode Sombre';
        }
    });
});
// --- 3. CALCULATEUR DE MOYENNE ---
let totalNotes = 0;
let totalCoefs = 0;

function calculerMoyenne() {
    let note = parseFloat(document.getElementById('note').value);
    let coef = parseFloat(document.getElementById('coef').value);

    if (isNaN(note) || isNaN(coef) || note < 0 || note > 20) {
        alert("Veuillez entrer une note valide (entre 0 et 20) et un coefficient.");
        return;
    }

    totalNotes += (note * coef);
    totalCoefs += coef;

    let moyenne = totalNotes / totalCoefs;
    document.getElementById('resultat-moyenne').textContent = "Moyenne : " + moyenne.toFixed(2) + "/20";
    
    document.getElementById('note').value = '';
    document.getElementById('coef').value = '';
}
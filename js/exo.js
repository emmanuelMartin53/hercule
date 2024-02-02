//EtAPE 1 et 2 : modification chemin d'accès fichier exo.js et creation d'un objet profil

const profil = {
    name: 'Hercule',
    job: 'Demi-dieu',
    age: 35,
    department: 75,
    arm: 60.5,
    inRelationship: true,
}
console.log(profil)

// mise en place du profil

base.fillProfil(profil);

// ETAPE 3 : Tableau

profil.friends = [
    'Jupiter',
    'Junon',
    'Alcmène',
    'Déjanire',
];
console.log(profil)
// j'affiche les amis d'Hercule
base.printFriends(profil.friends);
// j'affiche le meilleur ami d'Hercule
base.setBestFriend(profil.friends[0])

// ETAPE 4 : DOM

const title = document.createElement('h1');
title.className = "banner__title";
title.textContent = "Vous consultez le profil de Hercule";

const headerBanner = document.getElementById('header-banner');
headerBanner.appendChild(title);

// ETAPE 5 : BOUCLE

for (let indexWork = 0; indexWork < 12; indexWork++) {
    base.displayWork(indexWork);
}


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

const friends = [
    'Jupiter',
    'Junon',
    'Alcmène',
    'Déjanire',
];
console.log(profil)

base.printFriends(friends);

base.setBestFriend(friends[0])
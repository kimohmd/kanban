export class Utilisateur {

    id: number;
	nom: string;
	prenom: string;
	fonction: string;
}

export class Tableau{
	id: number;
	titre: string;
	fiches: Fiche[];
}

export class NewTableau{
	titre: String;
	}

export class Fiche{
	libelle: string;
	temps: number;
	lieu: string;
	url: string;
	note: string;
}

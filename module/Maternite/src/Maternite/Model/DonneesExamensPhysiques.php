<?php

namespace Maternite\Model;

class DonneesExamensPhysiques {
	public $code_examen;
	public $id_cons;
	public $libelle_examen;
	public $toucher_vaginale;
	public $hauteur_uterine;
	public $bdc;
	public $nb_bdc;
	public $la;
	public $pde;
	public $date_rupt_pde;
	public $heure_rupt_pde;
	public $presentation;
	public $bassin;
	public function exchangeArray($data) {
		$this->code_examen = (! empty ( $data ['code_examen'] )) ? $data ['code_examen'] : null;
		$this->id_cons = (! empty ( $data ['id_cons'] )) ? $data ['id_cons'] : null;
		$this->libelle_examen = (! empty ( $data ['libelle_examen'] )) ? $data ['libelle_examen'] : null;
		$this->toucher_vaginale = (! empty ( $data ['toucher_vaginale'] )) ? $data ['toucher_vaginale'] : null;
		//$this->libelle_examen = (! empty ( $data ['libelle_examen'] )) ? $data ['libelle_examen'] : null;
		$this->hauteur_uterine = (! empty ( $data ['hauteur_uterine'] )) ? $data ['hauteur_uterine'] : null;
		$this->bdc = (! empty ( $data ['bdc'] )) ? $data ['bdc'] : null;
		$this->nb_bdc = (! empty ( $data ['nb_bdc'] )) ? $data ['nb_bdc'] : null;
		$this->la = (! empty ( $data ['la'] )) ? $data ['la'] : null;
		$this->pde = (! empty ( $data ['pde'] )) ? $data ['pde'] : null;
		$this->date_rupt_pde = (! empty ( $data ['date_rupt_pde'] )) ? $data ['date_rupt_pde'] : null;
		$this->heure_rupt_pde = (! empty ( $data ['heure_rupt_pde'] )) ? $data ['heure_rupt_pde'] : null;
		$this->presentation = (! empty ( $data ['presentation'] )) ? $data ['presentation'] : null;
		$this->bassin = (! empty ( $data ['bassin'] )) ? $data ['bassin'] : null;
	}
}
<?php
namespace Maternite\Model;

class AntecedentType1 {
	public $id_patient;
	public $id_service;
	public $date_cons;
	public $enf_viv;
	public $geste;
	public $parite;


	public function exchangeArray($data) {
	
		$this->id_patient = (! empty ( $data ['id_patient'] )) ? $data ['id_patient'] : null;
		$this->geste = (! empty ( $data ['geste'] )) ? $data ['geste'] : null;
		$this->parite = (! empty ( $data ['parite'] )) ? $data ['parite'] : null;
		$this->enf_viv = (! empty ( $data ['enf_viv'] )) ? $data ['enf_viv'] : null;
		

		
	}
	public function getArrayCopy() {
		//return get_object_vars ( $this );
	}
}
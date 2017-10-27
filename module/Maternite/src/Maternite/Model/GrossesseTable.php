<?php

namespace Maternite\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Db\Sql\Sql;
use Maternite\View\Helpers\DateHelper;

class GrossesseTable {
	protected $tableGateway;
	
	public function __construct(TableGateway $tableGateway) {
		$this->tableGateway = $tableGateway;
	}

	
	
	public function getAdmission() {
	
		$today = new \DateTime ( 'now' );
		$date = $today->format ( 'Y-m-d' );
	
		$adapter = $this->tableGateway->getAdapter ();
		$sql = new Sql ( $adapter );
		$select = $sql->select ();
		$select->from ( array (
				'ad' => 'admission'
		) );
	}
		

	
	
	
	
	
	public function getGrossesse($id_pat,$id_cons){


		//$adapter = $this->tableGateway->getAdapter ();
		$db = $this->tableGateway->getAdapter ();
		$sql = new Sql ( $db );
		$sQuery = $sql->select ();
		
		$sQuery->columns ( array (
				'*'
		) );
		
		$sQuery->from( array (
				'gro' => 'grossesse'
		) )->join ( array (
				'p' => 'patient'
		), 'gro.id_patient = p.ID_PERSONNE', array (
		
		));
		$sQuery->where ( array (
				'gro.id_patient' => $id_pat,
				'gro.id_cons' => $id_cons
		
		) );
		
		$sQuery->order ( 'gro.id_grossesse ASC' );
		
		$stat = $sql->prepareStatementForSqlObject ( $sQuery );
		
		$resultat = $stat->execute ()->current();
		//var_dump($resultat);exit();
		return $resultat;
		
	}
	
	
	
	
	
	
	
	
	
          public function addgrossesse($donnees){
		return $this->tableGateway->getLastInsertValue($this->tableGateway->insert($donnees));
	
	}
	
	

	public function updateGrossesse($donnees) {
	
		$Control = new DateHelper();
		 
		$this->tableGateway->delete ( array (
				'id_cons' => $donnees ['id_cons'],	
		) );
		$ddr = $donnees['ddr'];
		if($ddr){ $ddr = $Control->convertDateInAnglais($ddr); }else{ $ddr = null;}	
		$datagrossesse = array (
				'id_cons' => $donnees ['id_cons'],
				'id_patient'=>$donnees['id_patient'],
				'ddr'=>$ddr,
				'duree_grossesse'=>$donnees['duree_grossesse'],
				'nb_cpn'=>$donnees['nb_cpn'],
				'bb_attendu'=>$donnees['bb_attendu'],
				'nombre_bb'=>$donnees['nombre_bb'],
				'vat_1'=>$donnees['vat_1'],
				'vat_2'=>$donnees['vat_2'],
				'vat_3'=>$donnees['vat_3'],
				'note_ddr'=>$donnees['note_ddr'],
				'note_bb'=>$donnees['note_bb'],
				'note_cpn'=>$donnees['note_cpn'],
				'note_vat'=>$donnees['note_vat'],
		);
	
		return $this->tableGateway->getLastInsertValue($this->tableGateway->insert($datagrossesse));
	
	}
	
	
	
	
	
	
	
}
<?php

namespace Maternite\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Db\Sql\Sql;
use Maternite\View\Helpers\DateHelper;

class AntecedentType1Table {
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
				'pat' => 'patient'
		) );
	}
   
    public function addAntecedentType1($donnees){
    	$result = $this->tableGateway->select(array('id_patient'=> $donnees['id_patient']));
    	if(!$result->current()){
    		$this->tableGateway->insert($donnees);
    	}else{
    		$this->tableGateway->update($donnees, array('id_patient'=> $donnees['id_patient']));
    	}
    }
	
	

	
	
	
	
	
	
	
	
}
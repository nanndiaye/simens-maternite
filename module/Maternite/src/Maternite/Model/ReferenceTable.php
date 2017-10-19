<?php

namespace Maternite\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Db\Sql\Select;
use Zend\Db\Sql\Sql;
use Zend\Db\Sql\Where;
use Maternite\View\Helpers\DateHelper;

class ReferenceTable {
	
	protected $tableGateway ; 
	public function __construct(TableGateway $tableGateway) {
		$this->tableGateway = $tableGateway;
	//	var_dump('test');exit();
		
		//var_dump('test');exit();
	}
public function getReference($id_patient) {
		$adapter = $this->tableGateway->getAdapter ();
		$sql = new Sql ( $adapter );
		$select = $sql->select ();
		$select->columns ( array (
				'*'
		) );
		$select->from ( array (
				'ref' => 'reference'
		) );
		$select->where ( array (
				'ref.id_patient' => $id_patient
		) );
		$select->order ( 'ref.id_reference ASC' );
		$stat = $sql->prepareStatementForSqlObject ( $select );
		$result = $stat->execute ()->current();
	
		return $result;
	
	}
	
	
	public function addReference($donnees) {
		
		$Control = new DateHelper();
// 		$this->tableGateway->delete ( array (
// 				'id_patient' => $donnees ['id_patient']
// 		) );
		
		$datadonnee = array (
				'id_patient' => $donnees ['id_patient'],
				'id_admission' => $donnees ['id_admission'],
				'motif_reference' => $donnees ['motif_reference'],
				'service_origine_ref' => $donnees ['service_origine_ref'],
		
				
		);
	
		
		//var_dump($datadonnee); exit();
		return $this->tableGateway->getLastInsertValue($this->tableGateway->insert($datadonnee ));
		//$this->tableGateway->insert ( $datadonnee );
	}
	



	public function getReferenceDuJour($id_patient) {
		$today = (new \DateTime ())->format ( 'Y-m-d' );
		$adapter = $this->tableGateway->getAdapter ();
		$sql = new Sql ( $adapter );
		$select = $sql->select ();
		$select->from ( array (
				'ref' => 'reference'
		) )->columns( array( '*' ))
		->join(array('a' => 'admission'), 'a.id_admission = ref.id_admission' , array('id_patient'))
		->where(array('ref.id_patient' => $id_patient)); //var_dump($today);exit();
		$select->order ( 'ref.id_reference DESC' );
		return $sql->prepareStatementForSqlObject ( $select )->execute ()->current ();
	}

}


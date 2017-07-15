<?php
namespace Maternite\Form;

use Zend\Form\Form;
// use Personnel\Model\Service;
// use Personnel\Model\ServiceTable;

class AdmissionForm extends Form{

	//protected $serviceTable;
	public function __construct() {
		//$this->serviceTable = $serviceTable;
		parent::__construct ();

		$this->add ( array (
				'name' => 'id_patient',
				'type' => 'Hidden',
				'attributes' => array(
						'id' => 'id_patient'
				)
		) );

		$this->add ( array (
				'name' => 'id_admission',
				'type' => 'Hidden',
				'attributes' => array(
						'id' => 'id_admission'
				)
		) );
		$this->add ( array (
				'name' => 'service',
				'type' => 'Select',
				'options' => array (
						'label' => iconv('ISO-8859-1', 'UTF-8','Service'),
						'value_options' => array (
								'' => 'Maternite',
						)
				),
				'attributes' => array (
						'registerInArrrayValidator' => true,
						
						'id' =>'service',
						'required' => false,
				)
		) );
				
		
		$this->add ( array (
				'name' => 'evacuee_de',
				'type' => 'Text',
				'options' => array (
						'label' => iconv('ISO-8859-1', 'UTF-8','Evacuée de:')
				),
				'attributes' => array (
						'id' => 'evacuee_de',
						'required' => false,
				)
		) );

		
		
		$this->add ( array (
				'name' => 'motif_evac',
				'type' => 'Text',
				'options' => array (
						'label' => iconv('ISO-8859-1', 'UTF-8','Motif:')
				),
				'attributes' => array (
						'id' => 'motif_evac',
						'required' => false,
				)
		) );
		
		
		
	
		$this->add ( array (
				'name' => 'geste', 
				'type' => 'Text',
				'options' => array (
						'label' => iconv('ISO-8859-1', 'UTF-8','GESTE')
				),
				'attributes' => array (
						'id' => 'geste',
						'required' => true,
				)
		) );
		
		
		
		

		$this->add ( array (
				'name' => 'parite',
				'type' => 'Text',
				'options' => array (
						'label' => iconv('ISO-8859-1', 'UTF-8','PARITE')
				),
				'attributes' => array (
						'id' => 'parite',
						'required' => true,
				)
		) );
		
		
		$this->add ( array (
				'name' => 'enf_viv',
				'type' => 'Text',
				'options' => array (
						'label' => iconv('ISO-8859-1', 'UTF-8','ENF_VIV')
				),
				'attributes' => array (
						'id' => 'enf_viv',
						'required' => true,
				)
		) );
		
				
		$this->add(array(
				'name' => 'mort_ne',
				'type' => 'Zend\Form\Element\radio',
				'options' => array (
						'value_options' => array(
								1 => 'Oui',
								2 => iconv ( 'ISO-8859-1', 'UTF-8','Non') ,
						),
				),
				'attributes' => array(
						'id' => 'mort_ne',
						'required' => true,
				),
		));
		
		
		
		
		$this->add(array(
				'name' => 'cesar',
				'type' => 'Zend\Form\Element\radio',
				'options' => array (
						'value_options' => array(
								1 => 'Oui',
								2 => iconv ( 'ISO-8859-1', 'UTF-8','Non') ,
						),
				),
				'attributes' => array(
						'id' => 'cesar',
						'required' => true,
				),
		));
			

		$this->add(array(
				'name' => 'dystocie',
				'type' => 'Zend\Form\Element\radio',
				'options' => array (
						'value_options' => array(
								1 => 'Oui',
								2 => iconv ( 'ISO-8859-1', 'UTF-8','Non') ,
						),
				),
				'attributes' => array(
						'id' => 'dystocie',
						'required' => true,
				),
		));
		
		
		$this->add(array(
				'name' => 'eclampsie',
				'type' => 'Zend\Form\Element\radio',
				'options' => array (
						'value_options' => array(
								1 => 'Oui',
								2 => iconv ( 'ISO-8859-1', 'UTF-8','Non') ,
						),
				),
				'attributes' => array(
						'id' => 'eclampsie',
						'required' => true,
				),
		));
		
		
		$this->add ( array (
				'name' => 'ddr',
				'type' => 'Text',
				'options' => array (
						'label' => iconv('ISO-8859-1', 'UTF-8','DDR:')
				),
				'attributes' => array (
						'id' => 'ddr',
						'required' => true,
				)
		) );
		
		
			$this->add(array(
				'name' => 'bb_attendu',
				'type' => 'Select',
				'options' => array (
						'label' => iconv('ISO-8859-1', 'UTF-8','Nombre de bébé attendu'),
						'value_options' => array(
								'Simple' => 'Simple',
								'Gemellaire'  => 'Gemellaire',
								'Triple' => 'Triple',
								
						),
				),
				'attributes' => array(
						'registerInArrrayValidator' => true,
							
						'id' => 'bb_attendu',
						'required' => true,
				),
		));
			
			
			

			$this->add ( array (
					'name' => 'vat_1',
					'type' => 'checkbox',
					'options' => array (
							'label' => iconv('ISO-8859-1', 'UTF-8','VAT 1:')
					),
					'attributes' => array (
							'id' => 'vat_1',
							'required' => false,
					)
			) );
			
			
			$this->add ( array (
					'name' => 'vat_2',
					'type' => 'checkbox',
					'options' => array (
							'label' => iconv('ISO-8859-1', 'UTF-8','VAT 2:')
					),
					'attributes' => array (
							'id' => 'vat_3',
							'required' => false,
					)
			) );
			$this->add ( array (
					'name' => 'vat_3',
					'type' => 'checkbox',
					'options' => array (
							'label' => iconv('ISO-8859-1', 'UTF-8','VAT 3:')
					),
					'attributes' => array (
							'id' => 'vat_3',
							'required' => false,
							
					)
			) );
			
			$this->add ( array (
					'name' => 'nb_cpn',
					'type' => 'Text',
					'options' => array (
							'label' => iconv('ISO-8859-1', 'UTF-8','Nombre CPN:')
					),
					'attributes' => array (
							'id' => 'nb_cpn',
							'required' => true,
					)
			) );
				
			
			$this->add(array(
					'name' => 'reference',
					'type' => 'Zend\Form\Element\radio',
					'options' => array (
							'value_options' => array(
									1 => 'Non',
									2 => iconv ( 'ISO-8859-1', 'UTF-8','Oui') ,
							),
					),
					'attributes' => array(
							'id' => 'reference',
							'required' => false,
					),
			));
			
			$this->add ( array (
					'name' => 'motif_ref',
					'type' => 'Text',
					'options' => array (
							'label' => iconv('ISO-8859-1', 'UTF-8','Motif:')
					),
					'attributes' => array (
							'id' => 'motif_ref',
					)
			) );
			
		
		$this->add ( array (
				'name' => 'liste_service',
				'type' => 'Select',
				'options' => array (
						'value_options' => array (
								''=>''
						)
				),
				'attributes' => array (
						'id' => 'liste_service',
				)
		) );
		
		
		
		
	
		
	}
}
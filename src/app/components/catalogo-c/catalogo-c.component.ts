//JESUS HERNANDEZ REYES
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo-c',
  templateUrl: './catalogo-c.component.html',
  styleUrls: ['./catalogo-c.component.css']
})
export class CatalogoCComponent implements OnInit {

  conciertos: string[];

  constructor() {
   }


  titulo1: string= 'Pepsi Center'
  cantante1: string='MORAT'
  precio1: string='$1000mxn'
  lugar1: string='Auditorio Nacional'
  nomC1: string=''
  fecha1 = new Date(2020, 6, 15 )
 
  titulo2: string= 'Pepsi Center'
  cantante2: string='Kurt'
  precio2: string='$900mxn'
  lugar2: string='Auditorio Nacional'
  fecha2 = new Date(2020, 6, 17 )

  titulo3: string= 'Auto Concierto'
  cantante3: string='Matisse'
  precio3: string='$1500mxn'
  lugar3: string='Auditorio Nacional'
  fecha3 = new Date(2020, 7, 4 )
  
  titulo4: string= 'Auto Concierto'
  cantante4: string='Camilo'
  precio4: string='$1500mxn'
  lugar4: string='Auditorio Nacional'
  fecha4 = new Date(2020, 7, 25 )

  titulo5: string= 'MACHACA'
  cantante5: string='Coldplay'
  precio5: string='$1800mxn'
  lugar5: string='Auditorio Nacional'
  fecha5 = new Date(2020, 8, 30 )

  titulo6: string= 'Pepsi Center'
  cantante6: string='Aitana'
  precio6: string='$1100mxn'
  lugar6: string='Auditorio Nacional'
  fecha6 = new Date(2020, 8, 16 )



  ngOnInit(): void {
  }

  

}


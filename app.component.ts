import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VisitasService } from 'src/app/visitas.service';
import { RenaperService } from 'src/app/renaper.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ingresodevivistantes';

  signupForm: FormGroup;

  myTime=Date.now();

  personas= ({});

  persona={
    nombres: null,
    apellido: null,
    fechaNacimiento: null,
    mensaje: null
  }

  empleados= null;

  empleado= {
    id_empleado: null,
    nombre: null,
    apellido: null,
    id_sector1: null,   
  }

  sectores= null;

  sector= {
    id_sector: null,
    nombre_sector: null,
  }

  visitas= null;

  visita={
    id_dni: null,
    id_empleado: null,
    nro_entrada: null,
    fecha: null,
  }

  historial= null;

  historia={
    id_dni: null,
    id_empleado: null,
    nro_entrada: null,
    fecha: null,
  }

  visitantes= null;

  visitante={
    id_dni: null,
    nombre: null,
    apellido: null,
    nroTarjeta: null
  }

  constructor (private builder: FormBuilder, private visitasServicio: VisitasService, private renaperServicio: RenaperService) {

    this.signupForm=this.builder.group({
      dni: [null,Validators.compose([Validators.minLength(8), Validators.maxLength(8), Validators.required])],
      tarjeta: [null, Validators.required],
      empleado: ['', Validators.required],
      sector: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.recuperarEmpleados();
    this.recuperarSector();
    this.recuperarHistorial();
  }

  recuperarEmpleados(){
    this.visitasServicio.recuperarEmpleados().subscribe(result => this.empleados = result);
  }

  recuperarSector(){
    this.visitasServicio.recuperarSector().subscribe(result => this.sectores = result);
  }

  recuperarHistorial(){
    this.visitasServicio.recuperarHistorial().subscribe(result => this.historial = result);
  }

  recuperarVisitante(id){
    this.visitasServicio.recuperarVisitante(id).subscribe(result => this.visitantes = result);
  }

  registrarVisitante(visitante){
    this.visitasServicio.registrarVisitante(visitante).subscribe(datos=> {
      if (datos['resultado']=='OK'){
        alert(datos['Mensaje']);
      }
  });
}

  //El metodo consultaRenaper actualmente trabaja con un placeholder

  consultaRenaper(dni){
    console.log(dni);
    this.renaperServicio.consultarRenaper(dni).subscribe(result =>{ 
      if (result['mensaje']=='500'){
        alert('El servicio RENAPER no se encuentra disponible en este momento, intente de nuevo mas tarde')}
      if(result['mensaje']=='timeout'){
        alert('No se pudo establecer conexion con el servidor')}
      if(result['mensaje']=='400'){
        alert('No hubo respuesta, verifique sus datos y vuelva a intentar')
      }else{
        this.personas = result;
  }
    console.log(this.personas);
  })
}

  registrarFormulario(visita){

    this.visitante.id_dni=visita.dni;
    this.visitante.nombre=this.personas.nombres;
    this.visitante.apellido=this.personas.apellido;
    this.visitante.nroTarjeta=visita.tarjeta;
    this.visita.id_dni=visita.dni;
    this.visita.id_empleado=visita.empleado;
    this.visita.nro_entrada=0;
    this.visita.fecha=Date.now();

    console.log(this.visitante);
    console.log(visita);

    this.registrarVisitante(this.visitante);

    this.visitasServicio.alta(this.visita).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarHistorial();

        console.log(this.historia);
      }
    });
  }


    //registrarFormulario(values){
      //console.log(values);
    //}


}

 

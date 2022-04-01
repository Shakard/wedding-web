import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})

export class SweetMessageService {

    error(error:any) {
        if (error.status === 400) {
            if (error.error.msg.code === '23505') {
                return Swal.fire({
                    title: 'El registro ya existe',
                    text: error.error.data,
                    icon: 'error'
                });
            }
        }
        if (error.status === 404) {
            return Swal.fire({
                title: error.error.msg.summary,
                text: error.error.msg.detail,
                icon: 'warning'
            });
        }
        if (error.status === 422) {
            let i;
            const fields = Object.values(error.error.msg.detail).toString().split('.,');
            let html = '<ul>';
            for (i = 0; i < fields.length - 1; i++) {
                html += `<li>${fields[i]}.</li>`;
            }
            html += `<li>${fields[i]}</li>`;
            html += '</ul>';
            return Swal.fire({
                title: error.error.msg.summary,
                html,
                icon: 'error'
            });
        }

        return Swal.fire({
            title: error.error.msg.summary,
            text: error.error.msg.detail,
            width: '300px',
            icon: 'error'
        });
    }

    success(response: any) {
        return Swal.fire({
            icon: 'success',
            title: response.msg.summary,
            text: response.msg.detail,
            padding: '1px',
            color: '#4f62fa',  
        }).then(response);
    }

    questionDelete({title = '¿Está seguro de eliminar?', text = 'No podrá recuperar esta información!'}) {
        return Swal.fire({
            title,
            text,
            icon: 'warning',
            width: '300px',
            color: 'red',  
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            padding: '2px',
            confirmButtonText: '<i class="pi pi-trash"> Eliminar!!!!!</i>'
        });
    }

    questionClearTables({title = '¿Limpiar todas las mesas?'}) {
        return Swal.fire({
            title,
            icon: 'warning',
            width: '300px',
            color: 'orange',  
            showCancelButton: true,
            confirmButtonColor: 'orange',
            cancelButtonColor: '#3085d6',
            padding: '2px',
            confirmButtonText: '<i class="pi pi-trash"> Limpiar</i>'
        });
    }

    questionResetPosition({title = '¿Restaurar la posición?'}) {
        return Swal.fire({
            title,
            icon: 'warning',
            width: '300px',
            color: 'orange',  
            showCancelButton: true,
            confirmButtonColor: 'orange',
            cancelButtonColor: '#3085d6',
            padding: '2px',
            confirmButtonText: '<i class="pi pi-trash"> Restaurar</i>'
        });
    }


    questionDeleteUsers({title = '¿Está seguro de eliminar todos los usuarios?', text = 'No podrá recuperar esta información!'}) {
        return Swal.fire({
            title,
            text,
            width: '300px',
            color: '#4f62fa',  
            showCancelButton: true,
            confirmButtonColor: '#f7502d ',
            cancelButtonColor: '#02ccc6',
            padding: '1px',
            confirmButtonText: '<i class="pi pi-trash"> Eliminar!!!!!</i>'
        });
    }

    questionSendMail({title = '¿Está seguro de notificar a todos los invitados?'}) {
        return Swal.fire({
            title,
            width: '300px',
            color: '#4f62fa',  
            showCancelButton: true,
            confirmButtonColor: ' #3ea664',
            cancelButtonColor: '#02ccc6',
            padding: '1px',
            confirmButtonText: '<i class="pi pi-send"> Notificar!!!!!</i>'
        });
    }

    invalidFields() {
        return Swal.fire({
            title: '',
            text:'Por favor ingrese todos los campos',
            icon: 'error',
            width: '300px',
            color: 'red',           
            confirmButtonColor:'#0078d7',
            padding: '2px'
        });
    }

    successUpdateGuest() {
        return Swal.fire({
            title: '',
            text:'Usuario modificado exitosamente',
            icon: 'success',
            width: '300px',
            color: '#0078d7',           
            confirmButtonColor:'#0078d7',
            padding: '2px'
        });
    }

    successStoreGuest() {
        return Swal.fire({
            title: '',
            text:'Usuario registrado exitosamente',
            icon: 'success',           
            width: '300px',
            color: '#0078d7',           
            confirmButtonColor:'#0078d7',
            padding: '2px'
        });
    }

    badData() {
        return Swal.fire({
            text: 'No se encontraron invitados con esa información',
            width: '300px',
            color: '#BD945A',
            confirmButtonColor:'#BD945A',
        })
    }

    emptyField() {
        return Swal.fire({
            text: 'Por favor ingrese un email o un número de teléfono',
            width: '300px',
            color: '#BD945A',
            confirmButtonColor:'#BD945A',
        })
    }

    successConfirmation() {
        return Swal.fire({
            icon: 'success',
            iconColor: '#BD945A',
            text: 'Su asistencia ha sido registrada exitosamente!',
            width: '300px',
            color: '#BD945A',
            confirmButtonColor:'#BD945A',
        })
    }

    badCredentials(){
        return Swal.fire({
            text: 'Email o contraseña incorrecta',
            width: '300px',
            color: '#0078d7',
            icon:'info',
            confirmButtonColor:'#0078d7',
            padding: '2px'
        })
    }
    
    successImportGuests() {
        return Swal.fire({
            title: '',
            text:'Información importada exitosamente',
            icon: 'success',           
            width: '300px',
            color: '#0078d7',           
            confirmButtonColor:'#0078d7',
            padding: '2px'
        })
    }

    successStoreTables() {
        return Swal.fire({
            title: '',
            text:'Mesas creadas exitosamente',
            icon: 'success',           
            width: '300px',
            color: '#0078d7',           
            confirmButtonColor:'#0078d7',
            padding: '2px'
        })
    }

    successStoreChairs() {
        return Swal.fire({
            title: '',
            text:'Sillas agregadas exitosamente',
            icon: 'success',           
            width: '300px',
            color: '#0078d7',           
            confirmButtonColor:'#0078d7',
            padding: '2px'
        })
    }

    successAddChair() {
        return Swal.fire({
            title: '',
            text:'Silla asignada exitosamente',
            icon: 'success',           
            width: '300px',
            color: '#0078d7',           
            confirmButtonColor:'#0078d7',
            padding: '2px'
        })
    }

    get fieldRequired(): string {
        return 'El campo es obligatorio.';
    }

    get fieldEmail(): string {
        return 'El campo debe tener un fomato de correo valido.';
    }

    fieldMinLength(field: any) {
        return `Mínimo de caracteres es ${field.errors.minlength.requiredLength}.`;
    }

    fieldMaxLength(field: any): string {
        return `Máximo de caracteres es ${field.errors.maxlength.requiredLength}.`;
    }

    get fieldNoPasswordMatch(): string {
        return 'Las contraseñas no coinciden.';
    }

    paginatorTotalRegisters(paginator: any): string {
        return 'En total hay ' + (paginator?.total ? paginator.total : 0) + ' registros.';
    }
}
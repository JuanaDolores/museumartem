import './Auth.css';
import { React } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../links/Card';
import axios from 'axios';

// import MuestraPosts from '../components/MuestraPost';

const NuevoPost = (props) => {
	const { datos} = props;
	const { respuesta, setRespuesta} = {props};
	
    const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm();

    const onSubmit = async (data) => {
		await axios
			.post(
				'http://localhost:5000/api/post',
                {
                    nombre: data.nombre,
                    opinion: data.opinion,
					recomendacion: data.recomendacion,
					creador: datos.userId, // del prop enviado desde AQpp.js extraemos el userId
				},
				{
					headers: {
						Authorization: 'Bearer ' + datos.token, // En los headers van 'Bearer ' + token recibido
					},
				}
			)
			.then((response) => {
				console.log('Todo correcto', response.data);
				setRespuesta(response.data);
				console.log(respuesta);
			})
			.cath((error) => {
				console.log(error.response.data);
			});
	};


	return (
		<div>
		<Card className='authentication'>
			<h2 className="titleForm newForm">Datos de la Publicación </h2>
			<form className='card' onSubmit={handleSubmit(onSubmit)}>
				<input className='name'
					type='text'
					placeholder='Nombre'
					name='title'
					{...register('nombre', { required: true, message: 'Requerido' })}
				/>
				<textarea className='text-area'
					type='text'
					placeholder='Opinión'
					{...register('Opinión', {
						required: true,
						message: 'Campo requerido',
					})}
				/>
				<p className="boolean">Visita Recomendada</p>
				<input className='opinion'
					type='checkbox'
					name=''
					placeholder='¿Lo recomienda?'
					{...register('recomendación', {
						required: true,
						message: 'Campo requerido',
					})}
				/>
				
				<input className='creator'
					type='creador'
					placeholder='Creador'
					{...register('creador', { required: true }, 'Campo requerido')}
				/>
				
				<button className='buttonF'
				 type='submit'>Enviar Post</button>
			</form>
		</Card>
		{/* <MuestraPosts datos={respuesta} /> */}
		
	</div>
	);
};


export default NuevoPost;

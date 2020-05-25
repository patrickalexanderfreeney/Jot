import React, { useState, useContext } from 'react';
import { PostContext } from './context/store';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Form, Input, TextArea, Button, Label } from '../styles/Containers';

const JotForm = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [tags, setTags] = useState('');
	const history = useHistory();

	const [state, dispatch] = useContext(PostContext);

	const createJot = async (e) => {
		e.preventDefault();

		const config = {
			'Content-Type': 'application/json',
			Authorization: localStorage.id
		};

		try {
			const response = await Axios.post(
				'http://localhost:3000/jots',
				{
					title,
					body,
					tags,
					user_id: localStorage.id
				},
				config
			);
			console.log(response);
			dispatch({ type: 'ADDJOT', payload: response.data });
			setTitle('');
			setBody('');
			setTags('');
		} catch (error) {
			console.error(error);
		}
	};
	const editJot = async (e) => {
		e.preventDefault();

		const config = {
			'Content-Type': 'application/json',
			Authorization: localStorage.id
		};

		try {
			const response = await Axios.patch(
				'http://localhost:3000/jots',
				{
					title,
					body,
					tags,
					user_id: localStorage.id
				},
				config
			);
			console.log(response);
			dispatch({ type: 'EDITJOT', payload: response.data });
		} catch (error) {
			console.error(error);
		}
	};

	return state.editPost ? (
		<>
			<Form top='3%' left='5%' width='90%'>
				<Label>
					Title:
					<Input
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						width='100%'
						type='text'
						value={state.editJot.title}
					/>
				</Label>
				<Label>
					Body:
					<TextArea
						onChange={(e) => {
							setBody(e.target.value);
						}}
						rows='23'
						cols='50'
						type='textarea'
						value={state.editJot.body}
					/>
				</Label>
				<Label>
					<Input
						onChange={(e) => {
							setTags(e.target.value);
						}}
						placeholder='add tags'
						type='text'
						value={state.editJot.tags}
					/>
				</Label>
				<Button onClick={editJot} value='Submit'>
					Submit
				</Button>
			</Form>
		</>
	) : (
		<>
			<Form top='3%' left='5%' width='90%'>
				<Label>
					Title:
					<Input
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						width='100%'
						type='text'
						value={title}
					/>
				</Label>
				<Label>
					Body:
					<TextArea
						onChange={(e) => {
							setBody(e.target.value);
						}}
						rows='23'
						cols='50'
						type='textarea'
						value={body}
					/>
				</Label>
				<Label>
					<Input
						onChange={(e) => {
							setTags(e.target.value);
						}}
						placeholder='add tags'
						type='text'
						value={tags}
					/>
				</Label>
				<Button onClick={createJot} value='Submit'>
					Submit
				</Button>
			</Form>
		</>
	);
};

export default JotForm;

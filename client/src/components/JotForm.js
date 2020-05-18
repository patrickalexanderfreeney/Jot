import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Form, Input, TextArea, Button, Label } from '../styles/Containers';

const JotForm = (props) => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [tags, setTags] = useState('');
	const history = useHistory();

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
		} catch (error) {
			console.error(error);
		}
	};

	return (
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

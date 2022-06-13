import React, { Component } from "react";

export default class Login extends Component {
	state = {
		username: "",
		password: "",
	};
	handleChange = (evt) => {
		const fields = Object.assign({}, this.state);
		fields[evt.target.name] = evt.target.value;
		this.setState({ ...fields });
	};
	render() {
		return (
			<div className='flex justify-center items-center'>
				<div className='flex flex-col absolute top-[30%] shadow-lg brder-[2px] p-5 w-[60%] rounded-lg'>
					<text className='text-2xl'>Login </text>
					<div className='flex mt-3'>
						<input
							className='border-2 rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 '
							type='text'
							placeholder='Username'
							name='username'
							value={this.state.username}
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className='flex mt-3'>
						<input
							className='border-2 rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 '
							type='password'
							name='password'
							placeholder='Password'
							value={this.state.password}
							onChange={this.handleChange}
							required
						/>
					</div>
					<input
						className='btn w-[100%] flex justify-center text-center  text-white bg-[#8a4df3] rounded-md md:p-3 p-2  hover:scale-[1.]  mt-5 ease-in duration-100 cursor-pointer hover:bg-blue-500'
						type='button'
						value='Login'
					/>
				</div>
			</div>
		);
	}
}

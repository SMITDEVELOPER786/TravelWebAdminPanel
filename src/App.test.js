import Login from '../src/Components/Login.jsx';
import React from "react"
import { render, screen ,fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom"

// //Only SIMPLE Test
test('Always true test', () => {
    expect(true).toBe.true;
});


// //for render componenets
test('Test Run in Login Page', () => {
    render(<Login />);
});

// // //Find Text 
test('Find Sign In Text', () => {
    render(<Login />);

    const headingElement = screen.getByText('Sign in');

    expect(headingElement).toBeInTheDocument();
});

// // //Check email input placeholder 
test('Check email input placeholder', () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText('email');
    
    expect(emailInput).toBeInTheDocument();
});


test('Check if email input value is stored correctly', () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText('email');
    
    // Simulate user input
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Assert that the input value is stored correctly
    expect(emailInput.value).toBe('test@example.com');
});


test('Check if login button is available and triggers login action', () => {
    render(<Login />);

    // Find the login button
    const loginButton = screen.getByRole('button', { name: /Login here/i });
    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);

    
});
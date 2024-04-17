import React, { useState } from 'react';

const ModeratorPanel = () => {
    const [requests, setRequests] = useState([]);

    // Функция для загрузки запросов от клиентов (получения доступа)
    const loadRequests = () => {
        // Здесь можно добавить логику загрузки запросов с сервера
    };

    // Функция для подтверждения запроса и предоставления доступа клиенту
    const approveRequest = (requestId) => {
        // Здесь можно добавить логику подтверждения запроса
    };

    return (
        <div>
            <h2>Moderator Panel</h2>
            <button onClick={loadRequests}>Load Requests</button>
            <ul>
                {requests.map(request => (
                    <li key={request.id}>
                        <div>Name: {request.firstName} {request.lastName}</div>
                        <div>Phone Number: {request.phoneNumber}</div>
                        <div>City: {request.city}</div>
                        <div>Code: {request.code}</div>
                        <button onClick={() => approveRequest(request.id)}>Approve Request</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ModeratorPanel;

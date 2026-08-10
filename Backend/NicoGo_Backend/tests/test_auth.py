def test_register_and_get_current_user(client):
    payload = {
        "email": "turista@example.com",
        "full_name": "Turista Demo",
        "password": "ClaveSegura123",
        "user_type": "tourist",
    }
    register_response = client.post("/api/v1/auth/register", json=payload)
    assert register_response.status_code == 201

    token = register_response.json()["access_token"]
    me_response = client.get(
        "/api/v1/users/me",
        headers={"Authorization": f"Bearer {token}"},
    )
    assert me_response.status_code == 200
    assert me_response.json()["email"] == payload["email"]

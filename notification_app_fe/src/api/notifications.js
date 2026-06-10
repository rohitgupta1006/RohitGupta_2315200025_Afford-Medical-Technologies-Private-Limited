import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyb2hpdC5ndXB0YV9jcy5kYTIzQGdsYS5hYy5pbiIsImV4cCI6MTc4MTA3NjgwMywiaWF0IjoxNzgxMDc1OTAzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiM2RmZmMyM2EtZWZiYS00MDBmLWIwNDEtMTA4Y2RjYTI4MDY5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicm9oaXQgZ3VwdGEiLCJzdWIiOiI3YTE3NDEyYi0yMzA3LTQ2ZGItOTFhNS0zYTg2MDBhYjQyNTEifSwiZW1haWwiOiJyb2hpdC5ndXB0YV9jcy5kYTIzQGdsYS5hYy5pbiIsIm5hbWUiOiJyb2hpdCBndXB0YSIsInJvbGxObyI6IjIzMTUyMDAwMjUiLCJhY2Nlc3NDb2RlIjoiUlBzZ1l0IiwiY2xpZW50SUQiOiI3YTE3NDEyYi0yMzA3LTQ2ZGItOTFhNS0zYTg2MDBhYjQyNTEiLCJjbGllbnRTZWNyZXQiOiJWdHhSbmp1VU1CTVNLZFl0In0.A-i9wIQLwwtIlKFeb8NaBTWaKJAMhfeGfqG1aO0RHHU";

export const fetchNotifications = async () => {

  const response = await axios.get(

    "http://4.224.186.213/evaluation-service/notifications",

    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    }
  );

  return response.data.notifications;
};
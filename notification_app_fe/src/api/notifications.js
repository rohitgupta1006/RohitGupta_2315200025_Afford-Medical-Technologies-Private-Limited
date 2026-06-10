import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyb2hpdC5ndXB0YV9jcy5kYTIzQGdsYS5hYy5pbiIsImV4cCI6MTc4MTA3NTM4MywiaWF0IjoxNzgxMDc0NDgzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOWM1ZTIzZTAtYmNkMC00N2Y2LTlkMTMtYjlmZWVkOTAzZjQ1IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicm9oaXQgZ3VwdGEiLCJzdWIiOiI3YTE3NDEyYi0yMzA3LTQ2ZGItOTFhNS0zYTg2MDBhYjQyNTEifSwiZW1haWwiOiJyb2hpdC5ndXB0YV9jcy5kYTIzQGdsYS5hYy5pbiIsIm5hbWUiOiJyb2hpdCBndXB0YSIsInJvbGxObyI6IjIzMTUyMDAwMjUiLCJhY2Nlc3NDb2RlIjoiUlBzZ1l0IiwiY2xpZW50SUQiOiI3YTE3NDEyYi0yMzA3LTQ2ZGItOTFhNS0zYTg2MDBhYjQyNTEiLCJjbGllbnRTZWNyZXQiOiJWdHhSbmp1VU1CTVNLZFl0In0.RpiKln2eu3S9hDMrByUxbPqVbmgboqZAcDZZE1fJYtg";

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
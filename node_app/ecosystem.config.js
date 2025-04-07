module.exports = {
  apps: [
    {
      name: "flask-app",
      cwd: "/home/cloud-user/T10MidTermProject/flask_app",
      script: "gunicorn -b 0.0.0.0:5000 app:app",
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "node-app",
      cwd: "/home/cloud-user/T10MidTermProject/node_app",
      script: "index.js", 
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    }
  ]
}

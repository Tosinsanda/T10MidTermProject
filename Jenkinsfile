pipeline {
    agent { label 'ubuntu-agent' }

    environment {
        FLASK_DIR = 'flask_app'
        NODE_DIR = 'node_app'
        DB_DIR = 'db'
    }

        stage('Install Flask Dependencies') {
            steps {
                dir("${FLASK_DIR}") {
                    sh 'pip3 install -r requirements.txt'
                }
            }
        }

        stage('Install Node Dependencies') {
            steps {
                dir("${NODE_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Run Flask App') {
            steps {
                dir("${FLASK_DIR}") {
                    sh 'nohup python3 app.py &'
                }
            }
        }

        stage('Run Node App') {
            steps {
                dir("${NODE_DIR}") {
                    sh 'nohup node index.js &'
                }
            }
        }
    }
}


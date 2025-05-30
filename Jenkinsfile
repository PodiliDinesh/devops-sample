pipeline {
    agent any

    environment {
        IMAGE_NAME = "devops-sample-app"
        CONTAINER_NAME = "devops-sample-container"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/PodiliDinesh/devops-sample.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop any old container
                    sh "docker rm -f ${CONTAINER_NAME} || true"
                    // Run new container
                    sh "docker run -d -p 3000:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
                }
            }
        }
    }
}


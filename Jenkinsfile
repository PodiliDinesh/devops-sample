pipeline {
    agent any
    // This uses any available Jenkins agent (node)

    stages {
        stage('Checkout Code') {
            steps {
                // Pulls your project from GitHub using SSH credentials
                git credentialsId: 'github-ssh', url: 'git@github.com:PodiliDinesh/devops-sample.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Builds a Docker image with tag 'devops-sample'
                    docker.build('devops-sample')
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Runs the Docker container in background with port 3000 exposed
                    sh 'docker run -d -p 3000:3000 devops-sample'
                }
            }
        }
    }

    post {
        always {
            // Always runs after pipeline ends
            echo '✅ Pipeline finished.'
        }
    }
}

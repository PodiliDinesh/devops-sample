pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git credentialsId: 'github-ssh', url: 'git@github.com:PodiliDinesh/devops-sample.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('devops-sample')
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Clean up old containers first (optional)
                    sh 'docker rm -f devops-app || true'
                    // Run new one
                    sh 'docker run -d --name devops-app -p 3000:3000 devops-sample'
                }
            }
        }
    }

    post {
        always {
            echo '✅ Jenkins Pipeline Completed'
        }
    }
}

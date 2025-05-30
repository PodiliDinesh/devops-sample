pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/YOUR_USERNAME/devops-sample.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          docker.build('devops-sample-image')
        }
      }
    }

    stage('Run Docker Container') {
      steps {
        script {
          docker.image('devops-sample-image').run('-d -p 3000:3000')
        }
      }
    }
  }
}

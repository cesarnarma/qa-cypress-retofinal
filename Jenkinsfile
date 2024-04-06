pipeline {
    agent any
    stages {
        stage('Git Checkout') {
            steps {
                script {
                    git branch: 'main',
                        url: 'https://github.com/cesarnarma/qa-cypress-retofinal'
                }
            }
        }
        stage('Install dependencies') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }
        stage('Run tests') {
            steps {
                script {
                    bat 'npm run cy:run-ci'
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'cypress/reports/**'
        }
    }
}